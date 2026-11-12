import Link from "next/link";

const roadmap = ["Setup", "React basics", "Routing", "Data", "Deploy"];

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center gap-6 p-10">
      <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
        JavaScript Master · Episode 1
      </p>
      <h1 className="text-6xl font-bold">JM Notes</h1>
      <p className="text-xl text-zinc-400">
        My first Next.js app. Built from scratch.
      </p>
      <ul className="flex gap-3">
        {roadmap.map((step) => (
          <li key={step} className="rounded-full border border-zinc-700 px-4 py-1 text-sm">
            {step}
          </li>
        ))}
      </ul>
      <Link
        href="/about"
        className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-zinc-950"
      >
        About this app →
      </Link>
    </main>
  );
}
