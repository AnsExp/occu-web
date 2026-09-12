import Layout from '@/components/Layout';
import { Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <Layout>
            <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-dark via-dark to-primary py-14 sm:py-16">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,163,216,0.20),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(44,165,141,0.16),_transparent_28%)]" />
                <div className="mx-auto max-w-7xl px-4">
                    <div className="relative rounded-[2rem] border border-secondary/25 bg-dark/80 p-6 shadow-2xl shadow-dark/40 backdrop-blur sm:p-10">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <p className="inline-flex w-fit rounded-full border border-secondary/25 bg-light/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                                        Contáctenos
                                    </p>
                                    <h2 className="text-3xl font-bold leading-tight text-light sm:text-4xl">
                                        Su salud no puede esperar.
                                        <br />
                                        Su empresa tampoco.
                                    </h2>
                                    <p className="max-w-2xl text-base leading-7 text-light/90 sm:text-lg">
                                        Escriba por WhatsApp para una respuesta ágil, o use el formulario para consultas detalladas. Un asesor le orientará sobre el servicio o plan que mejor se adapta a sus necesidades.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-light">Canales de contacto rápido:</p>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <a
                                            href="https://wa.me/593000000000"
                                            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-accent/35 bg-accent/15 px-6 py-3 text-sm font-semibold text-light transition-all hover:border-accent hover:bg-accent/25 focus:outline-none focus:ring-2 focus:ring-accent/60"
                                        >
                                            <Phone className="h-4 w-4" />
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}