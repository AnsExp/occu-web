import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import Layout from '@/components/Layout';

const SPECIALTIES = [
    'Cardiología ',
    'Cirugía General',
    'Cirugía Vascular',
    'Dermatología',
    'Endocrinología',
    'Gineco - Obstetra',
    'Gastroenterología',
    'Medicina General',
    'Medicina Interna',
    'Neumología',
    'Neurología',
    'Nefrología',
    'Otorrinolaringología',
    'Oftalmología',
    'Optometría',
    'Psiquiatría',
    'Pediatría',
    'Psicología',
    'Urología',
];

export default function SpecialtiesPage() {
    return (
        <Layout>
            <section className="px-4 py-14 sm:py-16">
                <div className="rounded-3xl border border-secondary/20 bg-white p-6 shadow-sm sm:p-10">
                    <div className="max-w-3xl space-y-4">
                        <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                            Especialidades Médicas
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                            Atención especializada en más de 30 áreas
                        </h2>
                        <p className="text-base leading-7 text-dark sm:text-lg">
                            Contamos con un equipo de profesionales certificados para brindar diagnóstico, tratamiento y seguimiento en las principales especialidades médicas.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-light bg-light/40 p-6">
                        <div className="mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-secondary/20 pb-4">
                            <h3 className="text-xl font-bold text-primary">
                                Especialidades Clínicas
                            </h3>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary ring-1 ring-secondary/20">
                                {SPECIALTIES.length} áreas
                            </span>
                        </div>
                        <ul className="grid lg:grid-cols-4 gap-2 xs:grid-cols-1">
                            {SPECIALTIES.map((specialite) => (
                                <li
                                    key={specialite}
                                    className="flex items-center gap-2 rounded-lg border border-secondary/15 bg-white px-3 py-2 text-sm text-dark"
                                >
                                    <CheckCircle size={16} className="flex-shrink-0 text-accent-alt" />
                                    <span>{specialite}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://wa.me/593000000000"
                            className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <Phone className="mr-2 h-4 w-4" /> Consultar disponibilidad de especialista
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}