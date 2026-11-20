import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-5xl font-bold">About JM Notes</h1>
      <p className="max-w-xl text-center text-lg text-zinc-400">
        A notes app we will grow, episode by episode, into a full-stack
        Next.js project.
      </p>
      <Link href="/" className="text-yellow-400 underline">
        ← Back home
      </Link>
    </main>
  );
}
