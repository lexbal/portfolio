'use client';

import { NextIntlClientProvider } from 'next-intl';

import type { ProvidersProps } from '@/types';

export default function Providers({ children, messages, locale }: ProvidersProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Paris">
            {children}
        </NextIntlClientProvider>
    );
}
