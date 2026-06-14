import type { Metadata } from "next";
import { company } from "@/lib/content";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Instagram } from "@/components/icons";

export const metadata: Metadata = {
  title: "문의",
  description:
    "하람파트너스에 행사 기획·운영을 문의하세요. 영업일 기준 1일 이내에 담당 기획자가 회신드립니다.",
};

const channels = [
  {
    icon: Phone,
    label: "전화 문의",
    value: company.phone,
    href: `tel:${company.phone.replace(/-/g, "")}`,
  },
  {
    icon: Mail,
    label: "이메일",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  { icon: MapPin, label: "오시는 길", value: company.address },
  { icon: Clock, label: "운영 시간", value: company.hours },
  { icon: Instagram, label: "인스타그램", value: company.instagram },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title={
          <>
            행사의 시작은
            <br />
            <span className="gold-text">한 통의 문의</span>입니다.
          </>
        }
        description="기획 단계부터 함께합니다. 행사에 대한 간단한 정보만 남겨주시면 담당 기획자가 맞춤 제안을 드립니다."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Info column */}
            <Reveal className="flex flex-col gap-10">
              <div className="flex flex-col gap-7">
                {channels.map((ch) => {
                  const Icon = ch.icon;
                  const content = (
                    <div className="group flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-strong text-gold transition-colors duration-500 group-hover:border-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex flex-col gap-1 pt-0.5">
                        <span className="text-xs tracking-[0.16em] text-faint uppercase">
                          {ch.label}
                        </span>
                        <span className="text-base text-paper">{ch.value}</span>
                      </div>
                    </div>
                  );
                  return ch.href ? (
                    <a key={ch.label} href={ch.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={ch.label}>{content}</div>
                  );
                })}
              </div>

              {/* Stylized map */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-ink-2">
                <MapArtwork />
                <div className="absolute bottom-5 left-5 rounded-lg border border-line-strong bg-ink/70 px-4 py-2.5 text-sm backdrop-blur">
                  <span className="text-gold">{company.nameKo}</span>
                  <span className="ml-2 text-muted">{company.address}</span>
                </div>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

/* Stylized abstract map — decorative SVG stand-in for an embedded map. */
function MapArtwork() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" aria-hidden>
      <rect width="480" height="360" fill="#f3eee2" />
      <g stroke="rgba(26,22,14,0.06)" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 45} x2="480" y2={i * 45} />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="360" />
        ))}
      </g>
      <path
        d="M0 250 L150 250 L150 150 L300 150 L300 220 L480 220"
        stroke="rgba(154,122,44,0.5)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M70 0 L70 130 L230 130 L230 360"
        stroke="rgba(26,22,14,0.12)"
        strokeWidth="2"
        fill="none"
      />
      <g>
        <circle cx="230" cy="150" r="26" fill="rgba(154,122,44,0.14)" />
        <circle cx="230" cy="150" r="14" fill="rgba(154,122,44,0.24)" />
        <circle cx="230" cy="150" r="5" fill="#9a7a2c" />
      </g>
    </svg>
  );
}
