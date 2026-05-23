export type ContentBlock =
  | { type: "paragraph"; text: string; lede?: boolean }
  | { type: "heading"; id: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "blockquote"; text: string; cite?: string }
  | { type: "orderedList"; items: string[] }
  | { type: "code"; filename?: string; code: string }
  | { type: "terminal" }
  | { type: "pullquote"; text: string }
  | { type: "divider" };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category: string;
  kind: string;
  author: string;
  publishedAt: string;
  readTime: string;
  thumbnail: "cricket" | "anime" | "music" | "default";
  coverImage?: string;
  coverCaption?: string;
  content: ContentBlock[];
};

const fallbackPosts: BlogPost[] = [
  {
    id: "1",
    slug: "my-journey-as-a-test-cricket-viewer-ft-virat-kohli",
    title: "My Journey as a Test Cricket Viewer ft. Virat Kohli",
    dek: "A personal tribute to Virat Kohli's Test career and the generation of fans who grew up watching India stop playing for draws.",
    excerpt:
      "A personal tribute to Virat Kohli's Test career, from the 2014 BGT spark to the era of Indian Test domination he helped build.",
    category: "Cricket",
    kind: "essay",
    author: "Gintoki Joestar",
    publishedAt: "2025-05-30",
    readTime: "5 min read",
    thumbnail: "cricket",
    coverImage: "/articles/virat-kohli/hero.jpeg",
    coverCaption: "Originally published on Medium on May 30, 2025.",
    content: [
      {
        type: "paragraph",
        lede: true,
        text: "So, Virat Kohli just decided to bid adieu to his glorious yet underachieved test career a few days back in a surprising and unexpected turn of events.",
      },
      {
        type: "paragraph",
        text: "I wanted to share a few words but then I thought I’d rather share this piece I wrote right before the WTC 2023 final directly addressed to the man himself.",
      },
      {
        type: "paragraph",
        text: "Dear Virat Kohli, I wasn’t there for the 2001 Kolkata victory, I was too young for the 2007 England series win. My earliest memory of test cricket is 2010 NZ home tour where Harbhajan scored a hundred and we all know after that what happened in our overseas cycle.",
      },
      {
        type: "image",
        src: "/articles/virat-kohli/early-memory.jpeg",
        alt: "Virat Kohli Test cricket memory from the Medium article",
      },
      {
        type: "paragraph",
        text: "The embarrassing whitewashes in Australia and England, I’m a part of that generation of cricket watchers for whom Australia and England scoring 600 and declaring for normalcy and India losing by a series happened in every other match. But, in 2014 BGT a youngster stepped up.",
      },
      {
        type: "image",
        src: "/articles/virat-kohli/adelaide-2014.jpeg",
        alt: "Virat Kohli batting during the 2014 Border-Gavaskar Trophy",
      },
      {
        type: "paragraph",
        text: "I’ll never forget that tour, me and my dad waking up at 5 AM every day, the unfortunate Phil Hughes incident and the postponement of the series. And then on the first test, a certain youngster steps up, all eyes around him because of a disastrous England tour, smacks a century in the first innings, lone warrior in the second innings. I will never forget the intent shown by you that day, the intent that we don’t play for draws anymore but we play for the win.",
      },
      {
        type: "paragraph",
        text: "Then, losing the second test, drawing the third test and MSD retiring mid-series and the certain youngster now has the commands of Indian test team in his hands and what was about to unfold was the greatest Indian test lineup the world had ever seen. The home domination began, your 7 double hundreds, away wins in Sri Lanka, West Indies, one obstacle was still there tho conquering SENA countries, we showed fight for sure but the team failed us in 2018 SA and Eng tour, you being there as a lone batsman in our side watching others fall everytime.",
      },
      {
        type: "image",
        src: "/articles/virat-kohli/test-era.jpeg",
        alt: "Virat Kohli during India's Test cricket era",
      },
      {
        type: "paragraph",
        text: "But then, the 2018 BGT win, people downplayed that win saying that Smith and Warner didn’t play for Australia, but personally the 2018 win is as special as 2020 BGT win for me. The best phase of this Indian domination actually came when you started losing your form and that will ick me forever that we couldn’t enjoy your peak and the team’s peak together.",
      },
      {
        type: "image",
        src: "/articles/virat-kohli/bgt-win.jpeg",
        alt: "Virat Kohli and India during the Border-Gavaskar Trophy win",
      },
      {
        type: "paragraph",
        text: "But the incredible character and intent planted in this team by the leader was finally showing its fruits and we saw the incredible results in 2020–21 overseas cycle. Your captaincy resignment fiasco will always hurt me, the way you had to go and frankly I think the peak of Indian test cricket is behind us now, how we say Australia 2000s team, SA 2007–2015 test domination, I think that era of Indian test domination is also about to come to an end as the India 2014–2023 team.",
      },
      {
        type: "paragraph",
        text: "This was the “letter” I wrote dedicated to Virat Kohli back in June 2023, since then it’s been almost 2 years and again the test cricket took him on a ride and boy was it a turbulent one. Glimpses of the old Virat Kohli were visible post that WTC in the overseas WI tour where he smacked his first overseas century after ages and then a successful SA tour happened as well where he ended up being the lone performer yet again, that 79 will always remain one of his best knocks I saw live.",
      },
      { type: "image", src: "/articles/virat-kohli/sa-tour.jpeg", alt: "Virat Kohli in South Africa Test cricket" },
      {
        type: "paragraph",
        text: "After that, a dismal Bangladesh tour and then an even worse home NZ series, the home empire that was once built upon the consistent efforts put in by the entire team taken apart by a fragile and relentless kiwi side piece by piece. A home whitewash. One thing that I never thought I’d see in his career ever but I guess anything can happen in test cricket.",
      },
      {
        type: "paragraph",
        text: "Your final tour BGT 2024/25, I can write an entire separate article on that tour and I think I’d like to keep it that way. BGT’s are sacred in his test career after all.",
      },
      { type: "image", src: "/articles/virat-kohli/final-bgt.jpeg", alt: "Virat Kohli during his final BGT tour" },
      {
        type: "paragraph",
        text: "As a fan, you have left me wanting for more because there is no way a player of calibre can end before 10k runs, somewhere deep down I will always wish for your decision to be overturned, but I know you’re not one to go back on your word.",
      },
      {
        type: "pullquote",
        text: "After all, you’ve always played in your own way.",
      },
      {
        type: "paragraph",
        text: "Thanks for the memories, A little tribute in “My Way”.",
      },
    ],
  },
];

const strapiEnabled = process.env.ENABLE_STRAPI === "true";
const strapiUrl = strapiEnabled ? process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_URL : undefined;
const strapiToken = process.env.STRAPI_API_TOKEN;

function normalizePost(raw: any): BlogPost {
  const item = raw?.attributes ? { id: raw.id, ...raw.attributes } : raw;
  return {
    id: String(item.id ?? item.documentId ?? item.slug),
    slug: item.slug,
    title: item.title,
    dek: item.dek ?? item.subtitle ?? item.excerpt ?? "",
    excerpt: item.excerpt ?? item.dek ?? "",
    category: item.category?.name ?? item.category ?? "Essay",
    kind: item.kind ?? "essay",
    author: item.author?.name ?? item.author ?? "Gintoki",
    publishedAt: item.date ?? item.publishedAt ?? new Date().toISOString(),
    readTime: item.readTime ?? "5 min read",
    thumbnail: item.thumbnailKind ?? item.thumbnail ?? "default",
    coverImage: item.coverImage,
    coverCaption: item.coverCaption,
    content: Array.isArray(item.contentBlocks) ? item.contentBlocks : Array.isArray(item.content) ? item.content : fallbackPosts[0].content,
  };
}

async function fetchFromStrapi(path: string) {
  if (!strapiUrl) return null;

  const response = await fetch(`${strapiUrl.replace(/\/$/, "")}/api${path}`, {
    headers: strapiToken ? { Authorization: `Bearer ${strapiToken}` } : undefined,
    next: { revalidate: 60 },
  });

  if (!response.ok) return null;
  const json = await response.json();
  return json.data;
}

export async function getPosts(): Promise<BlogPost[]> {
  const data = await fetchFromStrapi("/articles?sort=publishedAt:desc&populate=*");
  if (!Array.isArray(data)) return fallbackPosts;
  return data.map(normalizePost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchFromStrapi(`/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`);
  if (Array.isArray(data) && data[0]) return normalizePost(data[0]);
  return fallbackPosts.find((post) => post.slug === slug) ?? null;
}

export async function getRelatedPosts(slug: string): Promise<BlogPost[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.slug !== slug).slice(0, 2);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export function getHeadings(post: BlogPost) {
  return post.content.filter((block): block is Extract<ContentBlock, { type: "heading" }> => block.type === "heading");
}
