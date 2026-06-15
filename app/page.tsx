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
  IconSound,
  IconLighting,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <Atmosphere variant="hero" />
        <Container className="relative z-2">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="flex flex-col gap-7">
              <p className="rise label" style={{ animationDelay: "120ms" }}>
                EVENT PLANNING &amp; OPERATION
              </p>
              <h1 className="font-serif text-[2.6rem] leading-[1.12] sm:text-6xl md:text-[4.2rem] md:leading-[1.05] text-balance">
                <span className="rise block" style={{ animationDelay: "220ms" }}>
                  브랜드의 순간을
                </span>
                <span
                  className="rise block gold-text"
                  style={{ animationDelay: "360ms" }}
                >
                  설계합니다.
                </span>
              </h1>
              <p
                className="rise max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                style={{ animationDelay: "520ms" }}
              >
                기획부터 연출, 현장 운영까지 — 기업 행사와 공연·페스티벌의 모든
                순간을 하나의 흐름으로 완성하는 행사 기획·운영 파트너.
              </p>
              <div
                className="rise flex flex-wrap items-center gap-4 pt-2"
                style={{ animationDelay: "660ms" }}
              >
                <CTAButton href="/contact">프로젝트 의뢰하기</CTAButton>
                <CTAButton href="/services" variant="ghost">
                  서비스 살펴보기
                </CTAButton>
              </div>
            </div>

            <div
              className="rise relative aspect-[4/5] overflow-hidden rounded-sm border border-line sm:aspect-[5/4] lg:aspect-[4/5]"
              style={{ animationDelay: "320ms" }}
            >
              <img
                src={heroImage}
                alt="무대 조명이 켜진 공연 현장"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/40 px-5 py-3.5 backdrop-blur">
                <span className="text-sm font-medium text-white">
                  현장에서 완성되는 기획
                </span>
                <span className="font-display text-xs tracking-wider text-white/70">
                  HARAM PARTNERS
                </span>
              </div>
            </div>
          </div>
        </Container>
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
