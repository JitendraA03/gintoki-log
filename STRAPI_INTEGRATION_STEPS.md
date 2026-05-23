# Future Strapi CMS Integration

The website is currently deployed frontend-only. The Strapi app in `cms/` is kept for later, so you can add CMS-managed articles without redesigning the frontend.

## 1. Choose Hosting

Recommended future setup:

- Frontend: Vercel
- Strapi app: any Node hosting provider
- Database: managed Postgres, for example Neon
- Media uploads: Cloudinary or S3-compatible storage

Avoid depending on local server disk for uploaded images. Most free Node hosts use ephemeral filesystems.

## 2. Create Database

Create a managed Postgres database and copy its connection string:

```text
postgresql://user:password@host/dbname?sslmode=require
```

## 3. Deploy Strapi

Deploy the `cms/` directory as a Node service.

Build command:

```bash
npm install && npm run build
```

Start command:

```bash
npm run start
```

Required environment variables:

```bash
NODE_VERSION=22
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=postgres
DATABASE_URL=<your-postgres-connection-string>
APP_KEYS=<random1>,<random2>,<random3>,<random4>
API_TOKEN_SALT=<random>
ADMIN_JWT_SECRET=<random>
TRANSFER_TOKEN_SALT=<random>
ENCRYPTION_KEY=<random>
JWT_SECRET=<random>
```

Generate random values:

```bash
openssl rand -base64 32
```

## 4. Verify Strapi

Open:

```text
https://your-strapi-domain/admin
```

Create the first admin user.

Then check:

```text
https://your-strapi-domain/api/articles
```

The Strapi bootstrap currently seeds the Kohli article if the database is empty.

## 5. Enable Frontend CMS Reads

In Vercel, add:

```bash
ENABLE_STRAPI=true
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain
STRAPI_API_URL=https://your-strapi-domain
STRAPI_ADMIN_URL=https://your-strapi-domain/admin
STRAPI_API_TOKEN=
```

Redeploy the frontend.

If Strapi is unavailable, the frontend still falls back to the local Kohli article.

## 6. Content Shape

The frontend expects articles at:

```text
/api/articles?sort=publishedAt:desc&populate=*
/api/articles?filters[slug][$eq]=your-slug&populate=*
```

The `article` collection fields are already defined in:

```text
cms/src/api/article/content-types/article/schema.json
```

Main fields:

- `title`
- `slug`
- `dek`
- `excerpt`
- `category`
- `kind`
- `author`
- `date`
- `readTime`
- `thumbnail`
- `coverImage`
- `coverCaption`
- `contentBlocks`
