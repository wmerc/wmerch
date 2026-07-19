# willmerchan.com

Personal portfolio and blog for **Will Merchan**, a product designer. The site
showcases work history, in-depth case studies, and design/development writing.

🔗 Live at [willmerchan.com](https://willmerchan.com)

## Tech stack

- **[Astro](https://astro.build)** (static output) — no UI framework; pure
  `.astro` components and vanilla CSS with custom properties
- **[MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)** for content authoring
- **[@astrojs/rss](https://docs.astro.build/en/guides/rss/)** — blog feed at `/rss.xml`
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — auto-generated sitemap
- **Google Analytics 4** via a small local `GoogleAnalytics.astro` component

## Project structure

```text
├── public/                  # static assets: fonts, favicons, images, wordmark
├── src/
│   ├── components/          # BaseHead, Header, HeaderLink, GoogleAnalytics, etc.
│   ├── content/
│   │   ├── blog/            # blog posts (one folder per post: <slug>/index.md)
│   │   ├── work/            # employers / roles (drives the /work page)
│   │   └── project/         # detailed case studies linked from work entries
│   ├── layouts/             # BlogPost.astro, ProjectPost.astro
│   ├── pages/               # routes: /, /work, /blog, dynamic [...slug], rss.xml
│   ├── styles/global.css    # global styles + CSS custom properties
│   └── content.config.ts    # content collection schemas (Content Layer API)
├── astro.config.mjs
└── package.json
```

Content is managed with Astro's **Content Layer API**. Three collections are
defined in `src/content.config.ts`:

- `blog` — articles; frontmatter: `title`, `description`, `pubDate`, `heroImage`
- `work` — roles; frontmatter includes `order`, `accomplishments`, `projectLinks`
- `project` — case studies; supports `draft: true` to keep a page in the repo
  while excluding it from the build

Each entry lives in its own folder as `index.md` alongside its images. The URL
slug is the folder name.

## Commands

Run from the project root:

| Command             | Action                                        |
| :------------------ | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start the dev server at `localhost:4321`      |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the production build locally          |
| `npx astro check`   | Type-check the project                        |

## Adding content

**Blog post:** create `src/content/blog/<slug>/index.md` with the required
frontmatter and drop any images in the same folder.

**Case study:** create `src/content/project/<slug>/index.md`. Link it from the
relevant role in `src/content/work/<company>/index.md` via `projectLinks`. Set
`draft: true` to keep it unpublished until it's ready.

## Credit

Originally scaffolded from the Astro blog starter, based on
[Bear Blog](https://github.com/HermanMartinus/bearblog/).
