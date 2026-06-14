import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { Atmosphere } from "@/components/Atmosphere";

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
    <section className="relative overflow-hidden border-b border-line pt-36 pb-20 md:pt-44 md:pb-28">
      <Atmosphere variant="soft" />
      <Container className="relative z-2">
        <p className="rise label" style={{ animationDelay: "80ms" }}>
          {eyebrow}
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-serif text-4xl leading-[1.15] sm:text-5xl md:text-[3.8rem] md:leading-[1.1] text-balance"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="rise mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "340ms" }}
          >
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
