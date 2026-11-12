# Episode 1 code: JM Notes

Created on the VM with `npx create-next-app@latest jm-notes --yes` (Next.js 16.4.6, React 19.3.0, Node v24.22.1, npm 11.21.1).

Files edited in the episode (final state is in `jm-notes/`):
- `app/page.tsx` (edit 1 then edit 3)
- `app/about/page.tsx` (new, edit 2)
- `app/layout.tsx` (metadata title and description, edit 4)

Each intermediate version is in `../build/steps/` (page.v1.tsx, page.v2.tsx, about.tsx, layout.v1.tsx),
and the real terminal output is in `../build/*.log` (cna.log, versions.log, dev.log, build.log).

Run it:
```
cd jm-notes
npm install   # only if node_modules is missing
npm run dev   # http://localhost:3000
npm run build
```
