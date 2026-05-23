import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import { Thumbnail } from "@/components/Thumbnails";

export function PostCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <article className={compact ? "related-card" : "post-card flex flex-col"}>
      <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        <div className={compact ? "card-thumb aspect-video" : "card-thumb"}>
          {post.coverImage ? <Image className="h-full w-full object-cover" src={post.coverImage} alt="" width={700} height={415} sizes={compact ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 33vw"} /> : <Thumbnail kind={post.thumbnail} />}
        </div>
        <span className="post-tag mt-4">{post.category}</span>
        <h3 className="post-card-title mt-2.5 font-serif text-[22px] font-medium leading-tight tracking-[-0.005em] transition-colors">{post.title}</h3>
        <p className="mt-2 font-serif text-base leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-3.5 flex items-center gap-2.5 text-xs text-muted">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="meta-sep" aria-hidden="true" />
          <span>{post.readTime}</span>
        </div>
      </Link>
    </article>
  );
}
