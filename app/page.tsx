import { Hero, MyWork, Experience, About, HireMe } from "@/components";

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />
      <MyWork />
      <Experience />
      <About />
      <HireMe />
    </main>
  );
}