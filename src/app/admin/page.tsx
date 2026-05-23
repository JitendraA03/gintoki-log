import Link from "next/link";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Admin",
};

export default function AdminPage() {
  const adminUrl = process.env.STRAPI_ADMIN_URL;

  return (
    <>
      <Header current="posts" />
      <main className="shell">
        <section className="mx-auto max-w-[760px] border border-rule bg-surface p-8 shadow-[12px_12px_0_rgba(63,107,74,0.1)] md:p-12">
          <div className="mb-4 font-pixel text-[11px] uppercase tracking-[0.14em] text-moss">Admin endpoint</div>
          <h1 className="max-w-[12ch] font-serif text-[44px] font-medium leading-tight tracking-[-0.01em]">Content desk.</h1>
          {adminUrl ? (
            <p className="mt-5 max-w-[58ch] font-serif text-lg leading-relaxed text-muted">
              Articles are managed in Strapi. Use the Strapi admin password there; the public website reads published posts through the API when CMS mode is enabled.
            </p>
          ) : (
            <p className="mt-5 max-w-[58ch] font-serif text-lg leading-relaxed text-muted">
              The site is currently deployed frontend-only with the Kohli article bundled locally. Add Strapi later by following <span className="font-sans text-base">STRAPI_INTEGRATION_STEPS.md</span>.
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            {adminUrl ? (
              <a className="inline-flex bg-moss px-4 py-3 font-pixel text-[11px] uppercase tracking-[0.12em] text-surface hover:bg-ink" href={adminUrl}>
                enter strapi admin
              </a>
            ) : null}
            <Link className="inline-flex border border-rule bg-paper px-4 py-3 font-pixel text-[11px] uppercase tracking-[0.12em] text-ink hover:border-moss hover:text-moss" href="/">
              back to site
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-muted">{adminUrl ? "Set STRAPI_ADMIN_URL in production if Strapi lives on a different domain." : "No CMS environment variables are needed for the first Vercel deployment."}</p>
        </section>
      </main>
    </>
  );
}
