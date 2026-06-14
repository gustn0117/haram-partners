import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 label">
      <span className="inline-block h-px w-8 bg-gold/70" />
      {children}
    </span>
  );
}

export function CTAButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-500";
  const styles =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-gold-bright"
      : "border border-line-strong text-paper hover:border-gold hover:text-gold";
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
    </>
  );
  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-serif text-3xl leading-[1.25] sm:text-4xl md:text-[2.75rem] text-balance">
        {title}
      </h2>
    </div>
  );
}
