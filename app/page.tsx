import { Hero, MyWork, Experience } from "@/components";
import { events } from "@/constants";

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />
      <MyWork />
      <Experience events={events}/>
    </main>
  );
}