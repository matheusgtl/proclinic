import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const rows = [
  { antes: 'Agenda imprevisível', depois: 'Agenda previsível e controlada' },
  { antes: 'Depende de indicação passiva', depois: 'Captação ativa estruturada' },
  { antes: 'Lead sem resposta rápida', depois: 'IA responde em segundos, 24h' },
  { antes: 'Sem métrica, sem controle', depois: 'Decisões baseadas em dados' },
  { antes: 'Paciente some, não volta', depois: 'Follow-up automatizado, LTV crescendo' },
  { antes: 'Trabalha muito, ganha pouco', depois: 'Receita previsível. Esforço com retorno.' },
]

export default function Testimonials() {
  return (
    <section id="resultados" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
            Resultados · O que muda para o cliente
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Antes e depois.
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            O que a estrutura comercial muda na prática. Resultados individuais
            variam conforme a fase da clínica, o mercado e o nível de
            implementação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid gap-3 lg:grid-cols-2"
        >
          {rows.map((r, i) => (
            <motion.div
              key={r.antes}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass flex flex-col gap-3 rounded-2xl p-5 md:flex-row md:items-center md:gap-5"
            >
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-widest text-white/40">
                  Antes
                </p>
                <p className="mt-1 text-[15px] text-white/70">{r.antes}</p>
              </div>
              <FiArrowRight className="hidden flex-none text-brand-300 md:block" size={20} />
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-widest text-mint-300">
                  Com o ProClinic
                </p>
                <p className="mt-1 text-[15px] font-medium text-white">
                  {r.depois}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-soft mt-12 rounded-3xl p-6 text-center text-sm leading-relaxed text-white/75 md:p-8"
        >
          <p>
            <span className="font-semibold text-white">Como é a operação na prática:</span>{' '}
            cada cliente ProClinic passa por um diagnóstico de fase antes de
            qualquer implementação. A partir desse diagnóstico, definimos as
            prioridades e o cronograma de execução. O acompanhamento é contínuo
            — reuniões semanais, revisão de métricas e ajuste de rota sempre
            que necessário.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
