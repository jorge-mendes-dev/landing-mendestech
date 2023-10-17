import React from 'react'
import PropTypes from 'prop-types'

import { random } from 'utils/generic'
import Projects from 'config/Projects'

import { LazyShow } from 'components'

import * as S from './styled'

const ProjectDetails = ({ data, ...props }) => {
  const { ProjectHeader, disclaimer, ProjectImages, ProjectInfo } = data

  return (
    <S.Wrapper {...props} className="container mx-auto">
      <div className="p-4">
        <LazyShow>
          <h1 className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-secondary-dark dark:text-secondary-light mt-14 sm:mt-20 mb-7">
            {ProjectHeader.title}
          </h1>
          <div className="flex">
            <div className="flex items-center mr-10">
              <S.CustomClock className="text-primary text-xs text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-2 leading-none text-secondary-dark dark:text-secondary-light">
                {ProjectHeader.publishDate}
              </span>
            </div>
            <div className="flex items-center">
              <S.CustomTag className="text-primary text-xs text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-2 leading-none text-secondary-dark dark:text-secondary-light">
                {ProjectHeader.tags}
              </span>
            </div>
          </div>
        </LazyShow>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12 p-4">
        {ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0" key={random()}>
              <LazyShow>
                <img
                  src={Projects[project.img]}
                  className="rounded cursor-pointer shadow sm:shadow-none"
                  alt={project.title}
                  key={random()}
                />
              </LazyShow>
            </div>
          )
        })}
        <small>{disclaimer}</small>
      </div>
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* client details */}
          <LazyShow>
            <div className="mb-7 p-4">
              <p className="font-general-regular text-secondary text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                {ProjectInfo.ClientHeading}
              </p>
              <ul className="leading-loose">
                {ProjectInfo.CompanyInfo.map((info) => {
                  return (
                    <li
                      className="font-general-regular text-ternary-dark dark:text-ternary-light"
                      key={random()}
                    >
                      <span>{info.title}: </span>
                      {info.title === 'Website' ? (
                        <a
                          href={info.details}
                          target="_blank"
                          className={
                            'hover:underline hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer duration-300'
                          }
                          aria-label="Project Website and Phone"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <span aria-label="Project Website and Phone">
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
            <div className="mb-7 p-4">
              <p className="font-general-regular text-secondary text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                {ProjectInfo.ObjectivesHeading}
              </p>
              <p className="font-general-regular text-secondary-dark dark:text-ternary-light">
                {ProjectInfo.ObjectivesDetails}
              </p>
            </div>
          </LazyShow>

          {/*  technologies */}
          <LazyShow>
            <div className="mb-7 p-4">
              <p className="font-general-regular text-secondary text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                {ProjectInfo.Technologies[0].title}
              </p>
              <p className="font-light subpixel-antialiased tracking-light align-baseline leading-relaxed text-secondary-dark dark:text-ternary-light">
                {ProjectInfo.Technologies[0].techs.join(', ')}
              </p>
            </div>
          </LazyShow>
        </div>

        {/* right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0 p-4">
          <LazyShow>
            <p className="font-general-regular text-secondary text-secondary-dark dark:text-secondary-light text-2xl font-bold mb-7">
              {ProjectInfo.Heading}
            </p>
            {ProjectInfo.Details.map((detail) => {
              return (
                <p
                  key={random()}
                  className="font-light subpixel-antialiased tracking-light align-baseline leading-relaxed mb-5 text-ternary-dark dark:text-ternary-light"
                >
                  {detail}
                </p>
              )
            })}
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
