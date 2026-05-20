import { about } from '../content/profile'

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-[1fr_1fr] items-center">
        <div>
          <p className="text-cyan-300 text-sm uppercase tracking-[0.4em]">About</p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{about.title}</h2>
          <p className="mt-6 max-w-xl text-slate-300 leading-8">{about.description}</p>
        </div>

        <div className="grid gap-5 rounded-4xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          {about.highlights.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <p className="text-slate-200 leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
