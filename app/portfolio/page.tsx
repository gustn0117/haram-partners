import type { Metadata } from "next";
import { Container, Eyebrow, CTAButton } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "기업 컨퍼런스부터 대규모 페스티벌까지, 하람파트너스가 기획하고 운영한 대표 프로젝트.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="SELECTED WORK"
        title={
          <>
            기억에 남는 순간을
            <br />
            <span className="gold-text">기록합니다.</span>
          </>
        }
        description="기업 행사부터 대규모 페스티벌까지, 하람파트너스가 직접 기획하고 운영한 프로젝트의 일부입니다."
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <PortfolioGrid />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <Reveal className="flex flex-col items-center gap-8 text-center">
            <Eyebrow>YOUR EVENT NEXT</Eyebrow>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-balance">
              다음 포트폴리오의 주인공은
              <br />
              당신의 브랜드입니다.
            </h2>
            <CTAButton href="/contact">프로젝트 의뢰하기</CTAButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
