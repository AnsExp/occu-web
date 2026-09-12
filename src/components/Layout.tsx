import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_NAME } from '@/lib/constants';

const DOCUMENT_TITLES: Record<string, string> = {
    '/':            `${SITE_NAME} — Centro de Especialidades Médicas`,
    '/about':       `${SITE_NAME} — Acerca de Nosotros`,
    '/companies':   `${SITE_NAME} — Para Empresas`,
    '/contact':     `${SITE_NAME} — Contáctenos`,
    '/plans':       `${SITE_NAME} — Planes`,
    '/services':    `${SITE_NAME} — Servicios`,
    '/specialties': `${SITE_NAME} — Especialidades`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    useEffect(() => {
        document.title = DOCUMENT_TITLES[location.pathname] || DOCUMENT_TITLES['/'];
    }, [location]);

    return (
        <>
            <Navbar />
            {children}
            {/* <main className="max-w-7xl mx-auto">
            </main> */}
            <Footer />
        </>
    )
}
