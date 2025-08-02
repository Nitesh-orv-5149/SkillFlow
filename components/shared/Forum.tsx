"use client"

import { ForumProps } from "@/types/postTypes";
import PostCard from "../ui/PostCard";
import { useParams } from "next/navigation";

export default function Forum({posts} : ForumProps) {

    return (
        <>
        <main>
            <section className="flex flex-col justify-start items-start gap-2 p-8">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </section>
        </main>
        </>
    )
}