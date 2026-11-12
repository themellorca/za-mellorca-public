# Mellorca website

The source of the public Mellorca website.

## Build and check

Requires Node 20 or later.

```
npm ci
npm run verify
```

`npm run build` writes the site to `dist/`.

## Layout

- `website/`: pages and assets
- `editorial/articles/`: article sources
- `functions/api/`: contact and subscribe endpoints
- `tools/`: site build and tests
