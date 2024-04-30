import Image from "next/image";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 5000))

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda ab ratione doloribus ea debitis, a perferendis libero alias, in impedit sequi iste, fuga exercitationem tenetur mollitia ipsum dolores aperiam
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus quam iure blanditiis odio temporibus non veritatis fugit, odit nihil, quis labore excepturi, cupiditate impedit deleniti? Culpa qui similique soluta?
      </p>
    </div>
  );
}
