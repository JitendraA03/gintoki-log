import Image from "next/image";
import type { BlogPost, ContentBlock } from "@/lib/posts";

function Divider() {
  return (
    <div className="pix-divider" aria-hidden="true">
      <span className="line" />
      <span className="d bg-moss" />
      <span className="d bg-clay" />
      <span className="d bg-moss" />
      <span className="line" />
    </div>
  );
}

function TerminalMock() {
  const rows = [
    ["17.4", "SIX over long-on - Pathirana for Conway", "35 off 14"],
    ["18.0", "1 single - square leg, soft hands", "34 off 12"],
    ["18.1", "DOT, yorker on the boot", "34 off 11"],
    ["18.2", "FOUR - late cut, sweet timing", "30 off 10"],
    ["18.3", "WICKET - caught at deep mid-wicket", "Conway 47(28)"],
    ["18.4", "2 runs, scampered", "28 off 8"],
  ];

  return (
    <figure className="my-9">
      <div className="terminal" aria-hidden="true">
        <div className="terminal-bar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="ml-2 font-pixel text-[9px] uppercase tracking-[0.12em] text-[#8B826F]">scoreboard-ping · node</span>
        </div>
        {rows.map(([over, summary, need]) => (
          <div className="flex gap-3.5" key={over}>
            <span className="min-w-10 text-[#7A8A6E]">{over}</span>
            <span className="flex-1">{summary}</span>
            <span className={summary.startsWith("WICKET") ? "text-clay" : "text-[#E8B57A]"}>{need}</span>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-center text-[13px] italic text-muted">Eventually the terminal beat the live feed by a full over.</figcaption>
    </figure>
  );
}

function renderBlock(block: ContentBlock, index: number) {
  if (block.type === "paragraph") {
    return (
      <p className={block.lede ? "lede" : undefined} key={index}>
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h2 id={block.id} key={block.id}>
        {block.text}
      </h2>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="my-9" key={`${block.src}-${index}`}>
        <Image className="w-full border border-rule bg-surface object-cover" src={block.src} alt={block.alt} width={1100} height={700} sizes="(max-width: 760px) 100vw, 660px" />
        {block.caption ? <figcaption className="mt-3 text-center text-[13px] italic text-muted">{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.type === "blockquote") {
    return (
      <blockquote key={index}>
        <p>{block.text}</p>
        {block.cite ? <cite>- {block.cite}</cite> : null}
      </blockquote>
    );
  }

  if (block.type === "orderedList") {
    return (
      <ol key={index}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }

  if (block.type === "code") {
    return (
      <pre key={index} aria-label={block.filename}>
        <code>{block.code}</code>
      </pre>
    );
  }

  if (block.type === "terminal") return <TerminalMock key={index} />;
  if (block.type === "pullquote") return <p className="pullquote" key={index}>{block.text}</p>;
  if (block.type === "divider") return <Divider key={index} />;
  return null;
}

export function ArticleContent({ post }: { post: BlogPost }) {
  return <div className="prose-custom">{post.content.map(renderBlock)}</div>;
}
