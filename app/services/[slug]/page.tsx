import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  services,
  rentalCategories,
  processSteps,
  type Service,
  type RentalCategory,
} from "@/lib/content";
import { Container, CTAButton } from "@/components/ui";
import { Placeholder } from "@/components/Placeholder";
import { ArrowLeft, ArrowRight, Plus } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.id })),
    ...rentalCategories.map((c) => ({ slug: c.id })),
  ];
}

function lookup(slug: string) {
  const service = services.find((s) => s.id === slug);
  if (service) return { kind: "service" as const, service };
  const rental = rentalCategories.find((c) => c.id === slug);
  if (rental) return { kind: "rental" as const, rental };
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = lookup(slug);
  if (!found) return { title: "서비스" };
  const title =
    found.kind === "service" ? found.service.title : found.rental.title;
  const description =
    found.kind === "service"
      ? found.service.description
      : found.rental.description;
  return { title, description };
}

export default async function OfferingDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const found = lookup(slug);
  if (!found) notFound();

  const title = found.kind === "service" ? found.service.title : found.rental.title;
  const tagline =
    found.kind === "service" ? found.service.tagline : found.rental.tagline;
  const description =
    found.kind === "service"
      ? found.service.description
      : found.rental.description;

  return (
    <>
      {/* Header */}
      <section className="border-b border-line pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            서비스 전체
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              <span className="font-display text-sm tracking-wide text-gold">
                {tagline}
              </span>
              <h1 className="font-serif text-4xl leading-[1.15] sm:text-5xl text-balance">
                {title}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted">
                {description}
              </p>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-line">
              <Placeholder tone="light" label={title} />
            </div>
          </div>
        </Container>
      </section>

      {found.kind === "service" ? (
        <ServiceBody service={found.service} />
      ) : (
        <RentalBody rental={found.rental} />
      )}

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

function RentalBody({ rental }: { rental: RentalCategory }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
          {rental.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted">
              <Plus className="h-3.5 w-3.5 text-gold" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {rental.packages.map((pkg) => (
            <article
              key={pkg.id}
              className="card-hover group flex flex-col gap-6 rounded-2xl border border-line bg-surface p-7 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-serif text-xl">{pkg.name}</h3>
                    {pkg.badge ? (
                      <span className="rounded-sm bg-gold px-2.5 py-0.5 text-[0.68rem] font-medium text-white">
                        {pkg.badge}
                      </span>
                    ) : null}
                  </div>
                  <span className="text-sm text-muted">{pkg.tagline}</span>
                </div>
                <span className="shrink-0 rounded-sm border border-line-strong px-3 py-1 text-xs text-gold">
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
                      <span className="text-paper">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="group/btn mt-auto inline-flex items-center justify-between gap-3 rounded-sm border border-line-strong px-5 py-3 text-sm transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                이 패키지로 견적 문의
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
