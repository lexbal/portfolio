import Content from '@/components/Page/Content';
import Footer from '@/components/Page/Footer';
import Header from '@/components/Page/Header';
import Navbar from '@/components/Page/Navbar';

export const dynamic = 'force-dynamic'; // Empêche Next.js d’essayer de pré-rendre la page au build

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="h-[100svh] snap-y snap-mandatory snap-always overflow-y-auto overscroll-y-contain scroll-smooth">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-[radial-gradient(40rem_40rem_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)] before:content-['']" />
                    <Header />
                </div>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-[radial-gradient(40rem_40rem_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)] before:content-['']" />
                    <Content />
                </div>

                <Footer />
            </main>
        </>
    );
}
