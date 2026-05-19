import { motion } from 'framer-motion'

const stats = [
  { value: '+200', label: 'negócios impactados' },
  { value: '10M+', label: 'visualizações mensais nos canais do fundador' },
  { value: '25+', label: 'anos em marketing e operações comerciais' },
  { value: '5', label: 'frentes de implementação integradas' },
]

export default function Stats() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-strong grid grid-cols-2 gap-4 rounded-3xl p-6 md:grid-cols-4 md:p-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p
                className="bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg,#6fe7d1,#4ea7ff,#1f8dff)',
                }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-xs text-white/65 md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
