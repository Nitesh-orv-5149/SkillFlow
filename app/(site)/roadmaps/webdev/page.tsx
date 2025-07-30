// WebDevRoadmap.js
import SubSkillNode from '@/components/ui/SubSkillNode';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function webDevPage() {

    const subSkills = ["html", "css", "javascript", "react"];

  return (
     <main className="min-h-screen w-full flex flex-col items-center justify-start p-4">
            <h1 className="text-4xl font-extrabold mt-10 text-cyan-200">Explore the Roadmaps</h1>
            <section className="flex flex-wrap gap-10 mt-20">
                {subSkills.map((roadmap) => (
                    <div className='flex justify-center items-center gap-10'  key={roadmap}>
                        <Link href={`/roadmaps/webdev/${roadmap}`}>
                            <SubSkillNode title={roadmap} />
                        </Link>
                        <ArrowRight />
                    </div>
                ))}
            </section>
        </main>
  );
};

