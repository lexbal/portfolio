import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';

import Providers from '@/components/Providers';
import './globals.css';

const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'fr';

export const metadata: Metadata = {
    title: 'Portfolio – Alexandre',
    description: 'Portfolio développeur',
    //metadataBase: new URL("https://example.com"),
    openGraph: {
        title: 'Portfolio – Alexandre',
        description: 'Portfolio développeur & créatif.',
        //url: "https://example.com",
        siteName: 'Alexandre Portfolio',
        type: 'website',
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let messages;

    try {
        messages = await getMessages({ locale: locale });
    } catch {
        notFound();
    }

    return (
        <html lang="en">
            <body className="snap-y snap-mandatory scroll-smooth bg-neutral-950 text-neutral-100 antialiased">
                <Providers locale={locale} messages={messages}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
