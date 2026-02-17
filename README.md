# JakeKeleher.dev

Portfolio site for Jake Keleher — Computer Science & Graphic Design. Built with HTML, CSS, and JavaScript, hosted on **GitHub Pages**.

## Assignment notes

- **Domain:** Jakekeleher.dev  
- **Hosting:** GitHub Pages (this repo)  
- **Portfolio projects:**  
  1. Full-stack task management system  
  2. emilynavadesign.com  
  3. Best Figma project from class  

## File structure

```
JakeKeleher.dev/
├── index.html          # Single-page site (hero, about, projects, contact)
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Footer year, optional enhancements
├── assets/
│   ├── images/         # Project thumbnails, headshot, etc.
│   │   └── .gitkeep
│   └── projects/       # Optional: per-project assets (mockups, process, final files)
│       └── .gitkeep
└── README.md
```

## Portfolio assets (assignment deliverable)

Keep your three projects organized so you can drop them in later:

1. **Task management system** — Screenshots, repo link, short description, tech stack.  
2. **emilynavadesign.com** — Screenshots, link, your role (design/dev), process if you have it.  
3. **Figma project** — Export key frames or share a Figma link; add a short write-up of concept and process.

You can store source assets in `assets/images/` (e.g. `project-taskmanager.png`, `project-emilynava.png`, `project-figma.png`) and swap the placeholder image URLs in `index.html` for these local paths when ready.

## Deploying to GitHub Pages

1. Create a new repo on GitHub (e.g. `JakeKeleher.dev` or `jakekeleher.github.io`).  
2. Push this folder to the repo.  
3. **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` (or `master`), folder: **/ (root)**.  
4. If your repo is `jakekeleher.github.io`, the site will be at `https://jakekeleher.github.io`.  
5. Point your domain **Jakekeleher.dev** at GitHub Pages (add a CNAME file or set custom domain in Pages settings and configure DNS at your registrar).

## Local development

Open `index.html` in a browser, or run a simple server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve
```

Then visit `http://localhost:8000` (or the port shown).

## What to customize

- **index.html:** Replace `[bracketed]` placeholders: about text, project descriptions, Figma project name, email, GitHub, LinkedIn.  
- **Project images:** Add your own to `assets/images/` and update the `src` in `index.html` (remove placehold.co URLs).  
- **Project links:** Set real URLs for the task manager and Figma project; emilynavadesign.com is already linked.
