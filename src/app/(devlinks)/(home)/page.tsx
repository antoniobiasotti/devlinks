import Image from "next/image";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <div className="bg-zinc-200 flex justify-center items-center h-screen"> 
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
  );
}
