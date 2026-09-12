import logo from '@/assets/logo-white.svg'
import { ADDRESS_FULL, EMAIL_CONTACT, PHONE_CONTACT, SITE_NAME } from '@/lib/constants';

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/services", label: "Servicios" },
    { href: "/plans", label: "Planes" },
    { href: "/about-us", label: "Nosotros" },
    { href: "/contact", label: "Contacto" },
];

export default function Footer() {
    return (
        <footer className="border-t border-secondary/20 bg-dark text-light/85">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="transition-colors hover:text-secondary">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <p>Email: <a href={`mailto:${EMAIL_CONTACT}`} className="transition-colors hover:text-accent">{EMAIL_CONTACT}</a></p>
                        <p>Teléfono: <a href={`tel:+593${PHONE_CONTACT.replace(/\s+/g, '')}`} className="transition-colors hover:text-accent">{PHONE_CONTACT}</a></p>
                        <p>Dirección: {ADDRESS_FULL}</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-light/20 pt-4 text-center text-sm text-light/65">
                    © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};
