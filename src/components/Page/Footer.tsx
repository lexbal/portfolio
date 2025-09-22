'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className="snap-end border-t border-white/10">
            <div className="mx-auto w-full max-w-6xl px-6 py-6 text-center text-sm text-neutral-400">
                © {t('me')} | {new Date().getFullYear()}
            </div>
        </footer>
    );
}
