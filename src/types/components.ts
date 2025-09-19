import { ReactNode } from 'react';
import type { ComponentType } from 'react';
import { IconType } from 'react-icons';

export type SectionComponent = ComponentType<Record<string, never>>;

export type NavbarLinkProps = {
    code: 'description' | 'skills' | 'projects' | 'contact';
    component: SectionComponent;
};

type MailHref = `mailto:${string}`;
type HttpHref = `https://${string}` | `http://${string}`;
type EmailContact = {
    readonly icon: IconType;
    readonly href: MailHref;
    readonly label: 'email';
};

type WebContact<L extends Exclude<'email' | 'github' | 'linkedin', 'email'>> = {
    readonly icon: IconType;
    readonly href: HttpHref;
    readonly label: L;
};

export type ContactLinkProps = EmailContact | WebContact<'github'> | WebContact<'linkedin'>;

export type ProjectProps = {
    slug: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    repo?: string;
};

export type SkillProps = {
    label: string;
    icon: IconType;
};

export type ProjectCardProps = {
    project: ProjectProps;
};

export type ProvidersProps = {
    children: ReactNode;
    locale: string;
    messages: Record<string, string>;
};

export type SectionProps = {
    id: string;
    title: string;
    children: ReactNode;
};
