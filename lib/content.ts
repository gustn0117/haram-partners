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
  founded: "2014",
  email: "contact@haram-partners.kr",
  phone: "02-6952-3140",
  address: "서울특별시 강남구 테헤란로 124, 8층",
  hours: "평일 09:30 — 18:30 (주말·공휴일 휴무)",
  instagram: "@haram.partners",
};

export const stats = [
  { value: "11", suffix: "년", label: "행사 기획 노하우" },
  { value: "740", suffix: "+", label: "누적 진행 프로젝트" },
  { value: "120", suffix: "만", label: "누적 관객 동원" },
  { value: "98", suffix: "%", label: "고객 재의뢰율" },
];

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

export type Project = {
  id: string;
  title: string;
  category: string;
  categoryId: ProjectCategoryId;
  year: string;
  scale: string;
  location: string;
  summary: string;
};

export type ProjectCategoryId =
  | "corporate"
  | "festival"
  | "brand"
  | "operation";

export const projectCategories: { id: ProjectCategoryId | "all"; label: string }[] =
  [
    { id: "all", label: "전체" },
    { id: "corporate", label: "기업·컨퍼런스" },
    { id: "festival", label: "공연·페스티벌" },
    { id: "brand", label: "브랜드 프로모션" },
    { id: "operation", label: "의전·운영" },
  ];

export const projects: Project[] = [
  {
    id: "tech-forward",
    title: "테크포워드 글로벌 컨퍼런스",
    category: "기업·컨퍼런스",
    categoryId: "corporate",
    year: "2025",
    scale: "2,400석",
    location: "코엑스 오디토리움",
    summary:
      "12개국 연사가 참여한 이틀간의 기술 컨퍼런스. 동시통역과 라이브 스트리밍을 포함한 통합 운영을 진행했습니다.",
  },
  {
    id: "midnight-wave",
    title: "미드나잇 웨이브 뮤직 페스티벌",
    category: "공연·페스티벌",
    categoryId: "festival",
    year: "2025",
    scale: "38,000명",
    location: "난지한강공원",
    summary:
      "2일간 이어진 대규모 야외 음악 페스티벌. 3개 스테이지 무대 연출과 관객 안전 동선 설계를 총괄했습니다.",
  },
  {
    id: "aurora-launch",
    title: "오로라 시리즈 신제품 런칭쇼",
    category: "브랜드 프로모션",
    categoryId: "brand",
    year: "2024",
    scale: "초청 600명",
    location: "동대문 DDP",
    summary:
      "프리미엄 가전 브랜드의 미디어 쇼케이스. 키네틱 무대와 몰입형 영상으로 제품 서사를 연출했습니다.",
  },
  {
    id: "founders-night",
    title: "파운더스 나이트 시상식",
    category: "기업·컨퍼런스",
    categoryId: "corporate",
    year: "2024",
    scale: "1,100명",
    location: "그랜드 인터컨티넨탈",
    summary:
      "창립 20주년 기념 시상식 및 갈라 디너. 의전과 무대 연출, 케이터링 운영을 통합 진행했습니다.",
  },
  {
    id: "city-bloom",
    title: "시티 블룸 도시 축제",
    category: "공연·페스티벌",
    categoryId: "festival",
    year: "2024",
    scale: "92,000명",
    location: "서울광장 일대",
    summary:
      "지자체 주관 봄 시즌 도시 축제. 공연·전시·체험 프로그램과 다중 무대 운영을 총괄 기획했습니다.",
  },
  {
    id: "atelier-popup",
    title: "아틀리에 팝업 익스피리언스",
    category: "브랜드 프로모션",
    categoryId: "brand",
    year: "2023",
    scale: "23일 운영",
    location: "성수동 플래그십",
    summary:
      "패션 하우스의 23일간 팝업스토어. 공간 디자인부터 일일 운영, 예약 시스템까지 풀 서비스로 운영했습니다.",
  },
  {
    id: "summit-protocol",
    title: "글로벌 파트너 서밋 의전 운영",
    category: "의전·운영",
    categoryId: "operation",
    year: "2023",
    scale: "VIP 80명",
    location: "시그니엘 서울",
    summary:
      "해외 파트너사 임원 초청 서밋의 의전·영접 전담. 공항 영접부터 회의 운영, 동선 관리를 책임졌습니다.",
  },
  {
    id: "harvest-gala",
    title: "하베스트 채리티 갈라",
    category: "의전·운영",
    categoryId: "operation",
    year: "2023",
    scale: "초청 450명",
    location: "신라호텔 영빈관",
    summary:
      "비영리재단 후원의 밤. 등록·안내 인력 운영과 VIP 의전, 경매 프로그램 진행을 통합 관리했습니다.",
  },
];

export const history: { year: string; title: string; description: string }[] = [
  {
    year: "2014",
    title: "하람파트너스 설립",
    description: "기업 행사 기획을 중심으로 사업을 시작했습니다.",
  },
  {
    year: "2017",
    title: "공연·페스티벌 사업부 신설",
    description:
      "대규모 야외 행사 운영 역량을 확보하며 사업 영역을 확장했습니다.",
  },
  {
    year: "2020",
    title: "하이브리드 행사 솔루션 도입",
    description:
      "온·오프라인을 결합한 행사 운영 시스템과 라이브 스트리밍 역량을 구축했습니다.",
  },
  {
    year: "2023",
    title: "누적 프로젝트 500건 돌파",
    description:
      "기업·축제·브랜드 전 영역에서 검증된 운영 레퍼런스를 쌓았습니다.",
  },
  {
    year: "2025",
    title: "통합 행사 운영 본부 출범",
    description:
      "기획·연출·운영을 아우르는 통합 본부 체계로 대형 프로젝트에 대응합니다.",
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
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/contact", label: "문의" },
];

export const partners = [
  "ARC TELECOM",
  "NOVA MOTORS",
  "LUMEN BANK",
  "SEOUL CITY",
  "VERTEX",
  "HANSOL GROUP",
  "ODE COSMETICS",
  "MERIDIAN",
];

// ─────────────────────────────────────────────────────────────
//  이미지 (Unsplash CDN) — 실제 촬영본 확보 시 URL만 교체
// ─────────────────────────────────────────────────────────────

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const heroImage = U("1533174072545-7a4b6ad7a6c3", 1400);
export const aboutImage = U("1493225457124-a3eb161ffa5f", 1100);

export const projectImages: Record<string, string> = {
  "tech-forward": U("1505373877841-8d25f7d46678"),
  "midnight-wave": U("1470229722913-7c0e2dbbafd3"),
  "aurora-launch": U("1492684223066-81342ee5ff30"),
  "founders-night": U("1519671482749-fd09be7ccebf"),
  "city-bloom": U("1429962714451-bb934ecdc4ec"),
  "atelier-popup": U("1507924538820-ede94a04019d"),
  "summit-protocol": U("1540575467063-178a50c2df87"),
  "harvest-gala": U("1464366400600-7168b8af9bc3"),
};

export const offeringImages: Record<string, string> = {
  corporate: U("1540039155733-5bb30b53aa14", 1100),
  festival: U("1514525253161-7a46d19cd819", 1100),
  brand: U("1492684223066-81342ee5ff30", 1100),
  operation: U("1511578314322-379afb476865", 1100),
  photobooth: U("1507924538820-ede94a04019d", 1100),
  sound: U("1598488035139-bdbb2231ce04", 1100),
  lighting: U("1516450360452-9312f5e86fc7", 1100),
};
