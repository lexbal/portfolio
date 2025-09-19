'use client';

import { motion, type Variants, easeOut } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { skills } from '@/data/data';

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easeOut },
    },
};

export default function SkillList() {
    const trans = useTranslations();

    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-3 text-neutral-300 sm:grid-cols-2 lg:grid-cols-4"
        >
            {skills.map((skill: (typeof skills)[number]) => {
                const Icon = skill.icon;
                const label = trans('skills.' + skill.label);

                return (
                    <motion.li
                        key={skill.label}
                        variants={item}
                        initial="hidden"
                        animate="show"
                        whileHover={{ y: -1, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`relative flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/60 p-3 transition-colors before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-gradient-to-b before:from-sky-500 before:to-emerald-500 before:opacity-80 before:transition-all before:duration-300 before:content-[''] hover:bg-neutral-900/80 hover:before:w-[6px]`}
                        aria-label={label}
                        title={label}
                    >
                        <span className="grid size-9 place-items-center rounded-lg bg-neutral-800 ring-1 ring-white/10">
                            <Icon aria-hidden className="h-5 w-5 text-neutral-100" />
                        </span>
                        <span className="font-medium text-white">{label}</span>
                    </motion.li>
                );
            })}
        </motion.ul>
    );
}
