/* Generative SVG artwork standing in for project photography.
   Deterministic per-seed so server and client markup match. */
export function ProjectArtwork({ seed }: { seed: number }) {
  const palettes = [
    ["#f3eee2", "#a8822f"],
    ["#eee9f0", "#6f5fa6"],
    ["#f4ece0", "#bc8a36"],
    ["#e7f0ec", "#3f8f78"],
  ];
  const [bg, accent] = palettes[seed % palettes.length];
  const rot = (seed * 37) % 360;
  const rings = 5 + (seed % 3);

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id={`pa-glow-${seed}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill={bg} />
      <rect width="400" height="300" fill={`url(#pa-glow-${seed})`} />
      <g
        transform={`rotate(${rot} 200 150)`}
        stroke={accent}
        strokeWidth="1"
        fill="none"
      >
        {Array.from({ length: rings }).map((_, k) => (
          <circle
            key={k}
            cx="200"
            cy="150"
            r={26 + k * 28}
            opacity={0.5 - k * 0.06}
          />
        ))}
      </g>
      <g stroke={accent} strokeWidth="1" opacity="0.28">
        <line x1="0" y1="150" x2="400" y2="150" />
        <line x1="200" y1="0" x2="200" y2="300" />
      </g>
      <circle cx="200" cy="150" r="4" fill={accent} />
    </svg>
  );
}
