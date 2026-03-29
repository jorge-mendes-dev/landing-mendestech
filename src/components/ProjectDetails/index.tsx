'use client'

import Projects from 'config/Projects'

export interface Project {
  ProjectHeader: {
    title: string
    publishDate: string
    tags: string
    company: string
  }
  ProjectImages: Array<{
    title: string
    img: string
  }>
  disclaimer: string
  ProjectInfo: {
    ClientHeading: string
    CompanyInfo: Array<{
      title: string
      details: string
    }>
    ObjectivesHeading: string
    ObjectivesDetails: string
    Technologies: Array<{
      title: string
      techs: string[]
    }>
    Heading: string
    Details: string[]
  }
}

interface ProjectDetailsProps {
  data: Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ data, ...props }) => {
  const { ProjectHeader, disclaimer, ProjectImages, ProjectInfo } = data

  return (
    <div
      {...props}
      className="container mx-auto bg-surface dark:bg-background-dark dark:bg-zinc-900/90 rounded-2xl sm:no-border shadow-card"
    >
      <div className="p-6">
        <h1 className="my-2 border-l-4 pl-2 border-primary font-sans font-bold text-left text-5xl sm:text-4xl text-title dark:text-title-dark mt-12 sm:mt-20 mb-7">
          {ProjectHeader.title}
        </h1>
        <div className="flex">
          <div className="flex items-center mr-10">
            <span className="font-general-regular text-base text-text-secondary dark:text-text-secondary-dark ml-2 leading-normal">
              {ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-general-regular text-base text-text-secondary dark:text-text-secondary-dark ml-2 leading-normal">
              {ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12 p-6">
        {ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0" key={project.img || project.title}>
              <img
                src={Projects[project.img]}
                className="rounded-xl cursor-pointer shadow sm:shadow-none"
                alt={project.title}
              />
            </div>
          )
        })}
        <small className="font-semibold dark:text-primary">{disclaimer}</small>
      </div>
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* client details */}
          <div className="mb-7 p-6">
            <h4 className="font-semibold text-secondary text-2xl dark:text-secondary-dark mb-2">
              {ProjectInfo.ClientHeading}
            </h4>
            <ul className="leading-loose">
              {ProjectInfo.CompanyInfo.map(
                (info: { title: string; details: string }) => {
                  return (
                    <li
                      className="font-general-regular text-base text-text-secondary dark:text-text-secondary-dark leading-relaxed mb-2"
                      key={info.title}
                    >
                      <span className="font-medium">{info.title}: </span>
                      {info.title === 'Website' ? (
                        <a
                          href={info.details}
                          target="_blank"
                          className={
                            'text-primary hover:underline hover:text-primary-light dark:hover:text-primary-light cursor-pointer duration-300 leading-9'
                          }
                          aria-label="Project Website and Phone"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <span
                          className="leading-9"
                          aria-label="Project Website and Phone"
                        >
                          {info.details}
                        </span>
                      )}
                    </li>
                  )
                }
              )}
            </ul>
          </div>

          {/*  objectives */}
          <div className="mb-7 p-6">
            <h4 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-dark mb-2">
              {ProjectInfo.ObjectivesHeading}
            </h4>
            <p className="font-general-regular text-base leading-relaxed text-text-secondary dark:text-text-secondary-dark">
              {ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/*  technologies */}
          <div className="mb-7 p-6">
            <h4 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-dark mb-2">
              {ProjectInfo.Technologies[0].title}
            </h4>

            <div className="flex flex-wrap gap-2 mt-4">
              {ProjectInfo.Technologies[0].techs.map((tech: string) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 dark:text-primary-light border border-primary/20 dark:border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0 p-6">
          <h4 className="my-2 border-l-4 pl-2 border-primary font-general-regular text-title dark:text-title-dark text-2xl font-bold mb-7">
            {ProjectInfo.Heading}
          </h4>
          {ProjectInfo.Details.map((detail: string, idx: number) => (
            <p
              key={detail + idx}
              className="font-normal text-base leading-relaxed mb-4 text-text-secondary dark:text-text-secondary-dark"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
