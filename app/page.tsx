import { Hero, MyWork, Experience } from "@/components"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MyWork />
      <Experience />
    </main>
  );
}