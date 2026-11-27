# Episode 3: Arrays, Objects & Async JS

Code for **JavaScript Master, Next.js series, Episode 3**. This is the JM Notes app from [Episode 2](../ep02-modern-javascript), plus:

- a new `utils/notes.ts` with a `Note` type, sample notes, sort and filter helpers, and an async fake API
- an async `/notes` page that awaits the fake API inside `<Suspense>` and filters by tag (`/notes?tag=js`)
- `scratch/ep03/`: the seven theory demos, a Node test drive, and the viewer challenge
- `"type": "module"` in `package.json`, so Node treats the scratch files (and `utils/notes.ts`) as ES modules

Built with Next.js 16.4.6, React 19.3.0, Node.js v24 (Node 22.18+ also runs `.ts` files directly by stripping types).

## What is in here

| Path | What it is |
|---|---|
| `scratch/ep03/01-immutability.mjs` | Mutating vs copying arrays and objects |
| `scratch/ep03/02-map-filter.mjs` | `map` transforms, `filter` keeps, chaining |
| `scratch/ep03/03-reduce.mjs` | `reduce` to a number and to an object, step by step |
| `scratch/ep03/04-find-sort.mjs` | `find`, `some`, `every`, `sort` (mutates) vs `toSorted` (copies) |
| `scratch/ep03/05-promises.mjs` | Building a Promise by hand, `.then` / `.catch`, console order |
| `scratch/ep03/06-async-await.mjs` | `async` / `await`, sequential vs `Promise.all`, `try` / `catch` |
| `scratch/ep03/07-json-fetch.mjs` | `JSON.stringify` / `JSON.parse`, `fetch` + `res.json()` (needs `npm run dev`) |
| `utils/notes.ts` | **The hands-on:** `byTitle`, `newestFirst`, `pinnedFirst`, `withTag`, `search`, `allTags`, `fetchNotes`, `fetchNote` |
| `scratch/ep03/try-notes.mjs` | Test drive of every helper in plain Node |
| `app/notes/page.tsx` | The `/notes` page, now an async Server Component using the helpers |
| `public/notes.json` | Served by the dev server at `/notes.json` for the fetch demo |
| `scratch/ep03/challenge.mjs` | **Viewer challenge:** count notes per tag with one `reduce` |
| `scratch/ep03/challenge-solution.mjs` | One possible answer (no peeking!) |
| `logs/` | The real terminal output shown in the video |
| `scratch/demos/`, `scratch/*.js` | Episode 2's files, kept so the project keeps growing |

## Run it

```bash
npm install                          # only the first time
node scratch/ep03/01-immutability.mjs   # ...and the other demos
node scratch/ep03/try-notes.mjs
npm run dev                          # http://localhost:3000/notes and /notes?tag=js
node scratch/ep03/07-json-fetch.mjs     # in a second terminal, while npm run dev is running
npm run build
```

Expected output of `try-notes.mjs`:

```
fetched 6 notes in 401 ms
by title:      Async all the things | Learn JS | Master reduce | Plan Ep 4 | Read the docs | Ship Ep 2
newest first:  Plan Ep 4 | Async all the things | Master reduce | Ship Ep 2 | Read the docs | Learn JS
pinned first:  Plan Ep 4 | Ship Ep 2 | Async all the things | Master reduce | Read the docs | Learn JS
tag 'js':      Learn JS | Master reduce | Async all the things
search 'ep':   Ship Ep 2 | Plan Ep 4
all tags:      async, js, nextjs, react, typescript, video
untouched?     true
Promise.all:   Learn JS + Master reduce
error:         Note 42 not found
```

## Viewer challenge

Open `scratch/ep03/challenge.mjs` and write `countByTag` with **one** `reduce` call. Running `node scratch/ep03/challenge.mjs` should print:

```
{ js: 3, react: 1, video: 2, nextjs: 1, async: 1, typescript: 1 }
```

Post your reduce in the YouTube comments.
