# FoodBridge — Frontend

Phase 1 scaffold: React + Vite + Tailwind, matching the sitemap/roadmap
(Home, Donate, Find NGO, Login, Dashboard).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Deploy to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New...** > **Project**.
3. Import your **FoodBridge_** GitHub repository.
4. Vercel automatically detects the framework preset as **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. (Optional) Set `VITE_API_URL` under **Environment Variables** if connecting to an external backend.
6. Click **Deploy**.

> `vercel.json` is included in the project to automatically route all SPA subroutes to `index.html` to prevent 404 errors on page refresh.

## What's wired up

- **Routing**: React Router across all 5 pages (`src/App.jsx`)
- **Design system**: custom Tailwind tokens in `tailwind.config.js`
  (`bridge` green, `harvest` gold, `berry` accent, `sand` background,
  Fraunces + Work Sans fonts)
- **Accessibility**: "A+ Large Text" toggle in the navbar, visible focus
  rings, `prefers-reduced-motion` support, large tap targets throughout —
  built for the "old generation friendly" requirement in the brief
- **API layer**: `src/services/api.js` calls `/api/...` endpoints and
  falls back to mock data if the backend isn't running yet, so the UI is
  fully clickable today. Point `baseURL` at your real Express server
  once Phase 2 is built.
- **Find NGO**: uses the browser Geolocation API, falls back to a
  default NGO list if location is denied or unavailable. Swap the mock
  distance calculation for a real Google Maps Distance Matrix call when
  you add the API key.

## Not yet wired up (by design — matches Phase 2/3 in the roadmap)

- Real authentication (Login page currently just navigates to Dashboard)
- Backend (`Node.js + Express + SQL`, per the roadmap)
- Email notifications
- Admin panel
- NGO verification workflow

## Folder structure

```
src/
  components/   Navbar, Footer, Button, NGOCard, BridgeIllustration
  pages/        Home, Donate, FindNGO, Login, Dashboard
  services/     api.js (axios client + mock fallbacks)
```
