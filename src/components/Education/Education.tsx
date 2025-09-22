'use client';

import { useTranslations } from 'next-intl';

import { timeline } from '@/data/data';
import { TimelineItemProps } from '@/types';
import { endTs, formatPeriod, startTs } from '@/utils/date';

export default function Education() {
    const trans = useTranslations();
    const items = [...timeline].sort((a, b) => {
        const byEnd = endTs(b.end) - endTs(a.end);
        return byEnd !== 0 ? byEnd : startTs(b.start) - startTs(a.start);
    });

    return (
        <div className="w-full">
            <ul className="relative space-y-6 before:absolute before:inset-y-0 before:left-8 before:w-px before:rounded-full before:bg-gradient-to-b before:from-white/5 before:via-white/15 before:to-white/5 md:space-y-8">
                {items.map((item: TimelineItemProps) => {
                    const startLabel = formatPeriod(item.start);
                    const endLabel = item.end ? formatPeriod(item.end) : 'Aujourd’hui';

                    return (
                        <li key={item.id} className="relative pt-4 pl-10">
                            <span className="absolute top-[2rem] right-full -mr-3 hidden -translate-y-1/2 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] whitespace-nowrap text-neutral-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] md:inline-flex">
                                <time dateTime={item.start}>{startLabel}</time>
                                <span aria-hidden className="text-white/30">
                                    -
                                </span>
                                <time dateTime={item.end ?? ''}>{endLabel}</time>
                            </span>

                            <span className="absolute top-[1.15rem] left-5 grid h-7 w-7 place-items-center rounded-full bg-neutral-950 shadow-[0_0_0_4px_rgba(255,255,255,0.06)] ring-1 ring-white/10 before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_180deg,theme(colors.sky.500/30),theme(colors.fuchsia.500/30),theme(colors.emerald.500/30),theme(colors.sky.500/30))] before:opacity-40 before:blur-[6px]">
                                {item.kind === 'education' ? (
                                    <svg
                                        viewBox="0 0 20 20"
                                        className="h-3.5 w-3.5 text-sky-300"
                                        fill="currentColor"
                                        aria-hidden
                                    >
                                        <path d="M10 2.75 1.5 6.5 10 10.25 18.5 6.5 10 2.75Z" />
                                        <path d="M4.25 9.25v3.25c0 .4.26.77.67.94 3.11 1.27 6.05 1.27 9.16 0 .41-.17.67-.54.67-.94V9.25L10 12 4.25 9.25Z" />
                                        <path d="M16.5 8v4.25l1.75.75V8.75L16.5 8Z" />
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox="0 0 20 20"
                                        className="h-3.5 w-3.5 text-emerald-300"
                                        fill="currentColor"
                                        aria-hidden
                                    >
                                        <path d="M6.5 5.5V4.75c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25V5.5h-1.5V4.75a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V5.5h-1.5Z" />
                                        <path d="M2.5 7.25A1.75 1.75 0 0 1 4.25 5.5h11.5A1.75 1.75 0 0 1 17.5 7.25V9h-5.25v.75a.75.75 0 0 1-1.5 0V9H2.5V7.25Z" />
                                        <path d="M2.5 10.5h7.25v.25a1.75 1.75 0 0 0 3.5 0v-.25h4.75v3.25A1.75 1.75 0 0 1 16.25 15.5H4.25A1.75 1.75 0 0 1 2.5 13.75V10.5Z" />
                                    </svg>
                                )}
                            </span>

                            <article className="group mx-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-shadow hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_12px_40px_-16px_rgba(0,0,0,0.8)] md:p-6">
                                <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                    <h3 className="font-semibold text-white">{item.title}</h3>
                                    <span className="text-neutral-400">— {item.org}</span>

                                    <span className="ml-auto text-sm text-neutral-400 md:hidden">
                                        <time dateTime={item.start}>{startLabel}</time>
                                        {' – '}
                                        <time dateTime={item.end ?? ''}>{endLabel}</time>
                                    </span>
                                </header>

                                {(item.location || item.description) && (
                                    <p className="mt-2 text-neutral-300">
                                        {item.location && (
                                            <span className="text-neutral-400">
                                                {item.location} ·{' '}
                                            </span>
                                        )}
                                        {item.description
                                            ? trans('education.description.' + item.description)
                                            : ''}
                                    </p>
                                )}

                                {item.tags?.length ? (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {item.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                            </article>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
