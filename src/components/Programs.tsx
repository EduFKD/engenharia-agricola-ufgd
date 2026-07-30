import { motion } from 'motion/react';
import { Microscope, Award, GraduationCap, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Iniciação Científica",
    desc: "Participe de pesquisas de ponta, desenvolva novas tecnologias e receba bolsas de estudo enquanto aprende na prática.",
    bg: "bg-sky-100 text-sky-700"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "EJEAGRI - Empresa Júnior",
    desc: "Viva a experiência do mercado de trabalho ainda na graduação. Preste consultorias reais para produtores rurais da região.",
    bg: "bg-emerald-100 text-emerald-700"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Projetos de Extensão",
    desc: "Leve o conhecimento da universidade para a comunidade. Transforme a realidade de pequenos agricultores e ganhe experiência social.",
    bg: "bg-amber-100 text-amber-700"
  }
];

export default function Programs() {
  return (
    <section className="py-24 bg-slate-100" id="programas">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Muito além da <span className="text-emerald-700">Sala de Aula</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A UFGD oferece inúmeras oportunidades para você enriquecer seu currículo e se destacar no mercado antes mesmo de se formar.
            </p>
            <button className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors uppercase tracking-widest text-xs">
              Conheça todos os programas <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="md:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-200 transition-all hover:-translate-y-1 group shadow-sm"
              >
                <div className={`w-10 h-10 rounded-lg ${prog.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  {prog.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{prog.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {prog.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
