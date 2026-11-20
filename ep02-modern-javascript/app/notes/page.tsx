import Link from "next/link";
import { notes } from "@/scratch/notes-data.mjs";

type Note = {
  id: number;
  title: string;
  tags?: string[];
  author?: { name: string };
};

const NoteCard = ({ title, tags = [], author }: Note) => (
  <li className="rounded-xl border border-zinc-700 p-5">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-zinc-400">by {author?.name ?? "unknown"}</p>
    <div className="mt-3 flex gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-zinc-800 px-3 text-sm">
          {tag}
        </span>
      ))}
    </div>
  </li>
);

export default function NotesPage() {
  const all = [...notes, { id: 4, title: "Celebrate", tags: ["fun"] }];
  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-zinc-100">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <h1 className="text-5xl font-bold">{`Notes (${all.length})`}</h1>
        <ul className="grid w-full gap-4">
          {all.map((note) => (
            <NoteCard key={note.id} {...note} />
          ))}
        </ul>
        <Link href="/" className="text-yellow-400 underline">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
