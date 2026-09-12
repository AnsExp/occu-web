import { Briefcase, Users, CheckCircle, Shield, TrendingUp, Phone } from 'lucide-react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';

const services = [
    {
        title: 'Medicina Ocupacional',
        content: 'Evaluaciones de ingreso, periódicas y de retiro. Fichas médicas ocupacionales y certificación de aptitud laboral para trabajadores de todos los sectores.',
        target: 'Empresas',
        icon: Briefcase,
    },
    {
        title: 'Especialidades Médicas',
        content: 'Cardiología, endocrinología, ginecología, neurología, traumatología, psicología y más de 30 especialidades con seguimiento integral.',
        target: 'Pacientes',
        icon: Users,
    },
    {
        title: 'Laboratorio Clínico',
        content: 'Biometría hemática, química sanguínea, perfil lipídico, glucosa y otros exámenes con resultados precisos y oportunos para decisiones confiables.',
        target: 'Ambos',
        icon: CheckCircle,
    },
    {
        title: 'Diagnóstico Por Imágenes',
        content: 'Ecografías, radiografías y estudios de imagen con protocolos de calidad para respaldar decisiones médicas con mayor certeza.',
        target: 'Ambos',
        icon: Shield,
    },
    {
        title: 'Unidades Móviles',
        content: 'Llevamos servicios de salud a su empresa con brigadas médicas, evaluaciones y fichas ocupacionales sin detener su operación.',
        target: 'Empresas',
        icon: TrendingUp,
    },
    {
        title: 'Atención A Domicilio',
        content: 'Consulta médica y seguimiento en el hogar para pacientes que requieren control continuo sin necesidad de desplazarse al centro médico.',
        target: 'Pacientes',
        icon: Phone,
    }
];

const targetBadgeClass: Record<string, string> = {
    Empresas: 'border-secondary/30 bg-light text-secondary',
    Pacientes: 'border-accent/30 bg-light text-accent',
    Ambos: 'border-primary/30 bg-light text-primary',
};

const targetIconClass: Record<string, string> = {
    Empresas: 'bg-secondary text-white ring-secondary/20',
    Pacientes: 'bg-accent text-white ring-accent/20',
    Ambos: 'bg-primary text-white ring-primary/20',
};

export default function ServicePage() {
    return (
        <Layout>
            <section className="px-4 py-14 sm:py-16">
                <div className="rounded-3xl border border-secondary/20 bg-white p-6 shadow-sm sm:p-10">
                    <div className="max-w-3xl space-y-4">
                        <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                            Nuestros servicios
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                            Todo lo que necesita en un solo lugar.
                        </h2>
                        <p className="text-base leading-7 text-dark sm:text-lg">
                            Servicios médicos ambulatorios diseñados para dar respuesta rápida, confiable y de calidad tanto a pacientes particulares como al sector empresarial.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <Card key={service.title}>
                                    <div className="space-y-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <span className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${targetIconClass[service.target]}`}>
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${targetBadgeClass[service.target]}`}>
                                                {service.target}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-primary">{service.title}</h3>

                                        <p className="leading-7 text-dark">{service.content}</p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
}