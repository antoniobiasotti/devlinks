import { Header } from "@/components/header";
import { MainNavigationBar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <main className="h-full flex gap-3 bg-zinc-950 rounded-lg justify-center py-6">
      <div className="space-y-8 justify-center">
        <Header />
        <MainNavigationBar/>
        <div className="flex justify-center">
          <div className="w-3/4 bg-zinc-800 px-10 py-5 flex-col justify-center items-center gap-2 inline-flex border border-zinc-700 rounded">
            <div className="w-96 flex-col items-center gap-2 inline-flex">
              <h2 className="font-bold">About</h2>
              <div className="text-justify whitespace-pre-line">
                DevLinks is a purely recreational and personal project. In each tab, you'll find three (3) of my top tool choices for the subject. 
              </div>
            </div>
            <div className="w-96 h-44 flex-col justify-start items-center gap-2 inline-flex">
              <h2 className="font-bold">Where the idea come from?</h2>
              <div className="text-justify whitespace-pre-line">
              When I started as a web developer, I used to spend hours searching for tools that would improve my workflows. But as time passed, I was able to distinguish what would be useful and what was just a distraction, so I decided to gather all here.
              <span className="block mt-4">Enjoy.</span>
              </div>
            </div>
            <div className="border border-zinc-700 w-96 mt-4" ></div>
            <div className="w-96 flex justify-between items-center">
              <span>Made by Antonio Bia</span>
                <Link
                  href="https://github.com/antoniobiasotti/devlinks"
                  target='blank'
                >
                  <Image
                      src="/github.svg" 
                      width={30} 
                      height={30} 
                      alt=""
                  />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
