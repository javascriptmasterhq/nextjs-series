import Link from "next/link";
import { Suspense } from "react";
import { fetchNotes, newestFirst, pinnedFirst, withTag, allTags, type Note } from "@/utils/notes";

const NoteCard = ({ title, tags, author, createdAt, pinned }: Note) => (
  <li className="rounded-xl border border-zinc-700 p-5">
    <h2 className="flex items-center gap-3 text-2xl font-semibold">
      {title}
      {pinned && <span className="rounded bg-yellow-400 px-2 text-xs text-zinc-950">PINNED</span>}
    </h2>
    <p className="text-zinc-400">
      by {author?.name ?? "unknown"} · {createdAt}
    </p>
    <div className="mt-3 flex gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-zinc-800 px-3 text-sm">
          {tag}
        </span>
      ))}
    </div>
  </li>
);

type Props = { searchParams: Promise<{ tag?: string }> };

async function NoteList({ searchParams }: Props) {
  const { tag } = await searchParams;
  const notes = await fetchNotes();
  const filtered = tag ? withTag(notes, tag) : notes;
  const shown = pinnedFirst(newestFirst(filtered));

  return (
    <>
      <h1 className="text-5xl font-bold">{`Notes (${shown.length})`}</h1>
      <nav className="flex flex-wrap justify-center gap-2">
        {["all", ...allTags(notes)].map((t) => (
          <Link
            key={t}
            href={t === "all" ? "/notes" : `/notes?tag=${t}`}
            className={`rounded-full border px-4 py-1 text-sm ${
              (tag ?? "all") === t ? "border-yellow-400 bg-yellow-400 text-zinc-950" : "border-zinc-700"
            }`}
          >
            {t}
          </Link>
        ))}
      </nav>
      <ul className="grid w-full gap-4">
        {shown.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </ul>
    </>
  );
}

export default function NotesPage({ searchParams }: Props) {
  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-zinc-100">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <Suspense fallback={<p className="text-2xl text-zinc-400">Loading notes…</p>}>
          <NoteList searchParams={searchParams} />
        </Suspense>
        <Link href="/" className="text-yellow-400 underline">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
