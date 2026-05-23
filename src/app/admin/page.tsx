import Link from "next/link";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Admin",
};

export default function AdminPage() {
  const adminUrl = process.env.STRAPI_ADMIN_URL || `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}/admin`;

  return (
    <>
      <Header current="posts" />
      <main className="shell">
        <section className="mx-auto max-w-[760px] border border-rule bg-surface p-8 shadow-[12px_12px_0_rgba(63,107,74,0.1)] md:p-12">
          <div className="mb-4 font-pixel text-[11px] uppercase tracking-[0.14em] text-moss">Admin endpoint</div>
          <h1 className="max-w-[12ch] font-serif text-[44px] font-medium leading-tight tracking-[-0.01em]">Content desk.</h1>
          <p className="mt-5 max-w-[58ch] font-serif text-lg leading-relaxed text-muted">
            Articles are managed in Strapi. Use the Strapi admin password there; the public website reads published posts through the API and revalidates every 60 seconds, so new articles do not require a frontend redeploy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex bg-moss px-4 py-3 font-pixel text-[11px] uppercase tracking-[0.12em] text-surface hover:bg-ink" href={adminUrl}>
              enter strapi admin
            </a>
            <Link className="inline-flex border border-rule bg-paper px-4 py-3 font-pixel text-[11px] uppercase tracking-[0.12em] text-ink hover:border-moss hover:text-moss" href="/">
              back to site
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-muted">Set STRAPI_ADMIN_URL in production if Strapi lives on a different domain.</p>
        </section>
      </main>
    </>
  );
}
