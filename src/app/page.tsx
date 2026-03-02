import { Header } from "@/components/Header";
import { Card } from "@/components/Card";

const features = [
  {
    title: "Fast",
    description: "Built on Next.js with static export for instant page loads.",
  },
  {
    title: "Modern",
    description: "TypeScript, Tailwind CSS, and React 19 out of the box.",
  },
  {
    title: "Deployable",
    description: "Dockerfile included — ready for any container platform.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-400 mb-12">
            A simple Next.js site to showcase projects and skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--card-border)] py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Portfolio. Built with Next.js.
      </footer>
    </div>
  );
}
