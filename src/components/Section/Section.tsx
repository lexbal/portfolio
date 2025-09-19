'use client';

import { motion, type Variants, easeOut } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { SectionProps } from '@/types';

const reveal: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Section({ id, title, children }: SectionProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, margin: '-80px 0px -80px 0px' });

    return (
        <section
            id={id}
            className="flex min-h-[100svh] snap-start scroll-mt-5 items-center md:scroll-mt-5"
        >
            <div className="mx-auto w-full max-w-6xl px-6 pt-5 pb-10 md:pt-5">
                <div className="mb-8 flex items-center">
                    <h2 className="relative pr-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {title}
                    </h2>
                    <span className="ml-auto h-px flex-1 bg-white/10" />
                </div>

                <motion.div
                    ref={ref}
                    variants={reveal}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="text-neutral-300"
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
