import { motion } from 'motion/react';
import { Target, Users, BookOpen } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "O que fazemos?",
      desc: "Aplicamos conhecimentos de engenharia para resolver problemas na agricultura, unindo a mecânica, civil e elétrica ao ambiente rural."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mercado de Trabalho",
      desc: "O agronegócio é o motor do Brasil. Nossos engenheiros são disputados por multinacionais, fazendas de alta tecnologia e centros de pesquisa."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "A Estrutura UFGD",
      desc: "Laboratórios modernos, fazenda experimental e professores doutores com vasta experiência prática e acadêmica no setor agropecuário."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200" id="sobre">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              A Engenharia por trás do <span className="text-emerald-700">Alimento e da Energia</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              O curso de <strong>Engenharia Agrícola da UFGD</strong> forma profissionais completos, 
              capazes de projetar, implantar e administrar sistemas para o desenvolvimento 
              agropecuário com foco em alta produtividade e preservação ambiental.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Se você gosta de tecnologia, máquinas, natureza e quer uma carreira com 
              impacto real na economia global, este é o seu lugar.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl border border-slate-200 flex gap-6 items-start hover:border-emerald-200 transition-colors"
              >
                <div className="bg-emerald-50 p-3 rounded-lg shrink-0 text-emerald-700">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
