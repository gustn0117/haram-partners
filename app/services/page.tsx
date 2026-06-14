import type { Metadata } from "next";
import { processSteps } from "@/lib/content";
import { Container, Eyebrow, SectionHeading, CTAButton } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ServicePlatform } from "@/components/ServicePlatform";

export const metadata: Metadata = {
  title: "서비스 · 장비 렌탈",
  description:
    "행사 기획·운영부터 음향·조명 장비 렌탈까지. 하람파트너스의 통합 서비스 플랫폼에서 카테고리별 패키지를 확인하세요.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICE PLATFORM"
        title={
          <>
            기획부터 장비까지,
            <br />
            <span className="gold-text">한 곳에서.</span>
          </>
        }
        description="행사 기획·운영과 음향·조명 장비 렌탈을 하나의 플랫폼에서 제공합니다. 카테고리를 선택해 필요한 패키지를 확인하세요."
      />

      {/* Platform catalog */}
      <section className="py-20 md:py-28">
        <Container>
          <ServicePlatform />
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
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
              기획·운영부터 장비 렌탈까지, 필요한 구성을 알려주시면 맞춤 제안과
              견적을 보내드립니다.
            </p>
            <CTAButton href="/contact">상담·견적 신청하기</CTAButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
