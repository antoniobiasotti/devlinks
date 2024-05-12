import { Header } from "@/components/header";
import { MainNavigationBar } from "@/components/Navbar";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <main className="h-full flex gap-3 bg-zinc-950 rounded-lg justify-center py-6">
      <div className="space-y-8 justify-center">
        <Header />
        <MainNavigationBar/>
        <div className="flex justify-center">
          <div className="w-3/4 bg-zinc-800 px-10 py-5 flex-col justify-center items-center gap-5 inline-flex border border-zinc-700 rounded">
            <div className="w-96 h-44 flex-col items-center gap-2 inline-flex">
              <h2 className="font-bold">About</h2>
              <p className="text-start">
                DevLinks is a purely recreational and personal project. In each tab, you'll find three of my top tool choices for the subject. Enjoy.
              </p>
            </div>
            <div className="w-96 h-44 flex-col justify-start items-center gap-2 inline-flex">
              <h2 className="font-bold">Where the idea come from?</h2>
              <p className="text-start">
              When I started as a web developer, I faced a lot of difficulty trying to find quality tools, but as time passed, I was able to distinguish what would be useful and what was just a distraction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
