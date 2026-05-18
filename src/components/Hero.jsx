import { motion } from 'framer-motion'
import { Button } from 'antd'
import {
  FiArrowRight,
  FiShield,
  FiPlayCircle,
  FiTarget,
  FiTrendingUp,
  FiRepeat,
} from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-white/85">
              <FiShield className="text-mint-400" />
              Agência especialista em clínicas · Diagnóstico gratuito
            </span>

            <h1 className="mt-5 text-[44px] font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
              Sua clínica quer faturar mais e o marketing{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, #6fe7d1 0%, #4ea7ff 60%, #1f8dff 100%)',
                }}
              >
                ainda não funcionou?
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              A ProClinic implanta um sistema completo de{' '}
              <span className="font-medium text-white">captação, conversão e
              retorno de pacientes</span> — pensado exclusivamente para clínicas
              que querem crescer com previsibilidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                type="primary"
                size="large"
                href="#contact"
                icon={<FiArrowRight />}
                iconPosition="end"
                className="shine"
                style={{
                  height: 52,
                  paddingInline: 26,
                  fontSize: 16,
                  fontWeight: 500,
                  background:
                    'linear-gradient(135deg, #1f8dff 0%, #0563c2 100%)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 16px 40px -12px rgba(31,141,255,0.55)',
                }}
              >
                Peça o Diagnóstico
              </Button>
              <Button
                size="large"
                href="#cases"
                icon={<FiPlayCircle />}
                style={{
                  height: 52,
                  paddingInline: 22,
                  fontSize: 16,
                  fontWeight: 500,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#eaf2ff',
                  backdropFilter: 'blur(14px)',
                }}
              >
                Ver casos de sucesso
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/55">
              <span>+ de 180 clínicas atendidas</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 md:inline-block" />
              <span>ROI médio de 6x em 90 dias</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 md:inline-block" />
              <span>Diagnóstico estratégico gratuito</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="glass-strong rounded-[28px] p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-white/45">
                  painel.proclinic
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <MiniCard icon={<FiTarget />} label="Leads no mês" value="328" trend="+47%" />
                <MiniCard icon={<FiTrendingUp />} label="Conversão" value="34%" trend="+12pp" />
                <MiniCard icon={<FiRepeat />} label="Retorno" value="71%" trend="+9%" />
              </div>

              <div className="glass mt-4 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Campanhas ativas</p>
                  <span className="text-xs text-white/50">últimos 30 dias</span>
                </div>
                <div className="mt-3 space-y-2">
                  {campaigns.map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2"
                    >
                      <div
                        className="h-8 w-1 rounded-full"
                        style={{ background: c.color }}
                      />
                      <div className="flex-1">
                        <p className="text-sm text-white">{c.name}</p>
                        <p className="text-[11px] text-white/55">{c.detail}</p>
                      </div>
                      <span className="text-xs font-medium text-white/75">{c.metric}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-strong absolute -bottom-6 -left-6 hidden rounded-2xl px-4 py-3 md:flex md:items-center md:gap-3"
            >
              <div
                className="grid h-9 w-9 place-items-center rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg,#43d3b8,#1fb89a)' }}
              >
                <FiTrendingUp />
              </div>
              <div>
                <p className="text-xs text-white/60">Faturamento</p>
                <p className="text-sm font-medium text-white">+R$ 184 mil</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-strong absolute -right-6 -top-6 hidden rounded-2xl px-4 py-3 md:flex md:items-center md:gap-3"
            >
              <div
                className="grid h-9 w-9 place-items-center rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg,#1f8dff,#0563c2)' }}
              >
                <FiTarget />
              </div>
              <div>
                <p className="text-xs text-white/60">Custo por lead</p>
                <p className="text-sm font-medium text-white">−58% este mês</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MiniCard({ icon, label, value, trend }) {
  return (
    <div className="glass rounded-2xl p-3">
      <div className="flex items-center justify-between text-white/70">
        <span className="text-base">{icon}</span>
        <span className="text-[10px] uppercase tracking-wider text-mint-300">
          {trend}
        </span>
      </div>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
      <p className="text-[11px] text-white/55">{label}</p>
    </div>
  )
}

const campaigns = [
  { name: 'Meta Ads · Implantes', detail: 'CPL R$ 18,40', metric: '142 leads', color: '#1f8dff' },
  { name: 'Google Ads · Cardiologia', detail: 'CPL R$ 22,10', metric: '98 leads', color: '#43d3b8' },
  { name: 'Remarketing · Retorno', detail: 'CTR 7,8%', metric: '88 agend.', color: '#6fe7d1' },
]
