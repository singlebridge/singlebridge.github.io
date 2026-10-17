# Jitao Zhou — Academic Website

Source for **https://singlebridge.github.io/**, a lightweight academic portfolio designed for PhD applications and research networking.

## What is included

- Responsive one-page academic portfolio
- Research directions and selected projects
- Selected publications and current manuscripts
- Research / professional experience
- Downloadable PDF CV
- GitHub, ORCID and email links
- Mobile navigation and reduced-motion support
- Open Graph metadata, favicon, robots.txt and sitemap.xml
- Custom 404 page
- No framework, package manager, build step or external font dependency

## Repository structure

```text
singlebridge.github.io/
├── .nojekyll
├── 404.html
├── LICENSE
├── README.md
├── index.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── assets/
    ├── css/
    │   └── style.css
    ├── files/
    │   └── Jitao_Zhou_CV.pdf
    ├── images/
    │   ├── favicon.svg
    │   └── og-card.svg
    └── js/
        └── main.js
```

## Deploy on GitHub Pages

1. Create a **public** repository named exactly `singlebridge.github.io`.
2. Upload the **contents** of this folder to the repository root (do not upload the outer folder as a nested directory).
3. Commit to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then save.
7. The site will be available at **https://singlebridge.github.io/** after GitHub Pages finishes the deployment.

## Updating the CV

Replace:

```text
assets/files/Jitao_Zhou_CV.pdf
```

with the newest PDF while keeping the same filename. The website buttons will continue to work without editing HTML.

## Adding a portrait later

The current hero intentionally uses an abstract scientific visual instead of a personal photograph, so the site is deployment-ready now. If you later want a portrait, add an image under `assets/images/` and replace the hero visual block in `index.html`.

## Custom domain (optional)

Do **not** add a `CNAME` file unless you own a domain and want to connect it to GitHub Pages. If you later purchase a domain, configure the DNS first, then add the custom domain in **Settings → Pages**.

## Editing

All content is plain HTML/CSS/JavaScript:

- Main content: `index.html`
- Visual design: `assets/css/style.css`
- Menu / scroll reveal: `assets/js/main.js`

No Node.js, Jekyll or build tools are required.
