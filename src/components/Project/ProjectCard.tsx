'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { ProjectCardProps } from '@/types';

export default function ProjectCard({ project }: ProjectCardProps) {
    const trans = useTranslations();

    return (
        <article className="group overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 transition-colors hover:bg-neutral-900/80">
            <div className="relative h-52">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-2xl object-cover ring-1 ring-white/10"
                    sizes="224px"
                    priority
                />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-neutral-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-lg border border-white/10 px-2 py-1 text-xs text-neutral-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-5 flex gap-3 text-sm">
                    {project.link && (
                        <a
                            className="underline underline-offset-4 hover:text-white"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {trans('projects.live')}
                        </a>
                    )}
                    {project.repo && (
                        <a
                            className="underline underline-offset-4 hover:text-white"
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {trans('projects.code')}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
