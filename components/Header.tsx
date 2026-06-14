"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/lib/content";
import { Monogram, Menu, Close, ArrowUpRight } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(onScroll); // initial read, deferred off the effect body
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${company.nameKo} 홈`}
        >
          <Monogram className="h-8 w-8 text-gold transition-transform duration-500 group-hover:rotate-3" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base tracking-tight text-paper">
              {company.nameKo}
            </span>
            <span className="font-display text-[0.68rem] tracking-[0.32em] text-faint">
              {company.nameEn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-sm tracking-tight transition-colors ${
                  active ? "text-gold" : "text-muted hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm tracking-tight text-paper transition-all duration-500 hover:border-gold hover:text-gold"
          >
            프로젝트 의뢰
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-paper md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-4 font-serif text-lg text-paper"
            >
              {link.label}
              <ArrowUpRight className="h-5 w-5 text-gold" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-white"
          >
            프로젝트 의뢰하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
