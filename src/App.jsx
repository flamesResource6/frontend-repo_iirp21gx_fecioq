import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <DashboardPreview />
      <Features />
      <footer className="py-8 text-center text-blue-300/70 bg-slate-950">
        Built with love for learners and professionals • CareerLens
      </footer>
    </div>
  )
}

export default App