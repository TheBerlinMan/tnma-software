# Portfolio

Plain HTML/CSS/JS portfolio site linking out to projects I've built. No build step, no dependencies — open `index.html` directly or serve it with any static file server.

## Adding a new project

Copy this block inside `<section class="project-grid">` in `index.html`, then update the image, title, description, and link:

```html
<article class="card">
  <div class="card-image-wrap">
    <img class="card-image" src="assets/images/project-6.svg" alt="Cover image for Project Six" loading="lazy" />
  </div>
  <div class="card-body">
    <div class="card-tags">
      <div class="card-tags-left">
        <span class="tag tag-type">Website</span>
        <div class="card-links">
          <a class="icon-link" href="https://example.com" target="_blank" rel="noopener" aria-label="Visit Project Six website">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </a>
          <a class="icon-link" href="https://github.com/example/project-six" target="_blank" rel="noopener" aria-label="View Project Six source on GitHub">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
      <span class="tag tag-status is-active"><span class="status-dot" aria-hidden="true"></span>Active</span>
    </div>
    <h2 class="card-title">Project Six</h2>
    <p class="card-description">Short description of the project.</p>
  </div>
</article>
```

- `tag-type` (Website/App) and the icon-links sit together on the left; `tag-status` sits opposite on the right.
- `tag-status` add `is-active` for a live green dot, or omit it for a muted "Inactive" state.
- Websites get the globe icon-link; apps get the globe and/or the GitHub icon-link, whichever apply.

Drop a cover image (ideally 640x360 or 16:9) into `assets/images/`.

## Local preview

```
npx serve .
```

## Deploy

Zero-config on Vercel — connect the repo or run `vercel` from this directory (install the CLI first with `npm i -g vercel`).
