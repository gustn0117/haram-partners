import type { Metadata } from "next";
import { company, values, aboutStory, faqs } from "@/lib/content";
import { Container, Eyebrow, SectionHeading, CTAButton } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Strengths } from "@/components/Strengths";
import { Placeholder } from "@/components/Placeholder";
import { FaqList } from "@/components/FaqList";
import { Quote } from "@/components/icons";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "2014년부터 이어온 하람파트너스의 철학과 연혁, 그리고 행사를 완성하는 사람들의 이야기.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT HARAM PARTNERS"
        title={
          <>
            행사의 격은
            <br />
            <span className="text-white">디테일</span>에서 완성됩니다.
          </>
        }
        description={company.intro}
      />

      {/* Mission statement */}
      <section className="border-b border-line py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-[0.6fr_1.4fr] md:gap-16">
            <Reveal>
              <Eyebrow>OUR MISSION</Eyebrow>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-8">
              <Quote className="h-10 w-10 text-gold/40" />
              <p className="font-serif text-2xl leading-[1.6] sm:text-3xl sm:leading-[1.55] text-balance">
                우리는 행사를 &lsquo;진행&rsquo;하지 않습니다.
                <span className="text-muted">
                  {" "}
                  브랜드의 메시지가 사람의 마음에 닿는 순간을 설계하고, 그 순간이
                  완벽하게 작동하도록{" "}
                </span>
                보이지 않는 모든 것을 준비합니다.
              </p>
              <p className="text-sm text-faint">— {company.nameKo} 운영 철학</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Image band */}
      <section className="border-b border-line">
        <div className="relative h-[40vh] min-h-72 w-full overflow-hidden md:h-[52vh]">
          <Placeholder tone="light" label="현장 사진" />
        </div>
      </section>

      {/* Story / 운영 철학 */}
      <section className="border-b border-line bg-ink-2 py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="OUR PHILOSOPHY" title="우리가 일을 대하는 태도" />
          <div className="mt-14 flex flex-col">
            {aboutStory.map((s, i) => (
              <Reveal
                key={s.heading}
                delay={i * 90}
                className="grid gap-5 border-t border-line py-10 last:border-b md:grid-cols-[0.9fr_1.4fr] md:gap-12"
              >
                <h3 className="font-serif text-xl leading-snug sm:text-2xl">
                  {s.heading}
                </h3>
                <p className="text-base leading-[1.85] text-paper/90">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Strengths */}
      <Strengths background="plain" />

      {/* Values */}
      <section className="border-b border-line bg-ink-2 py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="OUR VALUES" title="우리가 일하는 방식" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 110}
                className="card-hover flex h-full flex-col gap-5 rounded-2xl border border-line bg-surface/50 p-8 md:p-10"
              >
                <span className="font-display text-4xl text-gold">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-xl leading-snug">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-line py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal className="flex flex-col items-center gap-8 text-center">
            <SectionHeading
              align="center"
              title="함께 만들 행사가 있으신가요?"
              className="mx-auto max-w-xl"
            />
            <CTAButton href="/contact">프로젝트 문의하기</CTAButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
