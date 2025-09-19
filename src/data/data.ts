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

import Contact from '@/components/Contact/Contact';
import Description from '@/components/Description/Description';
import Education from '@/components/Education/Education';
import ProjectList from '@/components/Project/ProjectList';
import SkillList from '@/components/Skill/SkillList';
import {
    ContactLinkProps,
    NavbarLinkProps,
    ProjectProps,
    SkillProps,
    TimelineItemProps,
} from '@/types';

export const links = [
    { code: 'description', component: Description },
    { code: 'skills', component: SkillList },
    { code: 'education', component: Education },
    { code: 'projects', component: ProjectList },
    { code: 'contact', component: Contact },
] as const satisfies ReadonlyArray<NavbarLinkProps>;

export const hasLink = (code: (typeof links)[number]['code']) => links.some((l) => l.code === code);

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

export const timeline = [
    {
        id: 'edu-1',
        kind: 'education',
        title: 'BTS Système numérique - Informatique et réseaux',
        org: 'La Providence',
        start: '2016-09',
        end: '2018-06',
        location: 'Amiens, FR',
        description: '',
        tags: ['HTML/CSS', 'PHP', 'Javascript', 'C++', 'MySQL'],
    },
    {
        id: 'edu-2',
        kind: 'education',
        title: "Master Expert en Informatique et système d'information - Architecture Web et Big Data",
        org: 'IPSSI',
        start: '2018-11',
        end: '2022-09',
        location: 'Paris 12, FR',
        description: '',
        tags: [
            'HTML/CSS',
            'PHP',
            'Javascript',
            'Symfony',
            'Angular',
            'React',
            'ReactNative',
            'Ionic',
            'Python',
            'Django',
            'MySQL',
            'MongoDB',
        ],
    },
] as const satisfies ReadonlyArray<TimelineItemProps>;
