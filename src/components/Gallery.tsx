import { motion } from 'motion/react';

const media = [
  {
    type: 'video',
    src: import.meta.env.BASE_URL + "analise.mp4?v=2",
    title: 'Atividades de campo e cultivos',
    cols: 'md:col-span-2 md:row-span-2'
  },
  {
    type: 'video',
    src: import.meta.env.BASE_URL + "visitas.mp4?v=2",
    title: 'Visitas técnicas',
    cols: 'md:col-span-1 md:row-span-1'
  },
  {
    type: 'video',
    src: import.meta.env.BASE_URL + "mecani.mp4?v=2",
    title: 'Mecanização agrícola',
    cols: 'md:col-span-1 md:row-span-1'
  },
  {
    type: 'video',
    src: import.meta.env.BASE_URL + "irrigaca.mp4?v=2",
    title: 'Sistemas de Irrigação',
    cols: 'md:col-span-2 md:row-span-1'
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-950 text-white" id="vivencia">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4 tracking-tight"
          >
            Mão na <span className="text-emerald-500">Massa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            A Engenharia Agrícola une a teoria e a prática. Conheça exemplos de atividades e tecnologias fundamentais para o desenvolvimento no campo e na indústria.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-slate-900 ${item.cols}`}
            >
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
