import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { ArrowRight, Briefcase, CheckCircle, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <Layout>
            <div className="mx-auto max-w-7xl px-4 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-accent-alt text-accent-alt">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full">
                                <MapPin className="h-3.5 w-3.5" />
                            </span>
                            <span>Guayaquil, Ecuador</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-dark leading-tight">
                            Salud integral para personas y{' '}
                            <span className="underline text-accent-alt">empresas</span>
                            {' '} que no se detienen
                        </h1>
                        <p className="text-lg text-dark leading-relaxed max-w-2xl">
                            Centro médico ambulatorio especializado en salud ocupacional y atención clínica. Evaluaciones precisas, cumplimiento normativo y cuidado real desde Guayaquil.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/593000000000"
                                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <Phone className="w-4 h-4 mr-2" /> Escribir por WhatsApp
                            </a>
                            <Link
                                to="/plans"
                                className="inline-flex items-center justify-center rounded-lg border border-accent-alt px-6 py-3 font-medium text-accent-alt transition-colors hover:bg-accent-alt hover:text-white"
                            >
                                Ver Planes Médicos
                            </Link>
                        </div>
                        <ul className="grid grid-cols-1 gap-2 text-sm font-medium text-dark sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                'Evaluaciones ocupacionales',
                                '+30 especialidades',
                                'Cumplimiento IESS · SART',
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 rounded-xl px-3.5 py-2 ring-1 ring-accent-alt text-accent-alt"
                                >
                                    <CheckCircle className="h-4 w-4" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <Card>
                            <div className="rounded-2xl border border-secondary/20 bg-white p-2">
                                <div className="mb-6 flex items-start justify-between gap-4 border-b border-secondary/20 pb-5">
                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                                            Atención prioritaria
                                        </p>
                                        <h3 className="text-xl font-bold text-primary">¿Qué necesitas hoy?</h3>
                                        <p className="mt-2 text-sm leading-6 text-dark">
                                            Selecciona el servicio que mejor se ajusta a tu necesidad inmediata.
                                        </p>
                                    </div>
                                    <div className="rounded-full bg-light p-3 text-accent-alt shadow-sm ring-1 ring-secondary/20">
                                        <Briefcase size={25} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        'Ficha médica ocupacional',
                                        'Certificado de aptitud laboral',
                                        'Consulta con especialista',
                                        'Laboratorio y diagnóstico',
                                        'Brigada médica empresarial',
                                        'Atención a domicilio',
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center justify-between rounded-xl border border-secondary/20 bg-light/60 px-4 py-3 text-sm font-medium text-dark transition-colors hover:border-accent hover:bg-accent/10"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-accent-alt">
                                                    <CheckCircle size={16} className="text-accent-alt" />
                                                </span>
                                                <span className="text-dark">{item}</span>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-secondary/60" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-xl bg-dark px-4 py-4 text-light">
                                    <p className="text-sm font-semibold">Normativa Ecuador:</p>
                                    <p className="mt-1 text-sm">
                                        Cumplimiento IESS · SART · Ministerio de Trabajo. Documentación oficial para su empresa.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}