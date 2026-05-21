import { motion } from 'framer-motion'
import { Button } from 'antd'
import { FiArrowRight, FiCheck, FiSlash } from 'react-icons/fi'

const included = [
  'Diagnóstico comercial completo da clínica ou consultório',
  'Definição de posicionamento e paciente ideal',
  'Plano de captação (orgânico + pago, conforme o perfil)',
  'Produção de conteúdo para redes sociais (calendário e execução)',
  'Implementação do assistente de agendamento com IA (WhatsApp)',
  'Configuração e operação do CRM',
  'Fluxos de follow-up e reativação automatizados',
  'Definição e acompanhamento de métricas-chave',
  'Reuniões semanais de acompanhamento e revisão',
  'Treinamento da equipe de recepção e atendimento',
]

const notDo = [
  'Não entregamos relatórios para você implementar sozinho',
  'Não gerenciamos só redes sociais',
  'Não fazemos tráfego pago avulso',
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
            O que está incluso
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            O que a estrutura ProClinic entrega.
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            Implementação, não consultoria. Trabalhamos com você, dentro da sua
            operação, e não entregamos um plano para você executar sozinho.
          </p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
              ProClinic Predict · operação completa
            </span>

            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              As 5 frentes do ProClinic Predict, implementadas ao lado da sua
              equipe.
            </h3>
            <p className="mt-4 text-sm text-white/65">
              Posicionamento, captação, atendimento com IA, CRM e métricas,
              juntos. Funciona integrado ou não funciona.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/85">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="glass flex flex-col rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-mint-300">
                Como é a operação
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                Cada cliente passa por um diagnóstico de fase antes de qualquer
                implementação. A partir dele, definimos prioridades e
                cronograma. O acompanhamento é contínuo: reuniões semanais,
                revisão de métricas e ajuste de rota sempre que necessário.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/45">
                O que não fazemos
              </p>
              <ul className="mt-4 space-y-3">
                {notDo.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm text-white/65">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-white/10 text-[10px] text-white/70">
                      <FiSlash size={11} />
                    </span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="large"
              href="#contact"
              type="primary"
              icon={<FiArrowRight />}
              iconPosition="end"
              className="shine self-start"
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
              Quero fazer o diagnóstico
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
