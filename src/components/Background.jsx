export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 10% -10%, #0a2547 0%, transparent 60%), radial-gradient(1000px 700px at 110% 10%, #0a4e94 0%, transparent 55%), linear-gradient(180deg, #04122a 0%, #061a36 100%)',
        }}
      />
      <div className="blob-a absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #1f8dff 0%, transparent 65%)' }}
      />
      <div className="blob-b absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, #43d3b8 0%, transparent 65%)' }}
      />
      <div className="blob-a absolute bottom-[-200px] left-1/3 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #4ea7ff 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
