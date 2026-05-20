import { projects } from '../content/projects'

export default function Portfolio() {
  return (
    <section id="projects" className="px-6 py-24 bg-slate-950/90">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.4em]">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Selected Work</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-7">
            Contemporary project cards with polished visuals, subtle depth, and clean brand presentation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-4xl border border-slate-800/70 bg-slate-900/80 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-400 leading-7">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800/80 bg-slate-950/90 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
