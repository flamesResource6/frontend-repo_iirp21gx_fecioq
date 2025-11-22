import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function StatCard({ label, value, suffix = '' }) {
  return (
    <div className="flex flex-col gap-2 bg-slate-800/60 border border-white/10 rounded-xl p-4">
      <span className="text-xs uppercase text-blue-300/80">{label}</span>
      <div className="text-2xl font-bold">{value}{suffix}</div>
    </div>
  )
}

function SkillBadge({ name, level }) {
  return (
    <div className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10">
      {name} · {level}
    </div>
  )
}

export default function DashboardPreview() {
  const [userId, setUserId] = useState('demo@careerlens.ai')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/dashboard?user_id=${encodeURIComponent(userId)}`)
        const json = await res.json()
        setData(json)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [userId])

  return (
    <section id="dashboard" className="relative py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Dashboard Snapshot</h2>
          <input
            className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user id/email"
          />
        </div>

        {loading ? (
          <div className="text-blue-200">Loading...</div>
        ) : data ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard label="AI Resume Score" value={data.resume_score} suffix="/100" />
            <StatCard label="Job Match" value={data.job_match} suffix="%" />
            <div className="md:col-span-2 bg-slate-800/60 border border-white/10 rounded-xl p-4">
              <div className="text-xs uppercase text-blue-300/80 mb-2">Today's Goals</div>
              {data.today_goals && data.today_goals.length ? (
                <ul className="list-disc list-inside text-blue-100/90 space-y-1">
                  {data.today_goals.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
              ) : (
                <div className="text-blue-300/70">No goals for today</div>
              )}
            </div>

            <div className="md:col-span-2 bg-slate-800/60 border border-white/10 rounded-xl p-4">
              <div className="text-xs uppercase text-blue-300/80 mb-3">Career Path</div>
              <div className="flex gap-3 flex-wrap">
                {data.timeline?.map((t, i) => (
                  <div key={i} className={`px-3 py-2 rounded-lg text-sm border ${t.status === 'done' ? 'bg-emerald-600/20 border-emerald-500/30' : t.status === 'active' ? 'bg-blue-600/20 border-blue-500/30' : 'bg-slate-700/40 border-white/10'}`}>
                    {t.step}. {t.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/60 border border-white/10 rounded-xl p-4">
              <div className="text-xs uppercase text-blue-300/80 mb-2">Top Skills</div>
              <div className="flex gap-2 flex-wrap">
                {data.top_skills?.length ? data.top_skills.map((s, i) => <SkillBadge key={i} name={s.name || s} level={s.level || ''} />) : <span className="text-blue-300/70">Add your skills</span>}
              </div>
            </div>

            <div className="bg-slate-800/60 border border-white/10 rounded-xl p-4">
              <div className="text-xs uppercase text-blue-300/80 mb-2">Growth Areas</div>
              <div className="flex gap-2 flex-wrap">
                {data.growth_areas?.length ? data.growth_areas.map((s, i) => <div key={i} className="px-3 py-1 rounded-full text-xs bg-amber-500/20 border border-amber-500/30">{s}</div>) : <span className="text-blue-300/70">Add your goals</span>}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-red-300">Failed to load dashboard.</div>
        )}
      </div>
    </section>
  )
}
