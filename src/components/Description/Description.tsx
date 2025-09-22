'use client';

import { useTranslations } from 'next-intl';

export default function Description() {
    const trans = useTranslations();

    return (
        <p className="relative max-w-3xl leading-relaxed [text-wrap:balance] text-neutral-300 selection:bg-white/10 selection:text-white after:mt-4 after:block after:h-px after:bg-gradient-to-r after:from-white/20 after:to-transparent md:text-lg">
            {trans.rich('description', {
                span: (children) => <span className="text-white">{children}</span>,
                strong: (children) => (
                    <strong className="font-semibold text-white">{children}</strong>
                ),
            })}
        </p>
    );
}
