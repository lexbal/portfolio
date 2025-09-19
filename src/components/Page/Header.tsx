'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    const trans = useTranslations();

    return (
        <header id="header" className="flex min-h-[100svh] snap-start items-center">
            <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-10 md:pt-24">
                <div className="pointer-events-none absolute inset-0 -z-10 hidden [mask-image:radial-gradient(40rem_40rem_at_center,black,transparent)]">
                    <div className="bg-grid absolute inset-0" />
                </div>
                <div className="pointer-events-none absolute top-10 -left-24 -z-10 hidden h-60 w-60 rounded-full bg-gradient-to-tr from-sky-500/20 to-fuchsia-500/20 blur-2xl" />
                <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 hidden h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 blur-3xl" />

                <div className="relative z-10 flex flex-col-reverse items-start gap-8 md:flex-row md:items-center">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                            {trans('header.name')}
                            <span className="mx-2 inline text-white">Alex</span>
                        </h1>
                        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-300">
                            {trans('header.job')}
                            {trans('header.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative h-40 w-40 shrink-0 md:h-56 md:w-56"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                    >
                        <Image
                            src="/avatar.svg"
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
