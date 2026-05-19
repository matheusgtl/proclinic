import { motion } from 'framer-motion'
import {
  FiCompass,
  FiTarget,
  FiMessageSquare,
  FiRepeat,
  FiBarChart2,
} from 'react-icons/fi'

const pillars = [
  {
    n: '01',
    icon: FiCompass,
    title: 'Posicionamento e diferenciação',
    desc: 'Definimos quem é o seu paciente ideal, o que te diferencia de outros profissionais da mesma área e como comunicar isso com clareza. Sem posicionamento, todo o restante fica mais caro e menos eficiente.',
    grad: 'linear-gradient(135deg,#0a2547,#0563c2)',
  },
  {
    n: '02',
    icon: FiTarget,
    title: 'Captação e tráfego',
    desc: 'Estruturamos os canais de aquisição — orgânico e pago — para atrair o paciente certo, no momento certo, com a mensagem certa. Instagram, Google, indicação estruturada e outros canais conforme o perfil da clínica.',
    grad: 'linear-gradient(135deg,#1f8dff,#0563c2)',
  },
  {
    n: '03',
    icon: FiMessageSquare,
    title: 'Atendimento e conversão com IA',
    desc: 'Implementamos o assistente de agendamento com inteligência artificial integrado ao WhatsApp e ao CRM. O lead nunca fica sem resposta. O agendamento acontece mesmo fora do horário comercial.',
    grad: 'linear-gradient(135deg,#4ea7ff,#1f8dff)',
  },
  {
    n: '04',
    icon: FiRepeat,
    title: 'CRM, follow-up e recorrência',
    desc: 'Cada paciente tem um caminho mapeado no CRM — do primeiro contato à manutenção. O follow-up é automatizado. O retorno é previsível. O LTV aumenta sem esforço manual da equipe.',
    grad: 'linear-gradient(135deg,#43d3b8,#1fb89a)',
  },
  {
    n: '05',
    icon: FiBarChart2,
    title: 'Métricas e receita previsível',
    desc: 'Implementamos os indicadores que importam: custo de aquisição, taxa de conversão, ticket médio, taxa de retorno. Você passa a tomar decisões com base em número, não em intuição.',
    grad: 'linear-gradient(135deg,#6fe7d1,#43d3b8)',
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
            Como funciona, na prática
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            O que a gente faz, na prática.
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            O ProClinic atua em cinco frentes integradas. Cada uma resolve uma
            parte do problema. Juntas, elas constroem a operação comercial
            completa da sua clínica.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className={`glass shine group relative rounded-3xl p-6 ${
                i === pillars.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg"
                  style={{ background: p.grad }}
                >
                  <p.icon size={22} />
                </div>
                <span className="text-3xl font-semibold tracking-tight text-white/15">
                  {p.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
