# StarNavi Task — React + Vite + TanStack Router + Tailwind v4

A test task in a StarNavi Company.

Core Requirements:

- Heroes list: Using the sw-api.starnavi.io API, display a list of all Star Wars characters. The list must be either paginated or use infinite scroll—your choice.

- Hero details: When a specific character is clicked, show detailed information as a graph where:

- The main node is the selected hero.

- From the hero, draw links to the films they appear in.

- From each film, draw links to the starships the hero traveled on.

---

## 🔧 Tech Stack

- **Build Tool:** Vite 7
- **Language:** TypeScript ~5.9
- **UI:** React 19, Tailwind CSS v4, lucide-react icons
- **Routing:** @tanstack/react-router (+ `@tanstack/router-plugin`)
- **Data:** @tanstack/react-query
- **Graphs:** @xyflow/react (React Flow successor)
- **Styling Utils:** class-variance-authority, clsx, tailwind-merge
- **Quality:** ESLint 9 (flat config), Prettier 3
- **Testing:** Vitest 4, @testing-library/react, @testing-library/jest-dom, jsdom

---

## ▶️ Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start dev server (Vite).                     |
| `npm run build`    | Type-check & build (`tsc -b && vite build`). |
| `npm run preview`  | Preview the production build locally.        |
| `npm run lint`     | Run ESLint.                                  |
| `npm run lint:fix` | Fix lint issues where possible.              |
| `npm run test`     | Run unit tests (Vitest).                     |

> You can use `pnpm` or `yarn` instead of `npm` if preferred.

---

## 🏁 Getting Started

### 1) Prerequisites

- **Node.js**: 20 LTS recommended (Vite 7 supports Node >= 18)
- **Package manager**: npm / pnpm / yarn

### 2) Install

```bash
npm install
```

### 3) Development

```bash
npm run dev
```

Open the printed local URL (usually [http://localhost:5173](http://localhost:5173)).

### 4) Production build & preview

```bash
npm run build
npm run preview
```

---

## 🌐 Environment Variables (optional)

Vite exposes variables prefixed with `VITE_` via `import.meta.env`.

Create a `.env` file if you need runtime config:

```env
VITE_API_URL=https://example.com
```

---

## 🧭 Routing (TanStack Router)

- The project uses **`@tanstack/react-router`** with **`@tanstack/router-plugin`** for file-based routing and a generated route tree.
- The plugin runs during **dev**/**build** to generate a typesafe route map.
- You may want to **ignore the generated route tree file** in your formatter/linter settings to avoid noisy diffs.

> Tip: After renaming routes, some editors (e.g., VSCode) may auto-open the generated file. You can mark it read-only or exclude it from search.

---

## 📦 Data Fetching (TanStack Query)

- Co-locate queries next to screens/components.
- Prefer **stable `queryKey`s** like `['people', page]` for pagination.
- Keep derived UI state local; server data in Query; ephemeral UI state in component or a light store if needed.

---

## 🧪 Testing

- **Runner:** Vitest (jsdom environment)
- **Utilities:** @testing-library/react, @testing-library/jest-dom, @testing-library/user-event

Run all tests:

```bash
npm run test
```

---

## 🎨 Styling

- **Tailwind v4** with `@tailwindcss/vite` plugin.
- Use `clsx` for conditional classes, then pass through `tailwind-merge` via the `cn()` helper to dedupe and resolve conflicts.
- For reusable variants, prefer **class-variance-authority (cva)**.

Example `cn` helper usage:

```tsx
<div className={cn('p-4', isActive && 'bg-neutral-800')}>...</div>
```

---

## 🔗 Icons

- Uses **lucide-react**. Example:

```tsx
import { ArrowRight } from 'lucide-react'
;<ArrowRight size={18} aria-hidden />
```

---

## 🗺️ Graphs with @xyflow/react

- `@xyflow/react` (formerly reactflow) for building interactive graphs.
- Good for visualizing relationships (e.g., hero → films → starships).

---

## ✅ Linting & Formatting

- **ESLint 9** (flat config) + recommended React/TS rules
- **Prettier 3** for formatting

Commands:

```bash
npm run lint
npm run lint:fix
```

---

## 🙌 Acknowledgements

- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Vite](https://vitejs.dev/) & [Vitest](https://vitest.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [XYFlow / React Flow](https://xyflow.com/)
