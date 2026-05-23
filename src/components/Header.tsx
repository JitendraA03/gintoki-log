import Link from "next/link";

export function Header({ current = "posts" }: { current?: "posts" | "about" }) {
  return (
    <>
      <header className="py-7 md:py-9">
        <div className="shell flex items-center justify-between gap-8">
          <Link className="inline-flex items-center gap-3 font-pixel text-[20px] tracking-[0.02em]" href="/" aria-label="gintoki.log home">
            <span className="dot-mark" aria-hidden="true" />
            <span>
              gintoki<span className="text-clay">.</span>log
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-[13px] font-medium text-muted md:gap-9 md:text-sm" aria-label="Primary">
            <Link className={current === "posts" ? "relative text-ink after:absolute after:inset-x-0 after:-bottom-1 after:h-[3px] after:bg-[linear-gradient(to_right,var(--accent)_0,var(--accent)_3px,transparent_3px,transparent_6px)] after:bg-[length:6px_3px]" : "hover:text-ink"} href="/">
              All posts
            </Link>
            <Link className={current === "about" ? "text-ink" : "hover:text-ink"} href="/#about">
              About
            </Link>
          </nav>
        </div>
      </header>
      <div className="shell pb-10 md:pb-14">
        <div className="dashed-rule" />
      </div>
    </>
  );
}
