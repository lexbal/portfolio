import {
    SiHtml5,
    SiPhp,
    SiSymfony,
    SiPython,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiBootstrap,
    SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiGithubactions,
    SiGmail,
    SiGithub,
    SiLinkedin,
} from 'react-icons/si';

import ProjectList from '@/components/Project/ProjectList';
import SkillList from '@/components/Skill/SkillList';
import Description from '@/components/Description/Description';
import { ContactLinkProps, NavbarLinkProps, ProjectProps, SkillProps } from '@/types';

export const links = [
    { code: 'description', component: Description },
    { code: 'skills', component: SkillList },
    { code: 'projects', component: ProjectList },
] as const satisfies ReadonlyArray<NavbarLinkProps>;

export const projects = [
    {
        slug: 'humanaid-fo',
        title: 'HumanAid FO',
        description:
            "Projet scolaire annuel visant à créer une solution pour une communauté particulière. Ce référentiel contient l'interface utilisateur de cette solution.",
        image: '/project.svg',
        tags: ['React', 'Bootstrap', 'Typescript'],
        repo: 'https://github.com/lexbal/HumanAid_FO',
    },
    {
        slug: 'humanaid-bo',
        title: 'HumanAid BO',
        description:
            'Projet scolaire annuel visant à créer une solution pour une communauté particulière. Ce référentiel contient le backend de cette solution, qui permet de gérer toutes les données grâce à plusieurs CRUD et à une API.',
        image: '/project.svg',
        tags: ['Symfony', 'PHP', 'Bootstrap', 'Javascript', 'MySQL', 'Nginx'],
        repo: 'https://github.com/lexbal/HumanAid_BO',
    },
    // {
    //     slug: "humanaid-bo",
    //     title: "HumanAid BO",
    //     description: "Projet scolaire annuel visant à créer une solution pour une communauté particulière. Ce référentiel contient le backend de cette solution, qui permet de gérer toutes les données grâce à plusieurs CRUD et à une API.",
    //     image: "/project.svg",
    //     tags: ["Symfony", "PHP", "Javascript", "MySQL", "Nginx"],
    //     link: undefined,
    //     repo: "https://github.com/lexbal/HumanAid_BO/tree/master",
    // },
] as const satisfies ReadonlyArray<ProjectProps>;

export const skills = [
    { icon: SiHtml5, label: 'html' },
    { icon: SiPhp, label: 'php' },
    { icon: SiSymfony, label: 'symfony' },
    { icon: SiNextdotjs, label: 'nextjs' },
    { icon: SiReact, label: 'react' },
    { icon: SiTypescript, label: 'typescript' },
    { icon: SiPython, label: 'python' },
    { icon: SiBootstrap, label: 'bootstrap' },
    { icon: SiTailwindcss, label: 'tailwindcss' },
    { icon: SiMongodb, label: 'mongodb' },
    { icon: SiMysql, label: 'mysql' },
    { icon: SiGithubactions, label: 'cicd' },
] as const satisfies ReadonlyArray<SkillProps>;

export const contacts = [
    { icon: SiGmail, href: 'mailto:alexballe35@gmail.com', label: 'email' },
    { icon: SiGithub, href: 'https://github.com/lexbal', label: 'github' },
    {
        icon: SiLinkedin,
        href: 'https://fr.linkedin.com/in/alexandre-balle-199b36161',
        label: 'linkedin',
    },
] as const satisfies ReadonlyArray<ContactLinkProps>;
