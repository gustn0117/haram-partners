import type { Metadata } from "next";
import Link from "next/link";
import { addons } from "@/lib/content";
import { Container, Eyebrow, SectionHeading, CTAButton } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import {
  IconWeb,
  IconDoc,
  MapPin,
  IconBrand,
  IconPhotoBooth,
  ArrowUpRight,
} from "@/components/icons";

const addonIcons = {
  web: IconWeb,
  venue: MapPin,
  marketing: IconBrand,
  media: IconPhotoBooth,
  print: IconDoc,
} as const;

export const metadata: Metadata = {
  title: "부가서비스",
  description:
    "홈페이지 제작, 장소 섭외·대관, 마케팅·홍보, 사진·영상, 인쇄물까지. 행사 준비부터 마무리까지 필요한 부가서비스를 함께 제공합니다.",
};

export default function AddonsPage() {
  return (
    <>
      <PageHero
        eyebrow="ADD-ON SERVICES"
        title={
          <>
            행사를 둘러싼
            <br />
            <span className="text-white">모든 것까지.</span>
          </>
        }
        description="행사 그 자체를 넘어, 준비부터 마무리까지 필요한 일들을 함께 해결해 드립니다. 행사 기획과 묶어 한 번에 진행할 수 있습니다."
        backgroundImage="/addons/hero.png"
      />

      {/* Add-on services */}
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="WHAT WE OFFER" title="부가서비스 영역" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((a, i) => {
              const Icon = addonIcons[a.icon];
              return (
                <Reveal key={a.id} delay={i * 70}>
                  <Link
                    href={`/addons/${a.id}`}
                    className="card-hover group flex h-full flex-col gap-5 rounded-2xl border border-line bg-surface p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong text-gold transition-colors duration-500 group-hover:border-gold">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-500 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-display text-xs tracking-wide text-gold">
                        {a.tagline}
                      </span>
                      <h3 className="font-serif text-xl">{a.name}</h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {a.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal className="flex flex-col items-center gap-8 text-center">
            <Eyebrow>START A PROJECT</Eyebrow>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-balance">
              필요한 구성을 함께 정리해 드립니다
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              행사 기획과 부가서비스를 어떻게 묶을지 막막하시면, 목적만 알려주세요.
              맞춤으로 제안과 견적을 보내드립니다.
            </p>
            <CTAButton href="/contact">상담·견적 신청하기</CTAButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
