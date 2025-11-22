function Feature({ title, desc }) {
  return (
    <div className="bg-slate-800/60 border border-white/10 rounded-xl p-5">
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-blue-200/90 text-sm">{desc}</p>
    </div>
  )
}

export default function Features() {
  const items = [
    { title: 'AI Calendar', desc: 'Plan your week with reminders and focused goals.' },
    { title: 'Skill Gap Analysis', desc: 'See what’s missing for your dream role and how to close it.' },
    { title: 'Resume Builder', desc: 'AI scoring with instant suggestions and ATS-friendly tips.' },
    { title: 'AI Interviewer', desc: 'Adaptive mock interviews with real-time feedback.' },
    { title: 'English Helper', desc: 'Practice conversation with pronunciation and grammar guidance.' },
    { title: 'Resources & News', desc: 'Curated resources and fresh headlines to stay updated.' },
  ]

  return (
    <section id="features" className="py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">What you get</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it) => <Feature key={it.title} {...it} />)}
        </div>
      </div>
    </section>
  )
}
