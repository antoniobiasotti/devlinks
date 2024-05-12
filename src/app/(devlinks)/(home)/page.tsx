import { Header } from "@/components/header";
import { MainNavigationBar } from "@/components/Navbar";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <main className="h-full flex gap-3 bg-zinc-950 rounded-lg justify-center py-6">
      <div className="space-y-8 justify-center">
        <Header />
        <MainNavigationBar/>
        <div className="w-full flex justify-center">
          <div className="bg-zinc-800 px-10 py-5 flex-col justify-center items-center gap-5 inline-flex rounded">
            <div className="w-96 h-44 flex-col items-center gap-2 inline-flex">
              <h2 className="font-bold">Sobre</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda ab ratione doloribus ea debitis, a perferendis libero alias, in impedit sequi iste, fuga exercitationem tenetur mollitia ipsum dolores aperiam
              </p>
            </div>
            <div className="w-96 h-44 flex-col justify-start items-center gap-2 inline-flex">
              <h2 className="font-bold">De onde veio a ideia?</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus quam iure blanditiis odio temporibus non veritatis fugit, odit nihil, quis labore excepturi, cupiditate impedit deleniti? Culpa qui similique soluta?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
