/* Layered SVG atmosphere: soft warm glows + thin guide lines.
   Tuned for the light canvas — decorative only, aria-hidden. */
export function Atmosphere({ variant = "hero" }: { variant?: "hero" | "soft" }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gold glow */}
      <div
        className={`absolute drift rounded-full blur-[120px] ${
          variant === "hero"
            ? "-top-40 right-[-10%] h-[520px] w-[520px] opacity-25"
            : "top-1/3 right-[-15%] h-[380px] w-[380px] opacity-15"
        }`}
        style={{
          background:
            "radial-gradient(circle at center, rgba(184,146,74,0.5), rgba(184,146,74,0) 70%)",
        }}
      />
      <div
        className="absolute -left-32 bottom-[-20%] h-[460px] w-[460px] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(214,196,160,0.55), rgba(214,196,160,0) 70%)",
        }}
      />

      {/* Vertical guide lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="vline" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(26,22,14,0)" />
            <stop offset="50%" stopColor="rgba(26,22,14,0.05)" />
            <stop offset="100%" stopColor="rgba(26,22,14,0)" />
          </linearGradient>
        </defs>
        <line x1="16.66%" y1="0" x2="16.66%" y2="100%" stroke="url(#vline)" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#vline)" />
        <line x1="83.33%" y1="0" x2="83.33%" y2="100%" stroke="url(#vline)" />
      </svg>
    </div>
  );
}
