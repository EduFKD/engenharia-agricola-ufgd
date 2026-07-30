import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Banknote, MapPin } from 'lucide-react';

export default function FreeUniversity() {
  return (
    <section className="py-24 bg-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-sm font-semibold tracking-wide uppercase mb-6"> <Banknote className="w-4 h-4" /> Ensino Público e de Qualidade 
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Sua Formação 100% <span className="text-emerald-400">Gratuita</span>
            </h2>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              A Universidade Federal da Grande Dourados (UFGD) é uma instituição pública federal. Isso significa que você terá acesso a um ensino superior de excelência, com infraestrutura completa e professores qualificados, sem pagar nenhuma mensalidade.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300"> <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Ensino de Excelência</h3>
                  <p className="text-emerald-200/80 leading-relaxed">
                    Corpo docente formado majoritariamente por mestres e doutores, com foco no desenvolvimento acadêmico e profissional.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300"> <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Bolsas e Auxílios</h3>
                  <p className="text-emerald-200/80 leading-relaxed">
                    Acesso a diversos programas de assistência estudantil, como auxílio-alimentação, moradia e bolsas de iniciação científica e extensão.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300"> <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Localização Privilegiada</h3>
                  <p className="text-emerald-200/80 leading-relaxed">
                    Dourados é o segundo maior polo de Mato Grosso do Sul, com forte presença do agronegócio e vastas oportunidades de atuação.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-700/50">
              <div className="inset-0 flex items-center justify-center p-8 bg-emerald-800/50 min-h-[300px]">
                <div className="backdrop-blur-md bg-emerald-900/60 p-6 rounded-2xl border border-emerald-500/30 w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-emerald-300 text-sm font-semibold uppercase tracking-wider mb-1">Mensalidade</div>
                      <div className="text-3xl font-black text-white">R$ 0,00</div>
                    </div>
                    <a href="#vestibular" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-6 py-3 rounded-full transition-colors">
                      Como ingressar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
