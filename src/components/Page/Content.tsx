'use client';

import { useTranslations } from 'next-intl';

import Section from '@/components/Section/Section';
import { links } from '@/data/data';
import { SectionComponent } from '@/types';

export default function Content() {
    const trans = useTranslations();

    return (
        <div className="contents">
            {links.map((link) => {
                const Component = link.component as SectionComponent;
                return (
                    <Section key={link.code} id={link.code} title={trans('section.' + link.code)}>
                        <Component />
                    </Section>
                );
            })}
        </div>
    );
}
