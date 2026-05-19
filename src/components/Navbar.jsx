import { motion } from 'framer-motion'
import { Button } from 'antd'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'

const links = [
  { label: 'Problema', href: '#problema' },
  { label: 'Como funciona', href: '#features' },
  { label: 'Para quem é', href: '#para-quem-e' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="glass flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/proclinic-logo.png"
            alt="ProClinic"
            className="h-9 w-9 rounded-xl object-cover"
            style={{ boxShadow: '0 4px 14px rgba(31, 141, 255, 0.35)' }}
          />
          <span className="text-base font-semibold tracking-tight text-white">
            Pro<span className="text-brand-300">Clinic</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            type="primary"
            size="middle"
            href="#contact"
            style={{
              background:
                'linear-gradient(135deg, #1f8dff 0%, #0563c2 100%)',
              border: '1px solid rgba(255,255,255,0.25)',
              boxShadow: '0 8px 24px -8px rgba(31,141,255,0.6)',
              fontWeight: 500,
            }}
          >
            Quero fazer o diagnóstico
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-xl text-white/85 md:hidden glass-soft"
        >
          <FiMenu size={18} />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute left-4 right-4 top-[68px] rounded-2xl p-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-white/85 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
