'use client';

import { contacts } from '@/data/data';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const trans = useTranslations();

    return (
        <footer className="flex min-h-[100svh] snap-start items-center border-t border-white/10">
            <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-10 md:pt-24">
                <div className="flex items-center justify-between gap-4">
                    <p>
                        © {new Date().getFullYear()} {trans('footer')}
                    </p>
                    <div className="flex items-center gap-3">
                        {contacts.map((c) => {
                            const Icon = c.icon;
                            const isWeb = c.href.startsWith('http');
                            return (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    {...(isWeb
                                        ? { target: '_blank', rel: 'noopener noreferrer' }
                                        : {})}
                                    className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/10"
                                    aria-label={c.label}
                                    title={c.label}
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
