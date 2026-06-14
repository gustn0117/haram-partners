import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7h18" />
      <path d="M3 12h18" />
      <path d="M3 17h18" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 4h3l1.4 4-2 1.4a12 12 0 0 0 5.7 5.7l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.8" cy="7.2" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ── Service icons ── */

export function IconConference(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4" />
      <circle cx="12" cy="8.5" r="1.6" />
      <path d="M9 21v-4.5a3 3 0 0 1 6 0V21" />
      <path d="M5 21v-2.5a2 2 0 0 1 2-2" />
      <path d="M19 21v-2.5a2 2 0 0 0-2-2" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
    </svg>
  );
}

export function IconFestival(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M4 9h16" />
      <path d="M9 20v-6h6v6" />
      <path d="M12 4v5" />
      <path d="M2.5 13.5 4 12M21.5 13.5 20 12" />
    </svg>
  );
}

export function IconBrand(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10v4l11 5V5L4 10Z" />
      <path d="M15 8a3.5 3.5 0 0 1 0 8" />
      <path d="M6 14v3a2 2 0 0 0 4 0v-1.6" />
    </svg>
  );
}

export function IconProtocol(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.5 7 9 4.1-1.5 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 11.5 2.2 2.2L15.5 9.4" />
    </svg>
  );
}

export function IconSound(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <circle cx="12" cy="8" r="1.8" />
      <circle cx="12" cy="15" r="3.2" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function IconLighting(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8.5" y="2.5" width="7" height="4.2" rx="1.2" />
      <path d="M9 6.7 5.5 20.5h13L15 6.7" />
      <path d="M7.4 13.5h9.2" />
    </svg>
  );
}

export function IconStage(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18h18" />
      <path d="M5 18v-5h14v5" />
      <path d="M8 13V8l4-3 4 3v5" />
      <path d="M12 5v3" />
    </svg>
  );
}

const serviceIconMap = {
  corporate: IconConference,
  festival: IconFestival,
  brand: IconBrand,
  operation: IconProtocol,
} as const;

export function ServiceIcon({
  id,
  ...props
}: { id: keyof typeof serviceIconMap } & IconProps) {
  const Cmp = serviceIconMap[id];
  return <Cmp {...props} />;
}

/* ── Decorative monogram / wordmark mark ── */

export function Monogram(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M8 31V9M8 20h12M20 9v22M32 31V9l-8 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="9" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 6c-3.3 0-6 2.7-6 6v6h6v-6H7c0-1.7 1.3-3 3-3V6Zm10 0c-3.3 0-6 2.7-6 6v6h6v-6h-3c0-1.7 1.3-3 3-3V6Z" />
    </svg>
  );
}
