import { motion } from 'framer-motion'
import { FiClipboard, FiCompass, FiZap, FiBarChart2 } from 'react-icons/fi'

const steps = [
  {
    n: '01',
    icon: FiClipboard,
    title: 'Diagnóstico estratégico',
    desc: 'Mergulhamos no seu negócio: agenda, ticket, funil, concorrência e marca. Tudo gratuito, sem compromisso.',
  },
  {
    n: '02',
    icon: FiCompass,
    title: 'Plano de ação personalizado',
    desc: 'Montamos uma proposta sob medida com canais, metas e investimento — alinhada ao seu momento e objetivo.',
  },
  {
    n: '03',
    icon: FiZap,
    title: 'Execução com nosso time',
    desc: 'Tráfego, conteúdo, CRM, atendimento e branding rodando juntos, com um especialista dedicado à sua clínica.',
  },
  {
    n: '04',
    icon: FiBarChart2,
    title: 'Resultados mensurados',
    desc: 'Relatórios semanais transparentes mostrando leads, conversões e faturamento gerados pelo trabalho.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
            Nosso método
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Do diagnóstico aos resultados, lado a lado
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px lg:block"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 15%, rgba(255,255,255,0.18) 85%, transparent)',
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass relative rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                  style={{
                    background: 'linear-gradient(135deg,#1f8dff,#0563c2)',
                  }}
                >
                  <s.icon size={20} />
                </div>
                <span className="text-3xl font-semibold tracking-tight text-white/15">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
