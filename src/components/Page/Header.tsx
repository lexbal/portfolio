'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { hasLink } from '@/data/data';

export default function Header() {
    const trans = useTranslations();

    return (
        <header id="header" className="flex min-h-[100svh] snap-start items-center">
            <div className="relative mx-auto w-full max-w-6xl px-6 pt-20 pb-10 md:pt-24">
                <div className="pointer-events-none absolute inset-0 -z-10 before:absolute before:inset-0" />

                <div className="relative z-10 flex flex-col-reverse items-start gap-10 md:flex-row md:items-center">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                            {trans('header.name')}
                            <span className="inline bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                                {trans('me')}
                            </span>
                        </h1>

                        <div className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">
                            <p>
                                <span className="font-bold text-white">{trans('header.job')}</span>
                            </p>
                            <p>{trans('header.description')}</p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {hasLink('projects') && (
                                <a
                                    href="#projects"
                                    className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
                                >
                                    {trans('header.my_projects')}
                                </a>
                            )}
                            {hasLink('contact') && (
                                <a
                                    href="#contact"
                                    className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:border-white/30"
                                >
                                    {trans('header.contact')}
                                </a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-40 w-40 shrink-0 rounded-2xl shadow-xl shadow-black/40 before:absolute before:-inset-[2px] before:-z-10 before:rounded-[1.25rem] before:bg-[conic-gradient(from_180deg,theme(colors.sky.500/20),theme(colors.fuchsia.500/20),theme(colors.emerald.500/20),theme(colors.sky.500/20))] before:blur md:h-56 md:w-56"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                    >
                        <Image
                            src="/avatar_square_padded_1024.png"
                            alt="Photo d'Alexandre"
                            fill
                            className="rounded-2xl object-cover ring-1 ring-white/10"
                            sizes="224px"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </header>
    );
}
