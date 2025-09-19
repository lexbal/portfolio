'use client';

import { useTranslations } from 'next-intl';
import { contacts } from '@/data/data';
import ContactForm from '@/components/Contact/ContactForm';

export default function Contact() {
    const trans = useTranslations();

    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-6xl pt-2 pb-10 md:pt-2">
                <p className="text-lg text-balance text-white md:text-xl">
                    {trans('contact.subtitle')}
                </p>

                <div className="grid items-start gap-10 md:grid-cols-5">
                    <div className="space-y-4 md:col-span-2">
                        <p className="leading-relaxed text-neutral-300">{trans('contact.lead')}</p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {contacts.map((c) => {
                                const Icon = c.icon;
                                return (
                                    <a
                                        key={c.label}
                                        href={c.href}
                                        {...(c.href.startsWith('http')
                                            ? { target: '_blank', rel: 'noopener noreferrer' }
                                            : {})}
                                        className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
                                        aria-label={c.label}
                                        title={c.label}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
