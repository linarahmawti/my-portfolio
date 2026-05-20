import profileImage from '../assets/images/profile.png'
import { hero } from '../content/profile'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 min-h-screen flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.2fr_auto_1fr] items-center">
        <div className="text-center md:text-left">
          <p className="text-cyan-300 text-sm tracking-[0.36em] uppercase">{hero.greeting}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {hero.name}
          </h1>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-11/12 md:w-4/5 h-5/6 rounded-4xl bg-cyan-500/15 blur-3xl" />
          </div>

          <div className="relative w-full max-w-md h-[70vh] md:h-[75vh] overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/10">
            <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent" />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl">
            {hero.role}
          </p>
          <p className="mt-4 text-slate-400 text-base md:text-lg">{hero.subtitle}</p>
          <p className="mt-6 max-w-md text-slate-300 leading-7">{hero.statement}</p>
        </div>
      </div>
    </section>
  )
}
