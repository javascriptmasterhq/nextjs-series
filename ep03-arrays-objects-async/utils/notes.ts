export type Note = {
  id: number;
  title: string;
  tags: string[];
  createdAt: string; // "YYYY-MM-DD"
  pinned?: boolean;
  author?: { name: string };
};

export const seedNotes: Note[] = [
  { id: 1, title: "Learn JS", tags: ["js", "react"], createdAt: "2026-11-12", author: { name: "Ada" } },
  { id: 2, title: "Ship Ep 2", tags: ["video"], createdAt: "2026-11-20", pinned: true },
  { id: 3, title: "Read the docs", tags: ["nextjs"], createdAt: "2026-11-14", author: { name: "Linus" } },
  { id: 4, title: "Master reduce", tags: ["js"], createdAt: "2026-11-25", author: { name: "Grace" } },
  { id: 5, title: "Async all the things", tags: ["js", "async"], createdAt: "2026-11-26" },
  { id: 6, title: "Plan Ep 4", tags: ["video", "typescript"], createdAt: "2026-11-27", pinned: true },
];

// ---- sort helpers: every one returns a NEW array
export const byTitle = (notes: Note[]) =>
  notes.toSorted((a, b) => a.title.localeCompare(b.title));

export const newestFirst = (notes: Note[]) =>
  notes.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt));

export const pinnedFirst = (notes: Note[]) =>
  notes.toSorted((a, b) => Number(b.pinned ?? false) - Number(a.pinned ?? false));

// ---- filter helpers
export const withTag = (notes: Note[], tag: string) =>
  notes.filter((note) => note.tags.includes(tag));

export const search = (notes: Note[], query: string) =>
  notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()));

export const allTags = (notes: Note[]) =>
  [...new Set(notes.flatMap((note) => note.tags))].toSorted();

// ---- fake API: pretends to be a slow server
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchNotes(): Promise<Note[]> {
  await wait(400);
  return structuredClone(seedNotes);
}

export async function fetchNote(id: number): Promise<Note> {
  await wait(200);
  const note = seedNotes.find((n) => n.id === id);
  if (!note) throw new Error(`Note ${id} not found`);
  return structuredClone(note);
}
