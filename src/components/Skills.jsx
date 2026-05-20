import { skills } from '../content/skills'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-slate-950/90">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.4em]">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Core Technologies</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-7">
            A curated skillset reflecting modern frontend development tools and workflows.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 max-w-4xl mx-auto">
          {skills.map((skill) => {
            const isUrl = typeof skill.icon === 'string'
            return (
              <div
                key={skill.name}
                className="group flex aspect-square items-center justify-center rounded-3xl border border-slate-800/80 bg-slate-900/80 text-slate-100 transition transform hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/50"
                aria-label={skill.name}
                title={skill.name}
              >
                {isUrl ? (
                  <img src={skill.icon} alt={skill.name} className="h-10 w-10 object-contain" />
                ) : (
                  <skill.icon className="text-3xl text-cyan-300 transition duration-300 group-hover:text-cyan-200" />
                )}
                <span className="sr-only">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
