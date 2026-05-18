import { motion } from 'framer-motion'
import { Button } from 'antd'
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiPieChart,
  FiFileText,
} from 'react-icons/fi'

const includes = [
  'Análise da agenda, do ticket médio e do funil atual',
  'Auditoria das campanhas e canais que já estão rodando',
  'Estudo da concorrência e do posicionamento da marca',
  'Mapeamento das oportunidades de captação, conversão e retorno',
  'Proposta sob medida com canais, metas e investimento',
]

const steps = [
  { icon: FiClipboard, title: 'Reunião de descoberta', detail: '45 min com um especialista' },
  { icon: FiPieChart, title: 'Análise dos seus dados', detail: 'Auditoria técnica em até 5 dias úteis' },
  { icon: FiFileText, title: 'Entrega do diagnóstico', detail: 'Apresentação + plano personalizado' },
]

export default function Pricing() {
  return (
    <section id="diagnostico" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-300">
            Plano sob medida
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Cada clínica é única. Seu plano também.
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            Não vendemos pacotes engessados. Tudo começa por um diagnóstico
            gratuito que define o escopo, o investimento e as metas certas para
            o seu momento.
          </p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass-strong relative flex flex-col rounded-[28px] p-8 md:p-10"
          >
            <span
              className="absolute -top-3 left-8 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white"
              style={{
                background: 'linear-gradient(135deg,#43d3b8,#1f8dff)',
                boxShadow: '0 8px 20px -6px rgba(31,141,255,0.55)',
              }}
            >
              Gratuito · sem compromisso
            </span>

            <p className="text-sm font-medium text-white/85">Diagnóstico ProClinic</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              O ponto de partida para uma clínica que cresce com previsibilidade.
            </h3>
            <p className="mt-4 text-sm text-white/65">
              Em uma única jornada, mostramos onde sua clínica está perdendo
              dinheiro e o caminho mais curto para reverter isso.
            </p>

            <ul className="mt-7 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/85">
                  <span
                    className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full text-[10px] text-white"
                    style={{
                      background: 'linear-gradient(135deg,#43d3b8,#1fb89a)',
                    }}
                  >
                    <FiCheck size={11} />
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <Button
              size="large"
              href="#contact"
              type="primary"
              icon={<FiArrowRight />}
              iconPosition="end"
              className="shine mt-8 self-start"
              style={{
                height: 52,
                paddingInline: 26,
                fontSize: 16,
                fontWeight: 500,
                background: 'linear-gradient(135deg,#1f8dff,#0563c2)',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: '0 16px 40px -12px rgba(31,141,255,0.55)',
              }}
            >
              Peça o Diagnóstico
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="glass flex items-center gap-4 rounded-3xl p-5"
              >
                <div
                  className="grid h-12 w-12 flex-none place-items-center rounded-2xl text-white"
                  style={{ background: 'linear-gradient(135deg,#1f8dff,#0563c2)' }}
                >
                  <s.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-widest text-white/45">
                    Etapa {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="text-base font-semibold text-white">{s.title}</p>
                  <p className="text-xs text-white/60">{s.detail}</p>
                </div>
              </div>
            ))}

            <div className="glass-soft rounded-3xl p-5 text-sm leading-relaxed text-white/70">
              Depois do diagnóstico, você recebe uma proposta personalizada com
              os canais, o investimento mensal e as metas que fazem sentido
              para a sua clínica. <span className="font-medium text-white">
              Sem fidelidade, sem letras miúdas.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
