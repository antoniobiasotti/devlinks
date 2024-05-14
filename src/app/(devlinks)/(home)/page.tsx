import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
          <div className="h-full flex flex-col items-center gap-2 px-10 py-5 border border-zinc-700 rounded text-lg">
            <div className="w-3/4 flex flex-col items-center justify-center gap-4 border border-zinc-700">
              <div className="flex-col items-center inline-flex">
                <h2 className="font-semibold">About</h2>
                <p className="text-center">
                  DevLinks is a purely recreational and personal project. In each tab, you'll find three (3) of my top tool choices for the subject. 
                </p>
              </div>
              <div className="flex-col items-center inline-flex">
                <h2 className="font-semibold">Where the idea come from?</h2>
                <p className="text-center">
                When I started as a web developer, I used to spend hours searching for tools that would improve my workflows. But as time passed, I was able to distinguish what would be useful and what was just a distraction, so I decided to gather all here.
                Enjoy
                </p>
              </div>
              {/* <div className="w-96">
                <div className="flex justify-between items-center">Made by Antonio Bia
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
              </div> */}
            </div>
          </div>
  );
}
