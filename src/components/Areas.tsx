import { motion } from 'motion/react';
import { Tractor, Droplets, Home, Wheat, Zap } from 'lucide-react';

const areas = [
  {
    id: 1,
    title: "Máquinas e Mecanização",
    icon: <Tractor className="w-6 h-6" />,
    desc: "Projetos de tratores, colhedoras e implementos. Agricultura de precisão, drones, GPS e automação de frotas.",
    image: import.meta.env.BASE_URL + "maquinas.png",
    color: "from-amber-600 to-amber-700"
  },
  {
    id: 2,
    title: "Engenharia de Água e Solo",
    icon: <Droplets className="w-6 h-6" />,
    desc: "Sistemas de irrigação inteligente, drenagem, gestão de bacias hidrográficas e conservação do solo.",
    image: import.meta.env.BASE_URL + "irrigacao.png",
    color: "from-sky-600 to-sky-700"
  },
  {
    id: 3,
    title: "Construções Rurais e Ambiência",
    icon: <Home className="w-6 h-6" />,
    desc: "Projeto de silos, galpões, estufas e instalações para animais focando em bem-estar e controle térmico.",
    image: import.meta.env.BASE_URL + "construcao-ambiencia.png",
    color: "from-emerald-600 to-emerald-700"
  },
  {
    id: 4,
    title: "Tecnologia Pós-Colheita",
    icon: <Wheat className="w-6 h-6" />,
    desc: "Processamento, secagem e armazenamento de grãos e produtos agrícolas para garantir a qualidade final.",
    image: import.meta.env.BASE_URL + "pos-colheita.png",
    color: "from-amber-500 to-amber-600"
  },
  {
    id: 5,
    title: "Energias Renováveis",
    icon: <Zap className="w-6 h-6" />,
    desc: "Eletrificação rural, painéis solares, biodigestores e biomassa aplicada ao setor agropecuário.",
    image: import.meta.env.BASE_URL + "energia.png",
    color: "from-slate-600 to-slate-700"
  }
];

export default function Areas() {
  return (
    <section className="py-24 bg-white border-b border-slate-200" id="areas">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Áreas de <span className="text-emerald-700">Atuação</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            A Engenharia Agrícola é ampla e versátil. Conheça os principais caminhos que você pode seguir durante e após o curso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl border border-slate-200 min-h-[350px] lg:${index === 3 ? 'col-span-1 lg:col-start-2' : ''} lg:${index === 4 ? 'col-span-1 lg:col-start-3' : ''}`}
              // We'll just let CSS grid auto-place them, but visually 5 items looks good in 3 columns.
              // To center the last two, we can use flex/grid tricks or just standard grid flow.
            >
              <div className="absolute inset-0 z-0">
                <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors" />
              </div>
              
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${area.color} text-white flex items-center justify-center mb-6 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-slate-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {area.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
