import config from 'config/index.json'

const HomeAbout: React.FC = () => {
  const { about } = config
  const { title, paragraphs, primaryAction } = about

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-surface dark:bg-surface-dark rounded-3xl shadow-lg border border-border dark:border-border-dark mx-auto max-w-3xl transition-colors duration-500">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary dark:text-text-primary-dark mb-4 text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark text-pretty">
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
