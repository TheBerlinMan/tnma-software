# Portfolio

Plain HTML/CSS/JS portfolio site linking out to projects I've built. No build step, no dependencies — open `index.html` directly or serve it with any static file server.

## Adding a new project

Copy this block inside `<section class="project-grid">` in `index.html`, then update the image, title, description, and link:

```html
<article class="card">
  <img class="card-image" src="assets/images/project-6.svg" alt="Cover image for Project Six" loading="lazy" />
  <div class="card-body">
    <h2 class="card-title">Project Six</h2>
    <p class="card-description">Short description of the project.</p>
    <a class="card-link" href="https://example.com" target="_blank" rel="noopener">Visit site →</a>
  </div>
</article>
```

Drop a cover image (ideally 640x360 or 16:9) into `assets/images/`.

## Local preview

```
npx serve .
```

## Deploy

Zero-config on Vercel — connect the repo or run `vercel` from this directory (install the CLI first with `npm i -g vercel`).
