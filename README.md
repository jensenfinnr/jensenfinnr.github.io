# jensenfinnr.github.io

Portfolio site for Finn Jensen — mechanical engineering, University of Pittsburgh.
Plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies, no npm.

Live at **https://jensenfinnr.github.io** once you've done step 1 below.

---

## 1. Put it on GitHub Pages

The repository name matters. For a site at `jensenfinnr.github.io`, the repo must be named exactly that.

```bash
# from inside this folder
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/jensenfinnr/jensenfinnr.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save. It goes live in a minute or two.

To preview locally before pushing:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Open it through a local server, not by double-clicking `index.html` — the galleries load a JavaScript file, and browsers block that on `file://`.

---

## 2. Photos

22 photos are already in and captioned. To add, remove, or reorder any of them:

**a. Drop the file in the right folder.**

```
assets/images/corvette-1954/       1954 Corvette restomod
assets/images/airfolio/            Airfolio
assets/images/bmw-f10-lighting/    F10 interior lighting
assets/images/c4-corvette/         C4 Corvette
assets/images/design-studies/      Sketches and wire model
```

**b. List it in `assets/js/media.js`.**

That file is the only place you edit. Each project has a list; uncomment or add lines:

```js
"corvette-1954": [
  { file: "light-strip-enclosure.jpg", caption: "Sheet-metal enclosure for the light strip", wide: true },
  { file: "bracket-forming.jpg",       caption: "Bracket after forming" },
],
```

| Option | Required | What it does |
|---|---|---|
| `file` | yes | Filename only, no folder path |
| `caption` | no | One short line printed under the photo |
| `wide` | no | `true` makes it span the full gallery width |
| `alt` | no | Screen-reader description; falls back to the caption |

The **first photo** in each list is also the thumbnail used on the home page, so lead with your strongest image.

Filename rules: lowercase, dashes instead of spaces, `.jpg` / `.png` / `.webp`. GitHub Pages is case-sensitive and spaces break links, so `Car design 3 wire model.jpg` needs to become `car-design-wire-model.jpg` before you upload it.

If a filename in the manifest doesn't match a file on disk, the page shows a hatched placeholder naming the file it was looking for, so mistakes are easy to spot.

The photos you sent were HEIC and JPEG straight off a phone, up to 8 MB each. They've all been converted to JPEG, auto-rotated, resized to 2000px on the long edge, stripped of EXIF, and re-saved at quality 82 — 22 MB down to 5.4 MB total. Do the same with anything you add, or the site will feel slow on mobile.

Four of the HEIC files carried Apple depth/HDR auxiliary layers that most tools refuse to open. If you ever hit that, the fix is to export as JPEG from Photos rather than sharing the original file.

---

## 3. Add your résumé (optional)

There's a commented-out "Resume (PDF)" button in the contact section of `index.html`. Save your PDF as `assets/finn-jensen-resume.pdf`, then uncomment that line. It ships commented out so the live site never has a broken download link.

---

## 4. Editing the writing

I drafted the project copy from your notes and résumé, then corrected it against your photos — the CAD screenshots changed what I understood the 1954 panel and the Airfolio to be. Read it once with your own eyes anyway. A few sentences describe *how* the work went and *why* a choice was made, and you're the only one who actually knows.

Two spots to check specifically: the 5 mm LED strip dimension on the 1954 page (taken off your CAD annotation) and the claim that the F10 install is fully reversible.

| What | Where |
|---|---|
| Home page: hero, project summaries, about, contact | `index.html` |
| Individual project write-ups | `projects/*.html` |
| Colors, type, spacing | `assets/css/site.css` (tokens at the very top) |
| Gallery / thumbnail / lightbox behavior | `assets/js/site.js` |

Your phone number is in `index.html` as a commented-out line in the contact section. Uncomment it if you want it public.

### Adding a sixth project

1. Copy `projects/design-studies.html` to `projects/your-project.html` and rewrite the content.
2. Add a matching key to `assets/js/media.js` and a folder under `assets/images/`.
3. Copy one `<article class="proj">` block in `index.html`, point `data-thumb` at the new key, and add `proj--flip` if it should sit image-right (they alternate).
4. Fix the prev/next links at the bottom of the neighboring project pages.

---

## Design notes

- **Palette** — primer gray-green wall, chalk panels, oxblood signal. Body-shop colors.
- **Type** — Big Shoulders Display (industrial signage) for headlines, IBM Plex Sans for reading, IBM Plex Mono for anything that behaves like data. Fonts load from Google Fonts; if that ever fails the page falls back to a condensed system stack and still reads fine.
- **The dimension line** is the one repeated motif — ticks, arrows, and a measurement label. It's there because measuring a car and turning it into a plan is the actual through-line of your work, and every label on it is a real number or a real fact.
- Responsive down to phone width, keyboard-navigable, visible focus rings, and `prefers-reduced-motion` respected.

## File map

```
.
├── index.html
├── projects/
│   ├── corvette-1954.html
│   ├── airfolio.html
│   ├── bmw-f10-lighting.html
│   ├── c4-corvette.html
│   └── design-studies.html
├── assets/
│   ├── css/site.css
│   ├── js/media.js          ← the file you edit to add photos
│   ├── js/site.js
│   ├── favicon.svg
│   └── images/<project>/
├── .nojekyll
└── README.md
```
