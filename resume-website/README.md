# Sasan Vahidinia — personal portfolio

A personal portfolio built with React and Vite. This revision focuses on specific work, readable design and accurate descriptions instead of generic developer-portfolio copy.

## Project structure

The application lives in **resume-website/**.

- resume-website/src/App.jsx — page sections, navigation and contact links
- resume-website/src/content.js — projects, roles, education and skills
- resume-website/src/index.css — typography, layout, project illustrations and responsive styles
- resume-website/index.html — SEO and social metadata
- resume-website/public/ — favicon, robots.txt, sitemap, social image

## Run locally

Node.js 20+ is recommended.

```bash
cd resume-website
npm ci
npm run lint
npm run build
npm run dev
```

## Deployment

For Vercel, set the root directory to **resume-website**, framework to **Vite**, build command to `npm run build`, and output directory to `dist`.

The canonical, sitemap and Open Graph URLs in this version use `https://sasan-vahidinia.vercel.app/`. If the production domain changes, update them before publication.

## Content safeguards

- All dates and positions are based on the supplied approved CVs.
- The EEG classification project is explicitly described as a five-person team effort.
- PIAGAST content describes technical responsibilities at a general level; there are no internal endpoints, order records or admin screens.
- The site does not claim freelance work or unverified performance results.
- No phone number, immigration information or private restaurant details are published.
- The portraits and the Flutter hotel-app screenshot were kept from the original repository.
- PIAGAST, EEG and formatting-checker visuals are conceptual illustrations, **not fabricated screenshots or research results**.

## Before merging

Please check the final wording, especially whether the official name of the Flutter internship laboratory and the public PIAGAST descriptions are correct. If you have approved PIAGAST media or an EEG research figure, it can replace the conceptual art later.

Run the application on desktop and mobile in a browser. The GitHub pull request includes automated lint/build checks, but visual QA is still needed.

No live deployment or LinkedIn changes are part of this branch.
