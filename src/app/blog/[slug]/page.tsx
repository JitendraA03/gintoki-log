import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/ArticleContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CricketThumb } from "@/components/Thumbnails";
import { formatDate, getHeadings, getPostBySlug, getPosts, getRelatedPosts } from "@/lib/posts";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug);
  const headings = getHeadings(post);

  return (
    <>
      <ReadingProgress />
      <Header current="posts" />
      <main>
        <div className="mx-auto mb-8 flex max-w-[660px] items-center gap-3.5 px-6 font-pixel text-[11px] uppercase tracking-[0.14em] text-muted">
          <Link className="hover:text-moss" href="/">
            ← all posts
          </Link>
          <span className="meta-sep" aria-hidden="true" />
          <span className="text-moss">{post.category}</span>
          <span className="meta-sep" aria-hidden="true" />
          <span>{post.kind}</span>
        </div>

        <header className="mx-auto mb-10 max-w-[800px] px-6 text-center">
          <h1 className="mx-auto mb-5 max-w-[12ch] text-balance font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.015em] md:text-[64px]">{post.title}</h1>
          <p className="mx-auto mb-8 max-w-[32ch] text-pretty font-serif text-[20px] italic leading-normal text-muted md:text-[22px]">{post.dek}</p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3.5 border-t border-rule pt-5 text-[13px] text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex size-[22px] items-center justify-center bg-moss font-pixel text-[10px] text-surface">g</span>
              by <b className="font-semibold text-ink">{post.author}</b>
            </span>
            <span className="meta-sep" aria-hidden="true" />
            <span>{formatDate(post.publishedAt)}</span>
            <span className="meta-sep" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </header>

        <figure className="mx-auto mb-16 max-w-[980px] px-6">
          <div className="aspect-video overflow-hidden border border-rule bg-surface">
            {post.coverImage ? <Image className="h-full w-full object-cover" src={post.coverImage} alt="" width={980} height={552} priority sizes="(max-width: 980px) 100vw, 980px" /> : <CricketThumb />}
          </div>
          {post.coverCaption ? <figcaption className="mt-3.5 text-center text-[13px] italic text-muted">{post.coverCaption}</figcaption> : null}
        </figure>

        <div className="relative mx-auto max-w-[660px] px-6">
          {headings.length ? (
            <aside className="absolute left-[calc(-220px-56px)] top-0 hidden h-full w-[220px] xl:block" aria-label="Table of contents">
              <div className="sticky top-[60px]">
                <div className="mb-4 border-b border-rule pb-3 font-pixel text-[10px] uppercase tracking-[0.14em] text-moss">contents</div>
                <ol className="flex flex-col gap-3">
                  {headings.map((heading, index) => (
                    <li className="flex items-start gap-2.5 text-[13px] leading-snug text-muted" key={heading.id}>
                      <span className="pt-0.5 font-pixel text-[9px] tracking-[0.08em]">{String(index + 1).padStart(2, "0")}</span>
                      <a className="toc-link hover:text-moss" href={`#${heading.id}`}>
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          ) : null}
          <ArticleContent post={post} />
        </div>

        <section className="shell mt-24 border-t border-rule pt-14" aria-label="More from the blog">
          <div className="mb-7 flex items-baseline justify-between gap-8">
            <h2 className="flex items-center gap-3.5 font-serif text-[26px] font-medium">
              More from the blog <span className="section-bullet" aria-hidden="true" />
            </h2>
            <Link className="font-pixel text-[11px] uppercase tracking-[0.12em] text-moss hover:text-clay" href="/">
              view all →
            </Link>
          </div>
          <div className="grid gap-9 md:grid-cols-2">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} compact />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
