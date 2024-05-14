import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
          <div className="h-full flex flex-col items-center rounded text-lg py-4">
            <div className="flex flex-col justify-between h-full w-1/2 border-x-2 border-zinc-500 divide-y divide-zinc-200 px-8">
              <div className="space-y-6">
                <div>
                  <h2 className="font-bold">About</h2>
                  <p>
                    DevLinks is a purely recreational and personal project. In each tab, you will find three (3) of my top tool choices for the subject. 
                  </p>
                </div>
                <div>
                  <h2 className="font-bold">Where the idea come from?</h2>
                  <p>
                  When I started as a web developer, I used to spend hours searching for tools that would improve my workflows. But as time passed, I was able to distinguish what would be useful and what was just a distraction, so I decided to gather all here.
                  Enjoy
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between items-center text-center pt-4">
                Made by Antonio Bia
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
  );
}
