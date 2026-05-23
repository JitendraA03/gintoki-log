import type { BlogPost } from "@/lib/posts";

export function Thumbnail({ kind }: { kind: BlogPost["thumbnail"] }) {
  if (kind === "anime") return <AnimeThumb />;
  if (kind === "music") return <MusicThumb />;
  return <CricketThumb />;
}

export function CricketThumb() {
  return (
    <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9B176" />
          <stop offset="0.55" stopColor="#D69A6E" />
          <stop offset="1" stopColor="#A67555" />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill="url(#dusk)" />
      <circle cx="220" cy="92" r="26" fill="#F0CC8B" />
      <rect x="0" y="120" width="300" height="3" fill="#7A4F3C" opacity="0.4" />
      <g fill="#3F4A3E">
        <rect x="20" y="98" width="6" height="22" />
        <circle cx="23" cy="98" r="7" />
        <rect x="60" y="104" width="5" height="18" />
        <circle cx="62" cy="105" r="6" />
        <rect x="270" y="100" width="5" height="20" />
        <circle cx="272" cy="100" r="6" />
      </g>
      <rect x="0" y="122" width="300" height="78" fill="#3F6B4A" />
      <rect x="0" y="122" width="300" height="6" fill="#4A7755" />
      <rect x="110" y="138" width="80" height="62" fill="#C7A878" />
      <rect x="110" y="138" width="80" height="3" fill="#A78656" />
      <rect x="146" y="152" width="2" height="14" fill="#2A1F18" />
      <rect x="150" y="152" width="2" height="14" fill="#2A1F18" />
      <rect x="154" y="152" width="2" height="14" fill="#2A1F18" />
      <rect x="146" y="150" width="10" height="2" fill="#2A1F18" />
    </svg>
  );
}

function AnimeThumb() {
  return (
    <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="200" fill="#1E2A2C" />
      <circle cx="150" cy="92" r="44" fill="#F0E6D2" />
      <circle cx="160" cy="86" r="44" fill="#1E2A2C" />
      <rect x="40" y="36" width="2" height="2" fill="#F0E6D2" />
      <rect x="78" y="22" width="2" height="2" fill="#F0E6D2" />
      <rect x="240" y="48" width="2" height="2" fill="#F0E6D2" />
      <rect x="268" y="30" width="2" height="2" fill="#F0E6D2" />
      <rect x="22" y="78" width="2" height="2" fill="#F0E6D2" />
      <rect x="280" y="86" width="2" height="2" fill="#F0E6D2" />
      <rect x="36" y="22" width="228" height="156" fill="none" stroke="#C97B5A" strokeWidth="4" />
      <rect x="148" y="22" width="4" height="156" fill="#C97B5A" />
      <rect x="36" y="98" width="228" height="4" fill="#C97B5A" />
      <rect x="28" y="178" width="244" height="6" fill="#A86348" />
      <rect x="0" y="160" width="300" height="40" fill="#253335" />
      <circle cx="80" cy="160" r="22" fill="#253335" />
      <circle cx="220" cy="160" r="26" fill="#253335" />
    </svg>
  );
}

function MusicThumb() {
  return (
    <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="200" fill="#C97B5A" />
      <rect x="0" y="0" width="160" height="200" fill="#A86348" />
      <circle cx="190" cy="100" r="84" fill="#1F1916" />
      <circle cx="190" cy="100" r="84" fill="none" stroke="#2A2622" strokeWidth="2" />
      <circle cx="190" cy="100" r="64" fill="none" stroke="#2A2622" strokeWidth="1" />
      <circle cx="190" cy="100" r="48" fill="none" stroke="#2A2622" strokeWidth="1" />
      <circle cx="190" cy="100" r="32" fill="#3F6B4A" />
      <circle cx="190" cy="100" r="32" fill="none" stroke="#5C8865" strokeWidth="1" />
      <circle cx="190" cy="100" r="4" fill="#1F1916" />
      <rect x="22" y="22" width="26" height="2" fill="#F5EFE0" />
      <rect x="22" y="30" width="50" height="2" fill="#F5EFE0" />
      <rect x="22" y="170" width="40" height="2" fill="#F5EFE0" />
      <rect x="22" y="176" width="80" height="2" fill="#F5EFE0" />
    </svg>
  );
}
