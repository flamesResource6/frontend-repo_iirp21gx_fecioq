import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background 3D animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
          AI Career Copilot
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
          CareerLens
        </h1>
        <p className="mt-4 max-w-2xl text-blue-200/90">
          Your unified hub for planning careers, optimizing resumes, closing skill gaps, practice interviews, and matching jobs & colleges.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#dashboard" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">Open Dashboard</a>
          <a href="#features" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-colors">Explore Features</a>
        </div>
      </div>
    </section>
  )
}

export default Hero