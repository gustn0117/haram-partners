import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { Placeholder } from "@/components/Placeholder";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden border-b border-line pt-40 pb-14 md:min-h-[56vh] md:pb-20">
      {/* 배경 — 빗금 플레이스홀더 (실제 사진 확보 시 교체) */}
      <Placeholder tone="dark" />

      <Container className="relative z-2">
        <p
          className="rise text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
          style={{ animationDelay: "80ms" }}
        >
          {eyebrow}
        </p>
        <h1
          className="rise mt-5 max-w-4xl font-serif text-3xl leading-[1.18] text-white sm:text-4xl md:text-[2.9rem] md:leading-[1.12] text-balance"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="rise mt-5 max-w-2xl text-base leading-relaxed text-white/80"
            style={{ animationDelay: "340ms" }}
          >
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
