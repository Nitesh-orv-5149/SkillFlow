import SubSkillNode from "@/components/ui/SubSkillNode";
import Link from "next/link";

export default function roadmapsPage() {

    const roadmaps = ["Webdev", "Ai-Ml", "Python"];

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-start p-4">
            <h1 className="text-4xl font-extrabold mt-10 text-cyan-200">Explore the Roadmaps</h1>
            <section className="flex flex-wrap gap-30 mt-20">
                {roadmaps.map((roadmap) => (
                    <Link href={`/roadmaps/${roadmap}`} key={roadmap}>
                        <SubSkillNode title={roadmap} />
                    </Link>
                ))}
            </section>
        </main>
    );
}