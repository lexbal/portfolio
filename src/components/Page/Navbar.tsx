'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import { links } from '@/data/data';

export default function Navbar() {
    const trans = useTranslations();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string>(links[0]?.code ?? '');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // 🔹 Synchro avec le hash (retour arrière, lien externe vers #id, etc.)
    useEffect(() => {
        const syncFromHash = () => {
            const hash = decodeURIComponent(window.location.hash.replace('#', ''));
            if (hash && links.some((l) => l.code === hash)) setActive(hash);
        };
        syncFromHash();
        window.addEventListener('hashchange', syncFromHash);
        return () => window.removeEventListener('hashchange', syncFromHash);
    }, []);

    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.code))
            .filter(Boolean) as HTMLElement[];
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // On prend l'élément le plus visible (ou le premier visible)
                const visible =
                    entries
                        .filter((e) => e.isIntersecting)
                        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0] ?? null;
                if (visible?.target?.id) setActive(visible.target.id);
            },
            // 🔹 Plus tolérant: détecte dès qu'une petite partie entre dans le viewport
            { rootMargin: '-55% 0px -40% 0px', threshold: [0, 0.05, 0.1, 0.2, 0.5] },
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const baseClasses = useMemo(
        () =>
            'relative inline-flex h-9 items-center px-2 text-sm text-neutral-300 hover:text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
        [],
    );

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-[background,border-color,backdrop-filter] ${
                scrolled ? 'border-b border-white/10 bg-neutral-950/70 backdrop-blur-md' : ''
            }`}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="#header" className="font-semibold tracking-tight text-white">
                    Lex
                </a>

                <div className="hidden items-center gap-5 md:flex">
                    {links.map((link: (typeof links)[number]) => {
                        const isActive = active === link.code;
                        return (
                            <a
                                key={link.code}
                                href={`#${link.code}`}
                                aria-current={isActive ? 'page' : undefined}
                                className={baseClasses}
                                onClick={() => setActive(link.code)}
                            >
                                <span className="relative">
                                    {trans('section.' + link.code)}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-white/70 transition-transform duration-300 ${
                                            isActive ? 'scale-x-100' : ''
                                        }`}
                                    />
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
