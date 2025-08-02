"use client"

import Forum from "@/components/shared/Forum";
import { htmlForumPosts } from "@/constants/sampleData/htmlPosts";
import { useParams } from "next/navigation";

export default function subSkillPage() {

  const { subskill } = useParams();

  return (
    <main className="min-h-screen w-full flex flex-col p-4">
      <h1 className="text-4xl font-extrabold mt-10 text-cyan-200 underline">{subskill}</h1>
      <Forum posts={htmlForumPosts}/>
    </main>
  );
}