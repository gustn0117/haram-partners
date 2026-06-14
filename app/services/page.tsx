import type { Metadata } from "next";
import { services, processSteps } from "@/lib/content";
import { Container, Eyebrow, SectionHeading, CTAButton } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "기업 행사·컨퍼런스, 공연·페스티벌, 브랜드 프로모션, 의전·현장 운영. 하람파트너스의 네 가지 전문 영역.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title={
          <>
            기획부터 운영까지,
            <br />
            <span className="gold-text">통합된 한 흐름.</span>
          </>
        }
        description="규모와 성격이 다른 네 개의 전문 영역을 하나의 팀이 책임집니다. 어떤 행사든, 처음부터 끝까지 하람파트너스 안에서 완성됩니다."
      />

      {/* Detailed service blocks */}
      <section className="border-b border-line">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-24 border-b border-line last:border-b-0"
          >
            <Container>
              <div className="grid gap-10 py-20 md:grid-cols-[1fr_1fr] md:gap-16 md:py-28">
                <Reveal className="flex flex-col gap-7">
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-strong text-gold">
                      <ServiceIcon id={service.id as never} className="h-8 w-8" />
                    </div>
                    <span className="font-display text-5xl text-faint">
                      {service.no}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-display text-sm italic tracking-wide text-gold">
                      {service.tagline}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="max-w-md text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                </Reveal>

                <Reveal delay={140} className="flex flex-col justify-center">
                  <span className="label mb-6">PROGRAM</span>
                  <ul className="flex flex-col">
                    {service.items.map((item, k) => (
                      <li
                        key={item}
                        className="group flex items-center gap-5 border-t border-line py-5 last:border-b"
                      >
                        <span className="font-display text-sm text-gold/70">
                          {String(k + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base transition-transform duration-500 group-hover:translate-x-1">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </Container>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="border-b border-line bg-ink-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="모든 프로젝트는 같은 원칙으로 움직입니다"
            align="center"
            className="mx-auto max-w-2xl"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.no}
                delay={i * 90}
                className="group flex flex-col gap-5 bg-ink-2 p-8 md:p-9"
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

      {/* CTA */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal className="flex flex-col items-center gap-8 text-center">
            <Eyebrow>START A PROJECT</Eyebrow>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-balance">
              어떤 행사를 준비하고 계신가요?
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              간단한 정보만 남겨주시면, 담당 기획자가 맞춤 제안서를 보내드립니다.
            </p>
            <CTAButton href="/contact">상담 신청하기</CTAButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
