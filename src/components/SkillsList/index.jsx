import React from 'react'
import Marquee from 'react-fast-marquee'
import { random } from 'utils/generic'
import { Divider } from 'components'
import Techs from 'config/Techs'

import config from 'config'
import * as S from './styled'

const SkillsList = ({ ...props }) => {
  const { skills } = config
  const { title, data } = skills

  return (
    <S.SkillsWrapper {...props} className="hidden lg:block container mx-auto">
      <h6
        className={`w-full my-2 text-4xl font-bold leading-tight text-center`}
      >
        {title.split(' ').map((word, index) => (
          <span
            key={index}
            className={index % 2 ? 'text-primary' : 'text-border'}
          >
            {word}{' '}
          </span>
        ))}
      </h6>

      <Divider />

      <div className="w-full my-6 md:my-12 -translate-y-[1px]">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {data.map((skill) => (
            <div
              className="w-24 md:w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-xl group relative hover:scale-[1.15] cursor-pointer"
              key={random()}
            >
              <div className="h-full w-full rounded-xl border border-ternary-light bg-white shadow shadow-gray-50 group-hover:shadow-xl group-hover:border-primary transition-all duration-300">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent bg-primary to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      alt={skill.title}
                      src={Techs[skill.img]}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-xl"
                    />
                  </div>
                  <p className="text-primary text-sm sm:text-lg">
                    {skill.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </S.SkillsWrapper>
  )
}

export default SkillsList
