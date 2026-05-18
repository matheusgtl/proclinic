import { motion } from 'framer-motion'
import { Avatar } from 'antd'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const items = [
  {
    name: 'Dra. Helena Cardoso',
    role: 'Clínica CorVivo · Cardiologia',
    quote:
      'Em 90 dias triplicamos o número de consultas particulares. A ProClinic entendeu o nosso público melhor do que a gente — e o time é craque em tráfego.',
    initials: 'HC',
  },
  {
    name: 'Dr. Rafael Mendes',
    role: 'Instituto Vita · Multiespecialidades',
    quote:
      'Já tínhamos tentado três agências antes. A ProClinic foi a primeira a olhar agenda, atendimento e marketing juntos — o faturamento subiu 62% no semestre.',
    initials: 'RM',
  },
  {
    name: 'Juliana Tavares',
    role: 'Rede Pediatra Mais · 9 unidades',
    quote:
      'O diagnóstico inicial sozinho já valeu o investimento. Em quatro meses padronizamos a captação nas 9 unidades e reduzimos o CPL em 58%.',
    initials: 'JT',
  },
]

export default function Testimonials() {
  return (
    <section id="cases" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
            Cases de quem confiou
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Clínicas que faturaram mais com a ProClinic
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass relative rounded-3xl p-7"
            >
              <FaQuoteLeft className="text-2xl text-brand-300/70" />
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar
                  size={42}
                  style={{
                    background:
                      'linear-gradient(135deg,#1f8dff,#0563c2)',
                    fontWeight: 600,
                  }}
                >
                  {t.initials}
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/55">{t.role}</p>
                </div>
                <div className="flex gap-0.5 text-amber-300">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <FaStar key={k} size={12} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
