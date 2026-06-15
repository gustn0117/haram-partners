import type { Metadata } from "next";
import Link from "next/link";
import { services, rentalCategories, processSteps } from "@/lib/content";
import { Container, Eyebrow, SectionHeading, CTAButton } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { ServiceIcon, IconSound, IconLighting, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "행사 기획·운영부터 음향·조명 장비 렌탈까지. 하람파트너스의 서비스 영역을 한눈에 확인하세요.",
};

type Card = {
  id: string;
  title: string;
  tagline: string;
  description: string;
};

function OfferingCard({
  card,
  icon,
}: {
  card: Card;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={`/services/${card.id}`}
      className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <Placeholder tone="light" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-line-strong bg-ink/70 text-gold backdrop-blur">
          {icon}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <span className="font-display text-xs tracking-wide text-gold">
          {card.tagline}
        </span>
        <h3 className="font-serif text-xl">{card.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{card.description}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm text-gold">
          자세히 보기
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title={
          <>
            기획부터 장비까지,
            <br />
            <span className="text-white">필요한 모든 것.</span>
          </>
        }
        description="행사 기획·운영과 음향·조명 장비 렌탈을 직접 제공합니다. 각 영역을 눌러 자세한 내용을 확인하세요."
      />

      {/* 행사 기획 */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="EVENT PLANNING" title="행사 기획·운영" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <OfferingCard
                  card={s}
                  icon={<ServiceIcon id={s.id as never} className="h-5 w-5" />}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 장비 렌탈 */}
      <section className="border-b border-line bg-ink-2 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="EQUIPMENT RENTAL"
            title="음향·조명 장비 렌탈"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {rentalCategories.map((c, i) => (
              <Reveal key={c.id} delay={i * 90}>
                <OfferingCard
                  card={c}
                  icon={
                    c.id === "sound" ? (
                      <IconSound className="h-5 w-5" />
                    ) : (
                      <IconLighting className="h-5 w-5" />
                    )
                  }
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-b border-line py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="모든 프로젝트는 같은 원칙으로 움직입니다"
            align="center"
            className="mx-auto max-w-2xl"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.no}
                className="group flex flex-col gap-5 bg-surface p-8 md:p-9"
              >
                <span className="font-display text-5xl text-faint transition-colors duration-500 group-hover:text-gold">
                  {step.no}
                </span>
                <h3 className="font-serif text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
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
