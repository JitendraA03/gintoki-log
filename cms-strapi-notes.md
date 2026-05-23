# Strapi Setup Notes

Use Strapi as the source of truth for articles. The Next.js app expects Strapi's REST API at `/api/articles`.

## Create Locally

```bash
npx create-strapi-app@latest cms
```

Choose TypeScript and your preferred database. For a small personal blog, SQLite is fine locally; use Postgres for production.

## Public API Permissions

In Strapi:

1. Go to `Settings` → `Users & Permissions` → `Roles` → `Public`.
2. Enable `find` and `findOne` for `article`.
3. Keep create/update/delete disabled publicly.
4. Use the Strapi admin user for writing posts.

## Content Blocks JSON

Example:

```json
[
  {
    "type": "paragraph",
    "lede": true,
    "text": "Opening paragraph."
  },
  {
    "type": "heading",
    "id": "s1",
    "text": "Section title"
  },
  {
    "type": "paragraph",
    "text": "Body paragraph."
  },
  {
    "type": "pullquote",
    "text": "A sentence worth slowing down for."
  }
]
```
