import { motion } from 'framer-motion'
import {
  FiTarget,
  FiTrendingUp,
  FiRepeat,
  FiCamera,
  FiSearch,
  FiAward,
} from 'react-icons/fi'

const features = [
  {
    icon: FiTarget,
    title: 'Captação de pacientes',
    desc: 'Tráfego pago em Meta e Google com criativos validados por especialidade — leads qualificados chegando na sua agenda todos os dias.',
    grad: 'linear-gradient(135deg,#1f8dff,#0563c2)',
  },
  {
    icon: FiTrendingUp,
    title: 'Conversão de leads',
    desc: 'Funil completo, script de atendimento, automações de WhatsApp e CRM para transformar contato em consulta marcada.',
    grad: 'linear-gradient(135deg,#43d3b8,#1fb89a)',
  },
  {
    icon: FiRepeat,
    title: 'Retorno de pacientes',
    desc: 'Réguas de relacionamento, campanhas de reativação e fidelização para fazer o paciente voltar — e indicar.',
    grad: 'linear-gradient(135deg,#4ea7ff,#1f8dff)',
  },
  {
    icon: FiCamera,
    title: 'Conteúdo e redes sociais',
    desc: 'Produção mensal de fotos, vídeos e roteiros que posicionam a clínica como autoridade na especialidade.',
    grad: 'linear-gradient(135deg,#6fe7d1,#43d3b8)',
  },
  {
    icon: FiSearch,
    title: 'SEO e presença local',
    desc: 'Site otimizado, Google Meu Negócio e reputação online — para você aparecer quando o paciente procura.',
    grad: 'linear-gradient(135deg,#0a4e94,#1f8dff)',
  },
  {
    icon: FiAward,
    title: 'Branding e posicionamento',
    desc: 'Identidade visual, tom de voz e narrativa de marca que diferenciam sua clínica em um mercado lotado.',
    grad: 'linear-gradient(135deg,#0a2547,#0563c2)',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
            Soluções sob medida
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Um sistema completo para sua clínica crescer
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            Não trabalhamos com receita pronta. Combinamos os pilares abaixo de
            acordo com o momento e o objetivo da sua clínica.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass shine group relative rounded-3xl p-6"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg"
                style={{ background: f.grad }}
              >
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
