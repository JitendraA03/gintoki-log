# Deployment: Vercel + Koyeb + Neon

This repository deploys as two services from the same GitHub repo:

- Frontend: Next.js on Vercel, using the repository root.
- CMS: Strapi on Koyeb, using the `cms/` directory.
- Database: Neon Postgres, connected to Strapi with `DATABASE_URL`.

## 1. Create Neon Postgres

1. Go to https://neon.com and create a project.
2. Copy the pooled or direct Postgres connection string.
3. Keep it for Koyeb as `DATABASE_URL`.

The connection string should look like:

```text
postgresql://user:password@host.neon.tech/database?sslmode=require
```

## 2. Deploy Strapi On Koyeb

1. Go to https://app.koyeb.com.
2. Create a new Web Service from GitHub.
3. Select repo: `JitendraA03/gintoki-log`.
4. Set root directory:

```text
cms
```

5. Use Node.js buildpack/runtime.
6. Set build command:

```bash
npm install && npm run build
```

7. Set run command:

```bash
npm run start
```

8. Set port:

```text
1337
```

9. Add environment variables:

```bash
NODE_VERSION=22
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=postgres
DATABASE_URL=<your-neon-connection-string>
APP_KEYS=<random1>,<random2>,<random3>,<random4>
API_TOKEN_SALT=<random>
ADMIN_JWT_SECRET=<random>
TRANSFER_TOKEN_SALT=<random>
ENCRYPTION_KEY=<random>
JWT_SECRET=<random>
```

Generate random values locally with:

```bash
openssl rand -base64 32
```

After deployment, open:

```text
https://your-koyeb-service.koyeb.app/admin
```

Create the first Strapi admin account.

## 3. Verify Strapi

Open:

```text
https://your-koyeb-service.koyeb.app/api/articles
```

Expected result: JSON containing the Virat Kohli article.

## 4. Deploy Frontend On Vercel

1. Go to https://vercel.com/new.
2. Import `JitendraA03/gintoki-log`.
3. Keep root directory as repository root.
4. Framework should be `Next.js`.
5. Add environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_STRAPI_URL=https://your-koyeb-service.koyeb.app
STRAPI_API_URL=https://your-koyeb-service.koyeb.app
STRAPI_ADMIN_URL=https://your-koyeb-service.koyeb.app/admin
STRAPI_API_TOKEN=
```

6. Deploy.

## Notes

- Koyeb Free web services sleep after inactivity, so the CMS can have a cold start.
- Neon Free is suitable for this small CMS database, but monitor storage and compute limits.
- Do not use Strapi local upload storage for important future media on free hosting. Use Cloudinary or another object storage provider.
- Current article images are committed under `public/articles/`, so they are served by the frontend and do not depend on Strapi uploads.
