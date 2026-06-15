// ─────────────────────────────────────────────────────────────
//  하람파트너스 사이트 콘텐츠
//  실제 정보 확정 시 이 파일만 교체하면 전체 사이트에 반영됩니다.
// ─────────────────────────────────────────────────────────────

export const company = {
  nameKo: "하람파트너스",
  nameEn: "HARAM PARTNERS",
  tagline: "브랜드의 순간을 설계합니다",
  taglineEn: "We design the moments that define your brand",
  intro:
    "기획부터 연출, 현장 운영까지. 음향·조명 장비를 직접 보유하고 전 스태프가 당사 직속으로 움직이는, 기획부터 운영까지 책임지는 행사 전문 기업입니다.",
  email: "contact@haram-partners.kr",
  phone: "02-6952-3140",
  address: "서울특별시 강남구 테헤란로 124, 8층",
  hours: "평일 09:30 — 18:30 (주말·공휴일 휴무)",
  instagram: "@haram.partners",
};

export type Service = {
  id: string;
  no: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "corporate",
    no: "01",
    title: "기업 행사·컨퍼런스",
    tagline: "Corporate & Conference",
    description:
      "메시지가 분명하게 전달되는 무대를 설계합니다. 시상식, 컨퍼런스, 임직원 행사까지 기업의 격에 맞는 완성도로 운영합니다.",
    items: [
      "컨퍼런스·세미나·포럼",
      "시상식·기념식·창립행사",
      "워크숍·타운홀·임직원 행사",
      "주주총회·기자간담회",
    ],
  },
  {
    id: "festival",
    no: "02",
    title: "공연·페스티벌",
    tagline: "Performance & Festival",
    description:
      "수만 명이 모이는 현장의 에너지를 안전하게 설계합니다. 무대 연출과 음향·조명, 안전 운영까지 페스티벌의 전 과정을 책임집니다.",
    items: [
      "음악·문화 페스티벌",
      "공연 연출·무대 디렉션",
      "지역 축제·시민 행사",
      "관객 동선·안전 운영",
    ],
  },
  {
    id: "brand",
    no: "03",
    title: "브랜드 프로모션",
    tagline: "Brand & Promotion",
    description:
      "브랜드를 경험으로 번역합니다. 신제품 런칭과 팝업, 전시 부스로 사람들이 머무르고 기억하는 공간을 만듭니다.",
    items: [
      "신제품 런칭·미디어 쇼케이스",
      "팝업스토어·브랜드 경험전",
      "전시·박람회 부스",
      "VIP 초청·프라이빗 이벤트",
    ],
  },
  {
    id: "operation",
    no: "04",
    title: "의전·현장 운영",
    tagline: "Protocol & Operation",
    description:
      "보이지 않는 곳에서 행사의 완성도를 만듭니다. 의전과 등록, 인력과 협력사 관리까지 현장의 모든 변수를 통제합니다.",
    items: [
      "VIP 의전·영접",
      "등록·안내·운영 인력 관리",
      "협력사·벤더 통합 관리",
      "현장 리스크·안전 관리",
    ],
  },
  {
    id: "photobooth",
    no: "05",
    title: "포토부스·이벤트 부스",
    tagline: "Photo Booth & Experience",
    description:
      "관객이 직접 참여하고 기록을 남기는 이벤트 존을 만듭니다. 포토부스부터 브랜드 체험 부스까지 설치와 운영을 함께 진행합니다.",
    items: [
      "포토부스 설치·현장 운영",
      "브랜드 체험·인터랙션 부스",
      "즉석 인화·디지털 공유",
      "부스 디자인·운영 인력",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
//  핵심 강점 (장비 직접 보유 · 직속 운영)
// ─────────────────────────────────────────────────────────────

export type StrengthId = "equipment" | "operator" | "staff" | "onestop";

export const strengths: {
  id: StrengthId;
  title: string;
  description: string;
}[] = [
  {
    id: "equipment",
    title: "장비 직접 보유",
    description:
      "음향·조명 장비를 자체 보유해 외주 렌탈 없이 행사에 바로 투입합니다. 장비 수급에 흔들리지 않습니다.",
  },
  {
    id: "operator",
    title: "오퍼레이터 직접 운영",
    description:
      "검증된 자사 음향·조명 오퍼레이터가 셋업부터 본 행사까지 현장을 직접 운영합니다.",
  },
  {
    id: "staff",
    title: "전 스태프 당사 직속",
    description:
      "기획·연출·운영 모든 스태프가 당사 소속입니다. 외주 없는 일관된 품질과 책임을 보장합니다.",
  },
  {
    id: "onestop",
    title: "기획–운영 원스톱",
    description:
      "기획부터 장비, 현장 운영, 부스까지 한 팀이 처음부터 끝까지 책임지고 진행합니다.",
  },
];

// ─────────────────────────────────────────────────────────────
//  장비 렌탈 (플랫폼형 카탈로그)
// ─────────────────────────────────────────────────────────────

export type RentalPackage = {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  bestFor: string;
  capacity: string;
  includes: string[];
};

export type RentalCategoryId = "sound" | "lighting";

export type RentalCategory = {
  id: RentalCategoryId;
  no: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  packages: RentalPackage[];
};

export const rentalCategories: RentalCategory[] = [
  {
    id: "sound",
    no: "01",
    title: "음향 렌탈",
    tagline: "Sound System Rental",
    description:
      "소규모 세미나부터 수천 명 규모의 야외 공연까지. 현장 규모와 목적에 맞는 음향 시스템을 패키지로 제공하고, 검증된 엔지니어가 함께합니다.",
    features: [
      "현장 답사 기반 음향 설계",
      "전문 음향 엔지니어 운영",
      "셋업·리허설·철수 일괄 진행",
    ],
    packages: [
      {
        id: "sound-compact",
        name: "컴팩트 패키지",
        tagline: "소규모 실내 행사",
        bestFor: "세미나 · 사내 행사 · 소형 강연",
        capacity: "~ 80명",
        includes: [
          "파워드 스피커 2통",
          "무선 마이크 2채널",
          "소형 아날로그 믹서",
          "스탠드·케이블 일체",
        ],
      },
      {
        id: "sound-standard",
        name: "스탠다드 패키지",
        badge: "인기",
        tagline: "강연 · 기업 행사",
        bestFor: "기업 행사 · 발표회 · 중형 강연",
        capacity: "~ 300명",
        includes: [
          "소형 라인어레이 + 서브우퍼 2통",
          "무선 마이크 4채널",
          "디지털 믹싱 콘솔",
          "스테이지 모니터 2통",
          "음향 오퍼레이터 1인",
        ],
      },
      {
        id: "sound-conference",
        name: "컨퍼런스 패키지",
        tagline: "대형 컨퍼런스 · 시상식",
        bestFor: "컨퍼런스 · 시상식 · 홀 행사",
        capacity: "~ 800명",
        includes: [
          "라인어레이 + 서브우퍼 4통",
          "핸드·핀 마이크 8채널",
          "디지털 콘솔 + 인이어 모니터",
          "동시통역·중계 음향 연동",
          "음향 엔지니어 2인",
        ],
      },
      {
        id: "sound-festival",
        name: "페스티벌 패키지",
        tagline: "야외 공연 · 페스티벌",
        bestFor: "야외 공연 · 페스티벌 · 다중 무대",
        capacity: "수천 명 규모",
        includes: [
          "대형 라인어레이 L/R + 스택 서브",
          "FOH·모니터 분리 콘솔",
          "멀티 스테이지 시스템 대응",
          "무선 통신·인이어 풀세트",
          "음향감독 + 운영 크루",
        ],
      },
    ],
  },
  {
    id: "lighting",
    no: "02",
    title: "조명 렌탈",
    tagline: "Lighting System Rental",
    description:
      "공간의 분위기를 결정하는 빛을 설계합니다. 무대 조명부터 브랜드 행사 연출 조명까지, 패키지 단위로 장비와 디자인, 운영을 함께 제공합니다.",
    features: [
      "행사 컨셉 기반 조명 디자인",
      "트러스·리깅 구조 설계 및 시공",
      "조명 오퍼레이터·감독 운영",
    ],
    packages: [
      {
        id: "light-basic",
        name: "베이직 패키지",
        tagline: "실내 행사 · 강연",
        bestFor: "강연 · 사내 행사 · 소형 무대",
        capacity: "소규모 실내",
        includes: [
          "LED 파라이트 8대",
          "조광 콘솔",
          "소형 트러스·스탠드",
          "기본 배선·디밍",
        ],
      },
      {
        id: "light-stage",
        name: "스테이지 패키지",
        badge: "인기",
        tagline: "공연 · 무대 연출",
        bestFor: "공연 · 발표회 · 무대 행사",
        capacity: "중형 무대",
        includes: [
          "무빙헤드 8대",
          "LED 파라이트 16대",
          "컬러 워시·이펙트 조명",
          "조명 콘솔 + 트러스 구조물",
          "조명 오퍼레이터 1인",
        ],
      },
      {
        id: "light-premium",
        name: "프리미엄 패키지",
        tagline: "대형 공연 · 페스티벌",
        bestFor: "대형 공연 · 페스티벌 · 콘서트",
        capacity: "대형 무대",
        includes: [
          "무빙헤드 24대 이상",
          "빔·워시 믹스 + 폴로우스팟",
          "헤이저·특수 효과",
          "트러스 리깅·구조 설계",
          "조명감독 + 운영 크루",
        ],
      },
      {
        id: "light-ambience",
        name: "앰비언스 패키지",
        tagline: "브랜드 행사 · 전시",
        bestFor: "브랜드 행사 · 전시 · VIP 이벤트",
        capacity: "공간 연출",
        includes: [
          "업라이팅·핀스팟",
          "고보(로고) 프로젝션",
          "데코·무드 조명",
          "공간 조명 디자인 설계",
        ],
      },
    ],
  },
];

export type ProcessStep = {
  no: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "기획·전략",
    description:
      "행사의 목적과 메시지를 정의하고, 타깃과 예산에 맞는 전략과 컨셉을 설계합니다.",
  },
  {
    no: "02",
    title: "연출·디자인",
    description:
      "공간, 무대, 그래픽, 영상을 하나의 톤으로 통합해 브랜드에 맞는 경험을 디자인합니다.",
  },
  {
    no: "03",
    title: "현장 운영",
    description:
      "리허설부터 본 행사까지, 검증된 인력과 매뉴얼로 모든 변수를 실시간으로 통제합니다.",
  },
  {
    no: "04",
    title: "결과·리포트",
    description:
      "성과 데이터와 피드백을 정리해 다음 행사를 위한 인사이트로 전달합니다.",
  },
];

export const values: { title: string; description: string }[] = [
  {
    title: "디테일이 격을 만든다",
    description:
      "사소해 보이는 1mm의 차이가 행사의 인상을 결정한다고 믿습니다. 보이지 않는 곳까지 설계합니다.",
  },
  {
    title: "준비된 사람만이 통제한다",
    description:
      "현장에는 늘 변수가 있습니다. 모든 시나리오를 미리 준비해 어떤 상황도 흔들림 없이 운영합니다.",
  },
  {
    title: "파트너의 시선으로 본다",
    description:
      "대행사가 아닌 파트너로서, 클라이언트의 목표를 우리의 목표처럼 끝까지 책임집니다.",
  },
];

export const navLinks = [
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/contact", label: "문의" },
];

// 헤더 "서비스" 호버 시 펼쳐지는 하위 메뉴 (영역별 페이지)
export const serviceMenu: {
  heading: string;
  items: { id: string; href: string; label: string; tagline: string }[];
}[] = [
  {
    heading: "행사 기획",
    items: services.map((s) => ({
      id: s.id,
      href: `/services/${s.id}`,
      label: s.title,
      tagline: s.tagline,
    })),
  },
  {
    heading: "장비 렌탈",
    items: rentalCategories.map((c) => ({
      id: c.id,
      href: `/services/${c.id}`,
      label: c.title,
      tagline: c.tagline,
    })),
  },
];

// ─────────────────────────────────────────────────────────────
//  이미지 (Unsplash CDN) — 실제 촬영본 확보 시 URL만 교체
// ─────────────────────────────────────────────────────────────

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const heroImage = U("1533174072545-7a4b6ad7a6c3", 1400);
export const aboutImage = U("1493225457124-a3eb161ffa5f", 1100);

export const offeringImages: Record<string, string> = {
  corporate: U("1540039155733-5bb30b53aa14", 1100),
  festival: U("1514525253161-7a46d19cd819", 1100),
  brand: U("1492684223066-81342ee5ff30", 1100),
  operation: U("1511578314322-379afb476865", 1100),
  photobooth: U("1507924538820-ede94a04019d", 1100),
  sound: U("1598488035139-bdbb2231ce04", 1100),
  lighting: U("1516450360452-9312f5e86fc7", 1100),
};
