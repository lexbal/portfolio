'use client';

import ProjectCard from '@/components/Project/ProjectCard';
import { projects } from '@/data/data';

export default function ProjectList() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
    );
}
