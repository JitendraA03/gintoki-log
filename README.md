# gintoki.log

Next.js + Tailwind blog frontend based on the design files in `Blog Website/`.

## Local Frontend

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Strapi CMS

The frontend reads articles from Strapi when these env vars are set:

```bash
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_ADMIN_URL=http://localhost:1337/admin
```

If Strapi is not running, the site uses local fallback posts from `src/lib/posts.ts`, so the design remains viewable.

Recommended Strapi collection type: `article`.

Fields:

- `title`: text, required
- `slug`: UID based on title, required
- `dek`: text
- `excerpt`: text
- `category`: text or relation to category
- `kind`: text, for example `essay` or `notes`
- `author`: text or relation to author
- `readTime`: text
- `thumbnail`: enumeration: `cricket`, `anime`, `music`, `default`
- `coverCaption`: text
- `contentBlocks`: JSON, using the block shapes in `src/lib/posts.ts`

The website uses `revalidate = 60`, so newly published Strapi articles can appear without a frontend redeploy on platforms that support ISR.

## Admin

Visit `/admin` on the frontend. It links to `STRAPI_ADMIN_URL`, where Strapi handles the password-protected admin login.

## Deployment

For CMS-backed articles without redeploys, deploy the Next app to a runtime platform connected to GitHub, such as Vercel, Netlify, or a server. GitHub Pages is static-only and will not support ISR/server-side Strapi fetching by itself.

Push this repository to GitHub, configure the env vars above in the deployment platform, and point Strapi CORS/API permissions at the deployed frontend domain.

Recommended production split:

- Deploy the Next.js frontend from the repository root on Vercel.
- Deploy Strapi from `cms/` on Koyeb.
- Use Neon Postgres in production. SQLite is only for local development.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full Vercel + Koyeb + Neon flow.

Vercel frontend environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_STRAPI_URL=https://your-koyeb-service.koyeb.app
STRAPI_API_URL=https://your-koyeb-service.koyeb.app
STRAPI_ADMIN_URL=https://your-koyeb-service.koyeb.app/admin
STRAPI_API_TOKEN=
```
