import SocialLinks from './SocialLinks'

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl rounded-4xl border border-slate-800/70 bg-slate-900/80 p-6 sm:p-8 md:p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <div className="grid gap-8 md:gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-cyan-300 text-sm uppercase tracking-[0.4em]">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Let’s Connect</h2>
            <p className="mt-6 text-slate-400 leading-7">
              If you have a project idea or need an elevated web presence, reach out via email or social media. I’m ready to collaborate on premium digital experiences.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-slate-950/90 border border-slate-800 p-6 sm:p-8 shadow-xl shadow-slate-950/20 w-full">
            <p className="text-slate-300 text-sm uppercase tracking-[0.32em]">Quick Contact</p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-slate-900/95 p-5 text-slate-200">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Email</p>
                <a href="mailto:hello@yourdomain.com" className="mt-2 block text-base font-medium text-slate-100 hover:text-cyan-300">
                  topsmart0@gmail.com
                </a>
              </div>
              <div className="rounded-3xl bg-slate-900/95 p-5 text-slate-200">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/linarahmati"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-base font-medium text-slate-100 hover:text-cyan-300"
                >
                  linkedin.com/in/linarahmati
                </a>
              </div>
            </div>
            <div className="mt-8">
              <SocialLinks className="md:justify-start xl:justify-start justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
