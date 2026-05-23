import { PixelSprite } from "@/components/PixelSprite";

function SocialIcon({ type }: { type: "films" | "notes" | "anime" | "tunes" | "rss" }) {
  if (type === "films") {
    return (
      <svg className="pixel-art size-4" viewBox="0 0 12 12" shapeRendering="crispEdges">
        <rect x="1" y="3" width="10" height="6" fill="#2A3A2E" />
        <rect x="2" y="4" width="2" height="2" fill="#F5EFE0" />
        <rect x="5" y="4" width="2" height="2" fill="#F5EFE0" />
        <rect x="8" y="4" width="2" height="2" fill="#F5EFE0" />
        <rect x="2" y="6" width="2" height="2" fill="#F5EFE0" />
        <rect x="5" y="6" width="2" height="2" fill="#F5EFE0" />
        <rect x="8" y="6" width="2" height="2" fill="#F5EFE0" />
      </svg>
    );
  }

  if (type === "notes") {
    return (
      <svg className="pixel-art size-4" viewBox="0 0 12 12" shapeRendering="crispEdges">
        <rect x="2" y="3" width="8" height="1" fill="#2A3A2E" />
        <rect x="3" y="4" width="7" height="1" fill="#2A3A2E" />
        <rect x="5" y="5" width="5" height="1" fill="#2A3A2E" />
        <rect x="7" y="6" width="3" height="1" fill="#2A3A2E" />
        <rect x="9" y="7" width="1" height="1" fill="#2A3A2E" />
        <rect x="2" y="7" width="1" height="1" fill="#C97B5A" />
        <rect x="2" y="8" width="2" height="1" fill="#C97B5A" />
      </svg>
    );
  }

  if (type === "anime") {
    return (
      <svg className="pixel-art size-4" viewBox="0 0 12 12" shapeRendering="crispEdges">
        <rect x="2" y="2" width="8" height="8" fill="#2A3A2E" />
        <rect x="3" y="3" width="3" height="6" fill="#F5EFE0" />
        <rect x="6" y="3" width="3" height="6" fill="#ECE3CC" />
        <rect x="6" y="3" width="1" height="6" fill="#2A3A2E" />
        <rect x="4" y="5" width="1" height="1" fill="#3F6B4A" />
        <rect x="7" y="5" width="1" height="1" fill="#3F6B4A" />
      </svg>
    );
  }

  if (type === "tunes") {
    return (
      <svg className="pixel-art size-4" viewBox="0 0 12 12" shapeRendering="crispEdges">
        <rect x="5" y="2" width="1" height="7" fill="#2A3A2E" />
        <rect x="6" y="2" width="3" height="1" fill="#2A3A2E" />
        <rect x="3" y="8" width="3" height="2" fill="#2A3A2E" />
        <rect x="2" y="9" width="1" height="1" fill="#2A3A2E" />
      </svg>
    );
  }

  return (
    <svg className="pixel-art size-4" viewBox="0 0 12 12" shapeRendering="crispEdges">
      <rect x="2" y="8" width="2" height="2" fill="#C97B5A" />
      <rect x="2" y="5" width="1" height="1" fill="#2A3A2E" />
      <rect x="3" y="5" width="1" height="1" fill="#2A3A2E" />
      <rect x="4" y="6" width="1" height="1" fill="#2A3A2E" />
      <rect x="2" y="2" width="1" height="1" fill="#2A3A2E" />
      <rect x="3" y="2" width="2" height="1" fill="#2A3A2E" />
      <rect x="5" y="3" width="1" height="1" fill="#2A3A2E" />
      <rect x="6" y="4" width="1" height="1" fill="#2A3A2E" />
      <rect x="7" y="5" width="1" height="1" fill="#2A3A2E" />
    </svg>
  );
}

export function Footer() {
  const socials = [
    ["films", "Films"],
    ["notes", "Notes"],
    ["anime", "Anime"],
    ["tunes", "Tunes"],
    ["rss", "RSS"],
  ] as const;

  return (
    <footer className="mt-24 overflow-hidden border-t border-rule bg-surface">
      <div className="walk-track" aria-hidden="true">
        <div className="walker">
          <PixelSprite />
        </div>
      </div>
      <div className="shell grid gap-12 py-14 pb-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4 font-pixel text-[10px] uppercase tracking-[0.14em] text-moss">GINTOKI.LOG</div>
          <p className="max-w-[32ch] font-serif text-base leading-relaxed">A small reading room run by one person. Posts go up when they are ready, not before. Thanks for stopping in.</p>
        </div>
        <div>
          <div className="mb-4 font-pixel text-[10px] uppercase tracking-[0.14em] text-moss">ELSEWHERE</div>
          <div className="flex flex-wrap gap-3.5">
            {socials.map(([type, label]) => (
              <a key={type} className="inline-flex items-center gap-2.5 border border-rule bg-paper px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5 hover:border-moss hover:text-moss" href="#">
                <SocialIcon type={type} />
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 font-pixel text-[10px] uppercase tracking-[0.14em] text-moss">NEWSLETTER</div>
          <p className="mb-3.5 max-w-[32ch] font-serif text-base leading-relaxed">Once a month, when there is something worth sending. No tracking, no metrics.</p>
          <form className="flex border border-rule bg-paper">
            <input className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[13px] text-ink outline-none placeholder:text-muted" type="email" placeholder="you@somewhere.net" aria-label="Email address" />
            <button className="bg-moss px-3.5 font-pixel text-[11px] uppercase tracking-[0.1em] text-surface" type="submit">
              subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="shell">
        <div className="dashed-rule" />
      </div>
      <div className="shell flex items-center justify-between gap-6 py-5 pb-6 text-xs text-muted">
        <span className="font-pixel text-[10px] uppercase tracking-[0.12em]">2026 - gintoki.log</span>
        <span className="font-mono text-[11px]">made slowly · with tea</span>
      </div>
    </footer>
  );
}
