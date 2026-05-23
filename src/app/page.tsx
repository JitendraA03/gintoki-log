import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

export const revalidate = 60;

export default async function HomePage() {
  const posts = await getPosts();
  const latest = posts.slice(0, 3);
  const older = posts.slice(3);
  const tags = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <>
      <Header current="posts" />
      <main>
        <section className="shell grid items-end gap-12 border-b border-rule pb-14 md:grid-cols-[1fr_420px]">
          <div>
            <div className="mb-4 font-pixel text-[11px] uppercase tracking-[0.14em] text-moss">A quiet corner of the internet</div>
            <h1 className="max-w-[18ch] font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.015em] md:text-[52px]">
              Slow writing on <em className="font-medium text-moss">the things I am living through</em> &amp; the thoughts they leave behind.
            </h1>
            <p className="mt-4 max-w-[52ch] font-serif text-[19px] leading-relaxed text-muted">
              Software engineer by day, slow writer by evening. Updated whenever a post stops embarrassing me. Make yourself a cup of something; stay as long as you like.
            </p>
          </div>
          <div className="relative flex h-[400px] items-end justify-center md:h-[460px]" aria-label="ChatGPT generated blog icon">
            <div className="absolute bottom-7 left-0 right-0 dashed-rule" />
            <div className="sprite-float relative z-10 size-[400px]">
              <Image className="h-full w-full object-contain" src="/chatgpt-main-icon.png" alt="ChatGPT generated icon for gintoki.log" width={400} height={400} priority />
            </div>
          </div>
        </section>

        <section className="shell pt-14" aria-label="Latest posts">
          <div className="mb-7 flex items-baseline justify-between gap-8">
            <h2 className="flex items-center gap-3.5 font-serif text-[26px] font-medium">
              Latest <span className="section-bullet" aria-hidden="true" />
            </h2>
            <a className="font-pixel text-[11px] uppercase tracking-[0.12em] text-moss hover:text-clay" href="#archive">
              view archive →
            </a>
          </div>
          <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="shell mt-20 border-t border-rule pt-10" id="archive" aria-label="Archive">
          <div className="mb-7 flex items-baseline justify-between gap-8">
            <h2 className="flex items-center gap-3.5 font-serif text-[26px] font-medium">
              Older entries <span className="section-bullet" aria-hidden="true" />
            </h2>
            <span className="font-pixel text-[11px] uppercase tracking-[0.12em] text-moss">archive</span>
          </div>
          {older.length > 0 ? (
            <ol className="border-t border-rule-soft">
              {older.map((post) => (
                <li key={post.slug} className="grid grid-cols-[70px_1fr] items-baseline gap-6 border-b border-rule-soft py-5 transition hover:pl-2 md:grid-cols-[80px_1fr_160px_80px]">
                  <span className="font-pixel text-[10px] uppercase tracking-[0.1em] text-muted">{formatArchiveDate(post.publishedAt)}</span>
                  <a className="font-serif text-[19px] font-medium hover:text-moss" href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                  <span className="hidden font-sans text-[11px] uppercase tracking-[0.12em] text-moss md:block">{post.category}</span>
                  <span className="hidden text-right font-mono text-xs text-muted md:block">{post.readTime}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="max-w-[54ch] font-serif text-lg text-muted">More posts will appear here once they are published in Strapi.</p>
          )}
        </section>

        <section className="shell mt-20 border-t border-rule pt-10" id="tags" aria-label="Tags">
          <div className="mb-7 flex items-baseline justify-between gap-8">
            <h2 className="flex items-center gap-3.5 font-serif text-[26px] font-medium">
              Tags <span className="section-bullet" aria-hidden="true" />
            </h2>
            <span className="font-pixel text-[11px] uppercase tracking-[0.12em] text-moss">browse</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <a className="border border-rule bg-surface px-3 py-2 font-pixel text-[11px] uppercase tracking-[0.12em] text-moss transition hover:-translate-y-0.5 hover:border-moss hover:text-clay" href={`/#tags`} key={tag}>
                {tag}
              </a>
            ))}
          </div>
        </section>

        <section className="shell mt-20 grid gap-6 border-t border-rule pt-10 md:grid-cols-2" id="about">
          <div>
            <div className="mb-3 font-pixel text-[11px] uppercase tracking-[0.14em] text-moss">About</div>
            <h2 className="font-serif text-[34px] font-medium leading-tight">A quiet bookshop on the internet.</h2>
          </div>
          <p className="font-serif text-lg leading-relaxed text-muted">
            This site is built as a reader-first frontend backed by Strapi. Viewers get fast public pages; the admin uses Strapi&apos;s password-protected dashboard to publish without redeploying the website.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

function formatArchiveDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "2-digit" }).format(new Date(value));
}
