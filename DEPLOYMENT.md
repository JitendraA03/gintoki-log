# Frontend-Only Deployment

This is the current production path: deploy the static/ISR Next.js blog on Vercel with the Kohli article bundled locally.

The Strapi CMS code remains in `cms/` for future use, but the frontend does not require Strapi unless `ENABLE_STRAPI=true` is configured.

## Deploy On Vercel

1. Go to https://vercel.com/new.
2. Import GitHub repo:

```text
JitendraA03/gintoki-log
```

3. Keep root directory as the repository root.
4. Framework should auto-detect as `Next.js`.
5. Do not add Strapi environment variables for the first deployment.
6. Deploy.

## Optional Environment Variable

After Vercel gives you a production URL, you can set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

This is optional for the current site.

## Expected Result

- Homepage shows only `My Journey as a Test Cricket Viewer ft. Virat Kohli`.
- Article page is available at:

```text
/blog/my-journey-as-a-test-cricket-viewer-ft-virat-kohli
```

- Article images are served from `public/articles/virat-kohli/`.

## Future CMS

See [STRAPI_INTEGRATION_STEPS.md](./STRAPI_INTEGRATION_STEPS.md) when you are ready to add Strapi back.
