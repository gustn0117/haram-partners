import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, processSteps, type Service } from "@/lib/content";
import { Container, CTAButton } from "@/components/ui";
import { Placeholder } from "@/components/Placeholder";
import { ArrowLeft } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: "서비스" };
  return { title: service.title, description: service.description };
}

export default async function OfferingDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const { title, tagline, description } = service;

  return (
    <>
      {/* Header — 배경형 히어로 (빗금 플레이스홀더, 실제 사진 확보 시 교체) */}
      <section className="relative flex min-h-[48vh] items-end overflow-hidden border-b border-line pt-32 pb-14 md:min-h-[54vh] md:pb-20">
        <Placeholder tone="dark" />
        <Container className="relative z-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            서비스 전체
          </Link>
          <div className="mt-6 flex max-w-2xl flex-col gap-5">
            <span className="font-display text-sm tracking-wide text-white/70">
              {tagline}
            </span>
            <h1 className="font-serif text-3xl leading-[1.15] text-white sm:text-4xl md:text-[2.9rem] text-balance">
              {title}
            </h1>
            <p className="text-base leading-relaxed text-white/80">
              {description}
            </p>
          </div>
        </Container>
      </section>

      <ServiceBody service={service} />

      {/* CTA */}
      <section className="border-t border-line py-24 md:py-28">
        <Container>
          <div className="flex flex-col items-center gap-7 text-center">
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-balance">
              {title}, 하람파트너스와 함께하세요.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              간단한 정보만 남겨주시면 담당 기획자가 맞춤 제안과 견적을
              보내드립니다.
            </p>
            <CTAButton href="/contact">견적·상담 신청하기</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}

function ServiceBody({ service }: { service: Service }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="label">PROGRAM</span>
            <h2 className="font-serif text-2xl sm:text-3xl">주요 진행 항목</h2>
          </div>
          <ul className="flex flex-col">
            {service.items.map((item, i) => (
              <li
                key={item}
                className="group flex items-center gap-5 border-t border-line py-5 last:border-b"
              >
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base transition-transform duration-500 group-hover:translate-x-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.no}
              className="group flex flex-col gap-4 bg-surface p-7"
            >
              <span className="font-display text-4xl text-faint transition-colors duration-500 group-hover:text-gold">
                {step.no}
              </span>
              <h3 className="font-serif text-lg">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
