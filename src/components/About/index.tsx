import { IntroduceMe } from 'components/index'
import { random } from 'utils/generic'

import git from 'assets/images/git.jpg'
import notebook from 'assets/images/notebook.jpg'
import jorge from 'assets/images/perfil.jpeg'

import { useConfigStore } from 'store/configStore'

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

const About: React.FC<AboutProps> = ({ ...props }) => {
  const { about, company } = useConfigStore()
  const { subtitle, paragraphs, list, video } = about

  return (
    <div className="bg-background dark:bg-background-dark" {...props}>
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-20 lg:grid-cols-2">
          <div>
            <div className="border-b border-border dark:border-primary/20 pb-10">
              <h2 className="text-base font-semibold text-primary dark:text-primary-light uppercase tracking-wide">
                {company.name}
              </h2>
              <p className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-text-primary dark:text-text-primary-dark">
                {subtitle}
              </p>
            </div>

            <dl className="mt-10 space-y-8">
              {paragraphs.map((paragraph: string) => (
                <div key={random()}>
                  <dd className="mt-3 text-base md:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                    {paragraph}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="mt-10 space-y-3 text-base md:text-lg text-text-secondary dark:text-text-secondary-dark">
              {list.map((item: string) => (
                <li key={random()} className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-2xl shadow-md border border-border dark:border-border-dark bg-surface/80 dark:bg-surface-dark/80">
              <img
                src={jorge}
                alt={company.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6 lg:mt-10 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-2xl border border-border dark:border-border-dark bg-surface/80 dark:bg-surface-dark/80">
                <img
                  src={notebook}
                  alt={'notebook'}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={git}
                  alt={'git'}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <IntroduceMe videoId={video.id} title={video.title} />
      </div>
    </div>
  )
}

export default About
