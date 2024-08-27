import Card from "@/components/card";
import { Items } from "@/data/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border border-black rounded-xl overflow-hidden">
        <Card items={Items} />
      </div>
    </main>
  );
}
