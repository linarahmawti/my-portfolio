import { services } from '../content/services'

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.4em]">Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">What I Build</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group rounded-4xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/15">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-slate-400 leading-7">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
