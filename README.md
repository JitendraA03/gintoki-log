# gintoki.log

Next.js + Tailwind blog frontend with the Kohli article bundled locally for a simple Vercel deployment.

## Local Frontend

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Current Content

The live site currently uses local article data in `src/lib/posts.ts` and image assets in `public/articles/virat-kohli/`.

Published article:

```text
My Journey as a Test Cricket Viewer ft. Virat Kohli
```

## Deployment

Deploy the frontend only on Vercel from the repository root. No CMS or database is required for the first production deploy.

See [DEPLOYMENT.md](./DEPLOYMENT.md).

## Future Strapi CMS

The Strapi app remains in `cms/` for later. To enable it, set:

```bash
ENABLE_STRAPI=true
```

See [STRAPI_INTEGRATION_STEPS.md](./STRAPI_INTEGRATION_STEPS.md).
