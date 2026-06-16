import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { addons, faqs } from "@/lib/content";
import { Container, CTAButton, SectionHeading } from "@/components/ui";
import { Placeholder } from "@/components/Placeholder";
import { FaqList } from "@/components/FaqList";
import { ArrowLeft, Plus } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams() {
  return addons.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const addon = addons.find((a) => a.id === slug);
  if (!addon) return { title: "부가서비스" };
  return { title: addon.name, description: addon.description };
}

export default async function AddonDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const addon = addons.find((a) => a.id === slug);
  if (!addon) notFound();

  const { name, tagline, description } = addon;

  return (
    <>
      {/* Header */}
      <section className="relative flex min-h-[48vh] items-end overflow-hidden border-b border-line pt-32 pb-14 md:min-h-[54vh] md:pb-20">
        <Placeholder tone="dark" />
        <Container className="relative z-2">
          <Link
            href="/addons"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            부가서비스 전체
          </Link>
          <div className="mt-6 flex max-w-2xl flex-col gap-5">
            <span className="font-display text-sm tracking-wide text-white/70">
              {tagline}
            </span>
            <h1 className="font-serif text-3xl leading-[1.15] text-white sm:text-4xl md:text-[2.9rem] text-balance">
              {name}
            </h1>
            <p className="text-base leading-relaxed text-white/80">
              {description}
            </p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div className="flex flex-col gap-3">
              <span className="label">OVERVIEW</span>
              <h2 className="font-serif text-2xl sm:text-3xl">이렇게 진행합니다</h2>
            </div>
            <div className="flex flex-col gap-6">
              {addon.overview.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-[1.85] text-paper/90 sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Scope + Recommended */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="label">SCOPE</span>
                <h2 className="font-serif text-2xl">포함 내용</h2>
              </div>
              <ul className="flex flex-col gap-3.5">
                {addon.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-base">
                    <Plus className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-paper/90">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="label">WHO IT&apos;S FOR</span>
                <h2 className="font-serif text-2xl">이런 경우 추천합니다</h2>
              </div>
              <ul className="flex flex-col">
                {addon.recommendedFor.map((r, i) => (
                  <li
                    key={r}
                    className="flex items-center gap-5 border-t border-line py-4 last:border-b"
                  >
                    <span className="font-display text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-paper/90">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-line bg-ink-2 py-24 md:py-32">
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
          <div className="flex flex-col items-center gap-7 text-center">
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-balance">
              {name}, 하람파트너스와 함께하세요.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              행사 기획과 묶어 한 번에 진행할 수 있습니다. 필요한 구성을
              알려주시면 맞춤 제안과 견적을 보내드립니다.
            </p>
            <CTAButton href="/contact">상담·견적 신청하기</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
