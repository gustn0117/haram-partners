import type { ReactNode } from "react";
import { Container } from "@/components/ui";

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
    <section className="border-b border-line pt-36 pb-20 md:pt-44 md:pb-24">
      <Container>
        <p className="rise label" style={{ animationDelay: "80ms" }}>
          {eyebrow}
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-serif text-3xl leading-[1.18] sm:text-4xl md:text-[2.9rem] md:leading-[1.12] text-balance"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="rise mt-6 max-w-2xl text-base leading-relaxed text-muted"
            style={{ animationDelay: "340ms" }}
          >
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
