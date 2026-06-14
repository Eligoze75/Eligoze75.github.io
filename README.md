# Elí Gonzalez — Portfolio

Personal portfolio site for [eligoze75.github.io](https://eligoze75.github.io).

Built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. Static export deployed to GitHub Pages from the `docs/` folder.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run deploy:docs
```

This runs `next build`, exports static files to `out/`, copies them to `docs/`, and adds `.nojekyll` for GitHub Pages.

Pushes to `main` also trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which rebuilds and commits `docs/` automatically.

## Project structure

- `app/` — Next.js App Router pages and global styles
- `components/` — UI sections (Hero, Brewo spotlight, projects bento grid, etc.)
- `lib/content.ts` — All site copy and data (edit here to update content)
- `public/img/` — Images and logos

## License

CC0 1.0 Universal — see [LICENSE](LICENSE).
