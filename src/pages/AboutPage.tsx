import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const aboutValues: Array<{ title: string; description?: string }> = [
    {
        title: 'Excelencia',
        description: 'Los más altos estándares clínicos y de servicio en cada interacción.',
    },
    {
        title: 'Integridad',
        description: 'Transparencia, honestidad y ética profesional en cada acción.',
    },
    {
        title: 'Innovación',
        description: 'Tecnología y mejores prácticas para soluciones médicas de vanguardia.',
    },
    {
        title: 'Compromiso Humano',
        description: 'Cada paciente merece cuidado genuino, no un número de expediente.',
    },
];

const aboutPillars: Array<{ title: string; content?: string }> = [
    {
        title: 'Misión',
        content:
            'Brindar atención médica especializada y diagnóstica con enfoque humano, seguro y ético, integrando servicios clínicos, ocupacionales y programas de ayuda social, para mejorar la salud y bienestar de nuestros pacientes, empresas y comunidad, mediante procesos eficientes y en mejora continua.',
    },
    {
        title: 'Visión',
        content:
            'Ser el centro médico de referencia en la región por la excelencia en atención especializada, la precisión diagnóstica, el compromiso social y la gestión de calidad certificada bajo ISO 9001, fortaleciendo la confianza de empresas, familias y comunidad.',
    },
    {
        title: 'Política de Calidad',
        content:
            'Centro de Especialidades San Agustin se compromete de salud seguros y éticos para la evaluación médica y la emisión de certificados de aptitud física mediante, la integración de especialidades clínicas, diagnósticas y ocupacionales, garantizando precisión y confiabilidad en nuestros servicios.\nNos comprometemos con la mejora continua y con mantener nuestro Sistema de Gestión de Calidad conforme a los requisitos de la norma ISO 9001, avanzando hacia la excelencia y consolidándonos como un centro médico de referencia en la región. ',
    },
];

const reviews: Array<{ rating: number; testimonial: string; name: string; title: string }> = [
    {
        rating: 5,
        testimonial:
            'Realizamos las evaluaciones de ingreso de 30 colaboradores con OccuMaster Health. El proceso fue ágil, organizado y los informes llegaron a tiempo. La documentación cumplió con todos los requisitos del IESS. Sin duda volveremos.',
        name: 'Marcos R.',
        title: 'Jefe de RRHH — Sector Industrial, Guayaquil',
    },
    {
        rating: 5,
        testimonial:
            'Me hice el Plan Cardiológico y quedé muy satisfecha. El cardiólogo fue extremadamente profesional, los resultados fueron claros y el servicio completamente puntual. Lo recomiendo ampliamente a toda mi familia.',
        name: 'Lorena T.',
        title: 'Paciente particular',
    },
    {
        rating: 5,
        testimonial:
            'La brigada médica que coordinaron en nuestras instalaciones fue excelente. No interrumpió nuestras operaciones en ningún momento y los trabajadores salieron con toda la documentación ocupacional en regla.',
        name: 'Javier V.',
        title: 'Gerente General — Empresa Agrícola',
    },
];

export default function AboutPage() {
    return (
        <Layout>
            <section className="px-4 py-14 sm:py-16">
                <div className="rounded-3xl border border-secondary/20 bg-white p-6 shadow-sm sm:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                                    Quienes Somos
                                </p>
                                <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                                    Nacimos para elevar el estándar de la salud en Ecuador
                                </h2>
                                <p className="text-base leading-7 text-dark">
                                    OccuMaster Health es un centro de atención médica ambulatoria especializado en servicios de salud integral, con enfoque tanto clínico como ocupacional. Nace de la iniciativa de dos médicos que, al identificar la necesidad de mejorar la calidad en la atención, decidieron unir su experiencia para desarrollar un modelo de atención basado en la excelencia, la responsabilidad y el compromiso genuino con la salud.
                                </p>
                                <p className="text-base leading-7 text-dark">
                                    Nuestra institución está orientada a brindar servicios médicos confiables, oportunos y de calidad, dirigidos tanto a pacientes particulares como al sector empresarial. Contamos con dos áreas claramente definidas: la atención clínica y la salud ocupacional, cada una desarrollada con enfoque especializado.
                                </p>
                                <p className="text-base leading-7 text-dark">
                                    No somos un proveedor de trámites médicos: somos aliados estratégicos en la construcción de entornos laborales seguros, saludables y productivos. Proyectamos consolidarnos como el centro médico ambulatorio líder en salud ocupacional del Ecuador para el año 2030.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {aboutValues.map((value) => (
                                    <Card key={value.title}>
                                        <p className="text-base font-semibold text-primary">{value.title}</p>
                                        {value.description && (
                                            <p className="mt-1 text-sm leading-6 text-dark">{value.description}</p>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="relative rounded-2xl border border-secondary/30 bg-gradient-to-br from-dark to-primary p-6 shadow-xl sm:p-8">
                                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/15 via-accent/10 to-transparent" />
                                <div className="relative space-y-4">
                                    {aboutPillars.map((pillar, index) => (
                                        <div key={pillar.title} className={index > 0 ? 'border-t border-light/20 pt-5' : ''}>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">{pillar.title}</p>
                                                    {pillar.content && (
                                                        <p className="mt-2.5 text-sm leading-7 text-light/90">{pillar.content}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 py-14 sm:py-16 overflow-hidden bg-gradient-to-br from-dark via-dark to-primary">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,163,216,0.20),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(44,165,141,0.16),_transparent_28%)]" />
                <div className="mx-auto max-w-7xl px-4">
                    <div className="relative rounded-[2rem] border border-secondary/25 bg-dark/80 p-6 shadow-2xl shadow-dark/40 backdrop-blur sm:p-10">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <p className="inline-flex w-fit rounded-full border border-secondary/25 bg-light/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                                        Política de Calidad
                                    </p>
                                    <h2 className="text-3xl font-bold leading-tight text-light sm:text-4xl">
                                        Comprometidos con los más altos estándares internacionales
                                    </h2>
                                    <p className="max-w-2xl text-base leading-7 text-light/90 sm:text-lg">
                                        OccuMaster Health se compromete a brindar servicios de salud ocupacional y clínica ambulatoria con los más altos estándares de calidad, seguridad y oportunidad, asegurando la satisfacción de nuestros pacientes, trabajadores y organizaciones clientes.
                                    </p>
                                    <p className="max-w-2xl text-base leading-7 text-light/90 sm:text-lg">
                                        Implementamos un Sistema de Gestión de Calidad que garantiza la mejora continua de nuestros procesos, el cumplimiento de la normativa legal vigente y la prevención de riesgos laborales en nuestras propias operaciones.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-secondary/30 bg-secondary/15 p-5 shadow-lg shadow-dark/20">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Certificación</p>
                                        <p className="mt-3 text-2xl font-bold text-light">ISO 9001:2015</p>
                                        <p className="mt-1 text-sm leading-6 text-light/85">Gestión de calidad enfocada en procesos medibles, trazabilidad y mejora continua.</p>
                                    </div>
                                    <div className="rounded-2xl border border-accent-alt/35 bg-accent-alt/15 p-5 shadow-lg shadow-dark/20">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-alt">Certificación</p>
                                        <p className="mt-3 text-2xl font-bold text-light">ISO 45001:2018</p>
                                        <p className="mt-1 text-sm leading-6 text-light/85">Seguridad y salud laboral con enfoque preventivo y control sistemático de riesgos.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    {
                                        title: 'Enfoque centrado en el cliente',
                                        content: 'La satisfacción del paciente y la organización cliente es el eje central de todas nuestras decisiones médicas y operativas.',
                                    },
                                    {
                                        title: 'Mejora continua',
                                        content: 'Revisamos y optimizamos constantemente nuestros procesos para garantizar atención médica de calidad creciente.',
                                    },
                                    {
                                        title: 'Liderazgo y equipo',
                                        content: 'Nuestros profesionales están en constante actualización, respaldados por protocolos que garantizan resultados confiables.',
                                    },
                                    {
                                        title: 'Cumplimiento normativo',
                                        content: 'Operamos alineados a las normativas ecuatorianas de salud, trabajo y seguridad ocupacional vigentes.',
                                    },
                                    {
                                        title: 'Toma de decisiones basada en evidencia',
                                        content: 'Diagnósticos y protocolos sustentados en criterios clínicos, datos verificables y mejores prácticas médicas.',
                                    },
                                ].map((item) => (
                                    <article
                                        key={item.title}
                                        className="group rounded-2xl border border-light/20 bg-dark/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/45 hover:bg-dark"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-light/10 text-accent ring-1 ring-accent/35">
                                                <CheckCircle className="h-5 w-5" />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-start justify-between gap-3">
                                                    <h3 className="text-base font-semibold text-light">{item.title}</h3>
                                                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-light/55 transition-colors group-hover:text-accent-alt" />
                                                </div>
                                                <p className="mt-2 text-sm leading-6 text-light/75">{item.content}</p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 py-14 sm:py-16">
                <div className="rounded-3xl border border-secondary/20 bg-white p-6 shadow-sm sm:p-10">
                    <div className="mx-auto max-w-3xl space-y-4 text-center">
                        <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                            Testimonios
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                            Lo que dicen nuestros pacientes y clientes
                        </h2>
                        <p className="text-base leading-7 text-dark sm:text-lg">
                            Conozca las experiencias reales de quienes han confiado en OccuMaster Health para su salud y cumplimiento normativo.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, index) => (
                            <article
                                key={index}
                                className="rounded-2xl border border-secondary/20 bg-light/50 p-5 transition-all hover:border-secondary/40 hover:shadow-md"
                            >
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < review.rating
                                                ? 'fill-accent-alt text-accent-alt'
                                                : 'text-secondary/25'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <p className="mt-3 text-sm leading-6 text-dark">
                                    "{review.testimonial}"
                                </p>

                                <div className="mt-4 border-t border-secondary/20 pt-4">
                                    <p className="font-semibold text-primary">{review.name}</p>
                                    <p className="text-xs text-dark/70">{review.title}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}