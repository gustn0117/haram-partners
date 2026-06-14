"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { services, rentalCategories } from "@/lib/content";
import {
  ServiceIcon,
  IconSound,
  IconLighting,
  IconStage,
  ArrowUpRight,
  ArrowRight,
  Plus,
} from "@/components/icons";

type TabId = "planning" | "sound" | "lighting";

const TABS: {
  id: TabId;
  label: string;
  sub: string;
  count: number;
  Icon: typeof IconSound;
}[] = [
  {
    id: "planning",
    label: "행사 기획",
    sub: "Event Planning",
    count: services.length,
    Icon: IconStage,
  },
  {
    id: "sound",
    label: "음향 렌탈",
    sub: "Sound Rental",
    count: rentalCategories[0].packages.length,
    Icon: IconSound,
  },
  {
    id: "lighting",
    label: "조명 렌탈",
    sub: "Lighting Rental",
    count: rentalCategories[1].packages.length,
    Icon: IconLighting,
  },
];

function hashToTab(): TabId | null {
  const h = window.location.hash.replace("#", "");
  if (h === "sound" || h === "lighting" || h === "planning") return h;
  if (h === "rental") return "sound";
  return null;
}

export function ServicePlatform() {
  const [active, setActive] = useState<TabId>("planning");

  useEffect(() => {
    let raf = 0;
    const sync = () => {
      const t = hashToTab();
      if (t) setActive(t);
    };
    raf = requestAnimationFrame(sync); // initial hash read, deferred off effect body
    window.addEventListener("hashchange", sync);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  function selectTab(id: TabId) {
    setActive(id);
    if (typeof history !== "undefined") {
      history.replaceState(null, "", `#${id}`);
    }
  }

  return (
    <div id="rental" className="grid scroll-mt-24 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
      {/* Category rail */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <span className="label mb-5 hidden lg:block">CATEGORY</span>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:pb-0">
          {TABS.map((tab) => {
            const on = active === tab.id;
            const Icon = tab.Icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => selectTab(tab.id)}
                className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 lg:w-full ${
                  on
                    ? "border-gold bg-gold/10 text-paper"
                    : "border-line text-muted hover:border-line-strong hover:text-paper"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    on ? "border-gold text-gold" : "border-line text-faint"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-medium tracking-tight">
                    {tab.label}
                  </span>
                  <span className="font-display text-[0.7rem] tracking-wider text-faint">
                    {tab.sub} · {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Content */}
      <div className="min-h-[40vh]">
        {active === "planning" ? <PlanningView /> : <RentalView id={active} />}
      </div>
    </div>
  );
}

function PlanningView() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <span className="font-display text-sm italic text-gold">
          Event Planning
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl">행사 기획·운영</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          행사의 목적과 규모에 맞춰 기획부터 연출, 현장 운영까지 하나의 팀이
          책임집니다.
        </p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="card-hover group flex scroll-mt-28 flex-col gap-6 rounded-2xl border border-line bg-surface/50 p-7 md:p-8"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-line-strong text-gold transition-colors duration-500 group-hover:border-gold">
                <ServiceIcon id={service.id as never} className="h-6 w-6" />
              </div>
              <span className="font-display text-3xl text-faint">
                {service.no}
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-display text-xs italic tracking-wide text-gold">
                {service.tagline}
              </span>
              <h3 className="font-serif text-xl">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function RentalView({ id }: { id: "sound" | "lighting" }) {
  const cat = rentalCategories.find((c) => c.id === id)!;
  const Icon = id === "sound" ? IconSound : IconLighting;

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-line-strong text-gold">
            <Icon className="h-7 w-7" />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm italic text-gold">
              {cat.tagline}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl">{cat.title}</h2>
          </div>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {cat.description}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
          {cat.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted">
              <Plus className="h-3.5 w-3.5 text-gold" />
              {f}
            </li>
          ))}
        </ul>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {cat.packages.map((pkg) => (
          <article
            key={pkg.id}
            id={pkg.id}
            className="card-hover group flex scroll-mt-28 flex-col gap-6 rounded-2xl border border-line bg-surface/50 p-7 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-serif text-xl">{pkg.name}</h3>
                  {pkg.badge ? (
                    <span className="rounded-full bg-gold px-2.5 py-0.5 text-[0.68rem] font-medium text-ink">
                      {pkg.badge}
                    </span>
                  ) : null}
                </div>
                <span className="text-sm text-muted">{pkg.tagline}</span>
              </div>
              <span className="shrink-0 rounded-full border border-line-strong px-3 py-1 text-xs text-gold">
                {pkg.capacity}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-faint">
              <span className="tracking-[0.14em] uppercase">Best for</span>
              <span className="text-muted">{pkg.bestFor}</span>
            </div>

            <div className="flex flex-col gap-3 border-t border-line pt-5">
              <span className="label">구성</span>
              <ul className="flex flex-col gap-2.5">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span className="text-paper/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="group/btn mt-auto inline-flex items-center justify-between gap-3 rounded-full border border-line-strong px-5 py-3 text-sm transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              이 패키지로 견적 문의
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-ink-2 p-7 sm:flex-row sm:items-center sm:justify-between md:p-9">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif text-lg">맞춤 패키지가 필요하신가요?</h3>
          <p className="text-sm text-muted">
            행사 규모와 장소에 맞춰 음향·조명을 통합 구성해 드립니다.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors duration-500 hover:bg-gold-bright"
        >
          맞춤 견적 받기
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
