import { socials } from '../content/socials'

export default function SocialLinks({ layout = 'row', className = '' }) {
  return (
    <div className={`flex ${layout === 'column' ? 'flex-col gap-4' : 'items-center gap-3 sm:gap-4 flex-wrap'} ${className}`}>
      {socials.map((item) => {
        const isUrl = typeof item.icon === 'string'
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/80 p-2 sm:p-3 transition transform hover:-translate-y-1 hover:scale-105 hover:border-cyan-400"
            aria-label={item.name}
          >
            {isUrl ? (
              item.name === 'LinkedIn' ? (
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#0A66C2] text-[10px] font-semibold text-white">in</span>
              ) : (
                <img src={item.icon} alt={item.name} className="h-5 w-5 object-contain" />
              )
            ) : (
              <item.icon className="h-5 w-5 text-slate-200" />
            )}
            <span className="sr-only">{item.name}</span>
          </a>
        )
      })}
    </div>
  )
}
