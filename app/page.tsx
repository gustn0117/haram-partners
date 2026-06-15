/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  services,
  rentalCategories,
  processSteps,
  heroImage,
} from "@/lib/content";
import { Container, Eyebrow, CTAButton, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Atmosphere } from "@/components/Atmosphere";
import { Strengths } from "@/components/Strengths";
import {
  ServiceIcon,
  ArrowUpRight,
  ArrowRight,
  IconSound,
  IconLighting,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Scrims for text legibility */}
        <div aria-hidden className="absolute inset-0 bg-black/45" />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/60"
        />

        <Container className="relative z-2 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-7">
            <p
              className="rise text-xs font-semibold uppercase tracking-[0.18em] text-gold-bright"
              style={{ animationDelay: "120ms" }}
            >
              EVENT PLANNING &amp; OPERATION
            </p>
            <h1 className="font-serif text-[2.7rem] leading-[1.12] text-white sm:text-6xl md:text-[4.4rem] md:leading-[1.05] text-balance">
              <span className="rise block" style={{ animationDelay: "220ms" }}>
                브랜드의 순간을
              </span>
              <span
                className="rise block text-gold-bright"
                style={{ animationDelay: "360ms" }}
              >
                설계합니다.
              </span>
            </h1>
            <p
              className="rise max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
              style={{ animationDelay: "520ms" }}
            >
              기획부터 연출, 현장 운영까지 — 기업 행사와 공연·페스티벌의 모든
              순간을 하나의 흐름으로 완성하는 행사 기획·운영 파트너.
            </p>
            <div
              className="rise flex flex-wrap items-center justify-center gap-4 pt-2"
              style={{ animationDelay: "660ms" }}
            >
              <CTAButton href="/contact">프로젝트 의뢰하기</CTAButton>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-sm border border-white/40 px-7 py-3.5 text-sm font-medium tracking-tight text-white transition-colors duration-500 hover:border-gold-bright hover:text-gold-bright"
              >
                서비스 살펴보기
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[0.65rem] font-medium tracking-[0.3em] text-white/60">
            SCROLL
          </span>
          <span className="h-10 w-px bg-linear-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* ───────────────── Intro statement ───────────────── */}
      <section className="border-t border-line py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <Reveal>
              <Eyebrow>WHO WE ARE</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-serif text-2xl leading-[1.6] sm:text-[1.75rem] text-balance">
                하람파트너스는 단순한 행사 대행이 아니라,
                <span className="text-muted">
                  {" "}
                  브랜드가 전하고 싶은 메시지를 사람들의 기억에 남는 경험으로
                  번역합니다.{" "}
                </span>
                기획의 정교함과 현장의 안정감, 그 사이의 모든 디테일을 책임집니다.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────────── Strengths ───────────────── */}
      <Strengths background="alt" />

      {/* ───────────────── Services ───────────────── */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <Atmosphere variant="soft" />
        <Container className="relative z-2">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="WHAT WE DO"
              title={
                <>
                  기획부터 부스까지,
                  <br />
                  하나의 완성도.
                </>
              }
            />
            <Reveal delay={150}>
              <Link
                href="/services"
                className="link-underline inline-flex items-center gap-2 text-sm text-gold"
              >
                전체 서비스 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal
                key={service.id}
                delay={i * 90}
                className={
                  i === services.length - 1 && services.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }
              >
                <Link
                  href={`/services/${service.id}`}
                  className="card-hover group flex h-full flex-col gap-6 rounded-2xl border border-line bg-surface p-8 md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-line-strong text-gold transition-colors duration-500 group-hover:border-gold">
                      <ServiceIcon id={service.id as never} className="h-7 w-7" />
                    </div>
                    <span className="font-display text-3xl text-faint">
                      {service.no}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-display text-xs tracking-wide text-gold">
                      {service.tagline}
                    </span>
                    <h3 className="font-serif text-2xl">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────── Equipment rental ───────────────── */}
      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="EQUIPMENT RENTAL"
              title={
                <>
                  음향·조명 장비도
                  <br />
                  패키지로 빌려보세요.
                </>
              }
            />
            <Reveal delay={150} className="max-w-sm">
              <p className="text-sm leading-relaxed text-muted">
                자체 보유 장비로 구성한 음향·조명 렌탈 패키지. 장비부터 셋업,
                자사 오퍼레이터 운영까지 외주 없이 한 번에 제공합니다.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {rentalCategories.map((cat, i) => {
              const Icon = cat.id === "sound" ? IconSound : IconLighting;
              return (
                <Reveal key={cat.id} delay={i * 110}>
                  <Link
                    href={`/services/${cat.id}`}
                    className="card-hover group flex h-full flex-col gap-7 rounded-2xl border border-line bg-surface p-8 md:p-10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-line-strong text-gold transition-colors duration-500 group-hover:border-gold">
                        <Icon className="h-7 w-7" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-500 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <span className="font-display text-xs tracking-wide text-gold">
                        {cat.tagline}
                      </span>
                      <h3 className="font-serif text-2xl">{cat.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {cat.description}
                      </p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-6">
                      {cat.packages.map((pkg) => (
                        <span
                          key={pkg.id}
                          className="rounded-sm border border-line px-3 py-1.5 text-xs text-muted transition-colors group-hover:border-line-strong"
                        >
                          {pkg.name}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────── Process ───────────────── */}
      <section className="relative overflow-hidden border-t border-line bg-ink-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="검증된 4단계 운영 프로세스"
            align="center"
            className="mx-auto max-w-2xl"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.no}
                delay={i * 90}
                className="group relative flex flex-col gap-5 bg-ink-2 p-8 md:p-9"
              >
                <span className="font-display text-5xl text-faint transition-colors duration-500 group-hover:text-gold">
                  {step.no}
                </span>
                <h3 className="font-serif text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
