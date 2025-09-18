'use client';

export default function Description() {
    return (
        <p className="relative max-w-3xl leading-relaxed [text-wrap:balance] text-neutral-300 selection:bg-white/10 selection:text-white after:mt-4 after:block after:h-px after:bg-gradient-to-r after:from-white/20 after:to-transparent md:text-lg">
            Passionné par le <strong className="font-semibold text-white">design système</strong>,
            l’<strong className="font-semibold text-white">accessibilité</strong> et la
            <strong className="font-semibold text-white"> performance web</strong>. Stack actuelle :{' '}
            <span className="text-white">Next.js&nbsp;15</span>,{' '}
            <span className="text-white">TypeScript</span>,
            <span className="text-white"> Tailwind</span>, App Router. Côté outils :
            <span className="text-white"> Vercel</span>, <span className="text-white">GitHub</span>,{' '}
            <span className="text-white">Figma</span>.
        </p>
    );
}
