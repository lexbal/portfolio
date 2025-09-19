'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
    const trans = useTranslations();
    const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        setError(null);

        const form = e.currentTarget;
        const payload = Object.fromEntries(new FormData(form).entries());

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            setStatus('sent');
            form.reset();
        } else {
            const j = await res.json().catch(() => ({}));
            setError(j?.error ?? 'unknown');
            setStatus('error');
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className="relative mx-auto w-full max-w-xl space-y-5 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.06)_inset,0_10px_30px_-10px_rgba(0,0,0,.6)] backdrop-blur before:pointer-events-none before:absolute before:-inset-px before:rounded-[1.1rem] before:bg-[conic-gradient(from_180deg,theme(colors.sky.500/15),theme(colors.fuchsia.500/15),theme(colors.emerald.500/15),theme(colors.sky.500/15))] before:opacity-40 before:blur before:content-[''] md:p-8"
        >
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm text-neutral-400">
                        {trans('contact.name')}
                    </label>
                    <input
                        name="name"
                        required
                        minLength={2}
                        maxLength={80}
                        placeholder="Votre nom"
                        className="w-full rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white placeholder-neutral-500 outline-none focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20"
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm text-neutral-400">
                        {trans('contact.email')}
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        maxLength={120}
                        placeholder="vous@exemple.com"
                        className="w-full rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white placeholder-neutral-500 outline-none focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20"
                    />
                </div>
            </div>

            <div>
                <label className="mb-1 block text-sm text-neutral-400">
                    {trans('contact.message')}
                </label>
                <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={6}
                    placeholder="Votre message…"
                    className="w-full resize-y rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white placeholder-neutral-500 outline-none focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20"
                />
            </div>

            <div className="hidden">
                <input name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex items-center gap-3 pt-1">
                <button
                    disabled={status === 'loading'}
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 disabled:opacity-60"
                >
                    {status === 'loading' ? trans('contact.sending') : trans('contact.sent')}
                </button>

                {status === 'sent' && (
                    <span className="text-sm text-emerald-400">
                        {trans('contact.message_sent')} ✅
                    </span>
                )}
                {status === 'error' && (
                    <span className="text-sm text-rose-400">
                        {trans('contact.message_not_sent') + (error ? ` (${error})` : '')}.
                    </span>
                )}
            </div>
        </form>
    );
}
