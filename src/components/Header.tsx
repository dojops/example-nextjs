import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-[var(--card-border)] px-6 py-4">
      <nav className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          My Portfolio
        </Link>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
