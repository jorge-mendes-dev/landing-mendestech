import PropTypes from 'prop-types'
import React from 'react'

import Projects from 'config/Projects'
import { random } from 'utils/generic'

import { LazyShow, PlayerAnimation } from 'components'

import alien from 'utils/JSON/alien.json'

import * as S from './styled'

const ProjectDetails = ({ data, ...props }) => {
  const { ProjectHeader, disclaimer, ProjectImages, ProjectInfo } = data

  return (
    <S.Wrapper
      {...props}
      className="container mx-auto bg-zinc-50 dark:bg-zinc-900 rounded-xl sm:no-border shadow"
    >
      <div className="p-6">
        <LazyShow>
          <h1 className="my-2 border-l-4 pl-2 border-primary font-sans font-bold text-left text-5xl sm:text-4xl text-secondary-dark dark:text-white mt-12 sm:mt-20 mb-7">
            {ProjectHeader.title}
          </h1>
          <div className="flex">
            <div className="flex items-center mr-10">
              <S.CustomClock className="text-primary text-xs text-ternary-dark dark:text-primary" />
              <span className="font-general-regular text-gray-500 ml-2 leading-none text-secondary-dark dark:text-gray-200">
                {ProjectHeader.publishDate}
              </span>
            </div>
            <div className="flex items-center">
              <S.CustomTag className="text-primary text-xs text-ternary-dark dark:text-primary" />
              <span className="font-general-regular text-gray-500 ml-2 leading-none text-secondary-dark dark:text-gray-200">
                {ProjectHeader.tags}
              </span>
            </div>
          </div>
        </LazyShow>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12 p-6">
        {ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0" key={random()}>
              <LazyShow>
                <img
                  src={Projects[project.img]}
                  className="rounded-xl cursor-pointer shadow sm:shadow-none"
                  alt={project.title}
                  key={random()}
                />
              </LazyShow>
            </div>
          )
        })}
        <small className="font-semibold dark:text-primary">{disclaimer}</small>
      </div>
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* client details */}
          <LazyShow>
            <div className="mb-7 p-6">
              <h4 className="font-semibold text-secondary text-2xl dark:text-white mb-2">
                {ProjectInfo.ClientHeading}
              </h4>
              <ul className="leading-loose">
                {ProjectInfo.CompanyInfo.map((info) => {
                  return (
                    <li
                      className="font-general-regular text-ternary-dark dark:text-gray-200"
                      key={random()}
                    >
                      <span className="font-medium">{info.title}: </span>
                      {info.title === 'Website' ? (
                        <a
                          href={info.details}
                          target="_blank"
                          className={
                            'text-primary hover:underline hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer duration-300 leading-9'
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
                })}
              </ul>
            </div>
          </LazyShow>

          {/*  objectives */}
          <LazyShow>
            <div className="mb-7 p-6">
              <h4 className="text-secondary text-2xl font-semibold text-ternary-dark dark:text-white mb-2">
                {ProjectInfo.ObjectivesHeading}
              </h4>
              <p className="font-general-regular leading-9 text-secondary-dark dark:text-gray-200">
                {ProjectInfo.ObjectivesDetails}
              </p>
            </div>
          </LazyShow>

          {/*  technologies */}
          <LazyShow>
            <div className="mb-7 p-6">
              <h4 className="font-general-regular text-secondary text-2xl font-semibold text-ternary-dark dark:text-white mb-2">
                {ProjectInfo.Technologies[0].title}
              </h4>

              {ProjectInfo.Technologies[0].techs.map((tech) => (
                <div className="inline-block p-1" key={random()}>
                  <span className="rounded-full py-1 px-2.5 mr-2 border-none text-sm font-semibold text-indigo-900 bg-indigo-200 dark:bg-indigo-900 dark:text-white">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </LazyShow>
          <LazyShow>
            <PlayerAnimation animation={alien} size={'15vw'} />
          </LazyShow>
        </div>

        {/* right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0 p-6">
          <LazyShow>
            <h4 className="my-2 border-l-4 pl-2 border-primary font-general-regular dark:text-white text-2xl font-bold mb-7">
              {ProjectInfo.Heading}
            </h4>
            {ProjectInfo.Details.map((detail) => (
              <p
                key={random()}
                className="font-light subpixel-antialiased tracking-light align-baseline leading-9 mb-2.5 text-gray-500 dark:text-gray-200"
              >
                {detail}
              </p>
            ))}
          </LazyShow>
        </div>
      </div>
    </S.Wrapper>
  )
}

ProjectDetails.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProjectDetails
