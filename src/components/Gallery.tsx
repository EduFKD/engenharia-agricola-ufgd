import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

const media = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Atividades de campo e cultivos',
    cols: 'md:col-span-2 md:row-span-2'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Análises laboratoriais',
    cols: 'md:col-span-1 md:row-span-1'
  },
  {
    type: 'video',
    src: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Using image as video thumbnail
    title: 'Mecanização agrícola',
    cols: 'md:col-span-1 md:row-span-1'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1586771107445-d3af18b6e62a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Sistemas de produção industrial',
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
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-amber-400 transition-colors drop-shadow-md" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
