# Episode 2: Modern JavaScript You Need for React

Code for **JavaScript Master, Next.js series, Episode 2**. This is the JM Notes app from [Episode 1](../ep01-what-is-nextjs), plus a `scratch/` folder of plain Node scripts and one new Next.js page that uses the same modern JavaScript.

Built with Next.js 16.4.6, React 19.3.0, Node.js v24 (anything from 20.9 up works).

## What is in here

| Path | What it is |
|---|---|
| `scratch/demos/01-let-const.mjs` ... `07-quiz.mjs` | The seven theory demos: let/const, arrows, destructuring, spread, template literals, modules, optional chaining |
| `scratch/demos/modules/` | `greet.mjs` (exports) and `main.mjs` (imports) |
| `scratch/old-notes.js` | The starting point: a notes list written the old way (var, functions, string concatenation) |
| `scratch/step1-const-arrows.js` | Refactor 1: const/let, arrow functions, for...of |
| `scratch/step2-destructuring-templates.js` | Refactor 2: destructuring, default values, template literals |
| `scratch/notes-data.mjs`, `notes-helpers.mjs`, `modern-notes.mjs` | Refactor 3: modules, spread, optional chaining |
| `scratch/challenge.js` | **Viewer challenge:** rewrite the three old-style functions with arrows and destructuring |
| `scratch/challenge-solution.mjs` | One possible answer (no peeking!) |
| `app/notes/page.tsx` | New Next.js page (`/notes`) using the same JavaScript in React |
| `logs/` | The real terminal output shown in the video |

## Run it

```bash
npm install            # only the first time
node scratch/old-notes.js
node scratch/modern-notes.mjs          # same output as the old version
diff <(node scratch/old-notes.js) <(node scratch/modern-notes.mjs) && echo "identical output"

node scratch/demos/01-let-const.mjs    # and the other demos
cd scratch/demos/modules && node main.mjs

npm run dev            # http://localhost:3000 and http://localhost:3000/notes
npm run build
```

Expected output of both note scripts:

```
#1 Learn JS [js, react] by Ada
#2 Ship Ep 2 [video] by unknown (pinned)
#3 Read docs [] by Linus
#4 Celebrate [fun] by unknown
```

## Viewer challenge

Open `scratch/challenge.js` and rewrite `fullName`, `lineTotal` and `cityOf` using arrow functions and destructuring (bonus: optional chaining in `cityOf`). The output must stay:

```
Ada Lovelace
12
London unknown
```

Post your version in the YouTube comments.
