'use client';

import { Download, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Resume() {
    const href = '/cv.pdf';
    const coverSrc = '';
    const trans = useTranslations();

    return (
        <div className="w-full">
            <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 md:grid-cols-5">
                <div className="md:col-span-3">
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                        </div>

                        <div className="relative aspect-[4/3] w-full">
                            {coverSrc ? (
                                <Image
                                    src={coverSrc}
                                    alt="Aperçu"
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    sizes="(min-width: 768px) 60vw, 100vw"
                                />
                            ) : (
                                <div className="absolute inset-0 grid place-items-center">
                                    <div className="relative w-[78%] max-w-[520px] rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                        <div className="mb-4 h-4 w-44 rounded bg-white/10" />
                                        <div className="mb-2 h-3 w-[88%] rounded bg-white/7" />
                                        <div className="mb-2 h-3 w-[76%] rounded bg-white/7" />
                                        <div className="mb-6 h-3 w-[64%] rounded bg-white/7" />
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            <div className="h-20 rounded bg-white/5 ring-1 ring-white/10" />
                                            <div className="h-20 rounded bg-white/5 ring-1 ring-white/10" />
                                        </div>
                                        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[1.1rem] bg-[conic-gradient(from_180deg,theme(colors.sky.500/10),theme(colors.fuchsia.500/10),theme(colors.emerald.500/10),theme(colors.sky.500/10))] blur-xl" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                        <p className="mt-3 text-neutral-300">{trans('resume.description')}</p>

                        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-300">
                            <div>
                                <dt className="text-neutral-400">{trans('resume.format')}</dt>
                                <dd className="mt-1">{trans('resume.pdf')}</dd>
                            </div>
                            <div>
                                <dt className="text-neutral-400">{trans('resume.lang')}</dt>
                                <dd className="mt-1">{trans('resume.french')}</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
                            >
                                <Eye className="h-4 w-4" />
                                {trans('resume.view_online')}
                            </a>

                            <a
                                href={href}
                                download
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
                            >
                                <Download className="h-4 w-4" />
                                {trans('resume.download')}
                            </a>
                        </div>

                        <p className="mt-4 text-xs text-neutral-500">
                            {trans('resume.note', {
                                date: new Date().getFullYear(),
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
