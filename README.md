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
jakekeleher.dev/
├── index.html          # Home (hero, about, project cards, contact section)
├── project.html        # Project detail page (Turbovets, Emily Nava, Figma)
├── contact.html        # Contact page (links + message form)
├── css/
│   └── styles.css      # All styles (layout, components, responsive)
├── js/
│   └── main.js         # Footer year, scroll progress bar, other scripts
├── assets/
│   ├── images/         # Project images (e.g. project-turbovets.png, project-emilynava.png)
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

Project images live in `assets/images/` (e.g. `project-turbovets.png`, `project-emilynava.png`). Use the same paths in both `index.html` (project cards) and `project.html` (detail sections). Add `project-figma.png` when ready and replace the placeholder in `project.html`.

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

- **index.html:** Replace `[bracketed]` placeholders: about text, project descriptions, Figma project name.  
- **project.html:** Fill in Turbovets stack/learnings, Figma project name and description; set real “View project” link for Turbovets if you have one.  
- **contact.html:** Replace placeholder email and LinkedIn URL; hook the form up to Formspree, Netlify Forms, or your own backend when ready.  
- **Project images:** Add your own to `assets/images/` and update `src` in `index.html` and `project.html` (replace placehold.co for the Figma project).  
- **Project links:** Set real URLs for the task manager and Figma project; emilynavadesign.com is already linked on the project page.
