import config from 'config'

const HomeAbout = () => {
  const { about } = config
  const { title, paragraphs, primaryAction } = about

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 rounded-3xl shadow-card-elevated border border-zinc-200/60 dark:border-zinc-800/60 mx-auto max-w-3xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 text-pretty">
            {paragraphs[0]}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={primaryAction.href}
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200"
            >
              {primaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
