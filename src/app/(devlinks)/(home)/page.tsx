import Image from "next/image";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <div className="inline-flex flex-col justify-center items-center py-0 px-96">
      <div className="flex flex-col justify-center items-center">
        <h2>Sobre</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda ab ratione doloribus ea debitis, a perferendis libero alias, in impedit sequi iste, fuga exercitationem tenetur mollitia ipsum dolores aperiam
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>De onde veio a ideia?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus quam iure blanditiis odio temporibus non veritatis fugit, odit nihil, quis labore excepturi, cupiditate impedit deleniti? Culpa qui similique soluta?
        </p>
      </div>
    </div>
  );
}
