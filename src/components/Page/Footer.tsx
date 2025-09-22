'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className="snap-end border-t border-white/10">
            <div className="mx-auto w-full max-w-6xl px-6 py-6">
                <p className="text-xs text-neutral-400 md:text-sm">
                    © {new Date().getFullYear()} {t('me')} — {t('footer')}
                </p>
            </div>
        </footer>
    );
}
