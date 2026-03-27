import { Divider } from 'components'
import Techs from 'config/Techs'
import { memo } from 'react'
import Marquee from 'react-fast-marquee'
import { random } from 'utils/generic'

import config from 'config'
const SkillsList = ({ ...props }) => {
  const { skills } = config
  const { title, data } = skills

  return (
    <div {...props} className="hidden lg:block container mx-auto">
      <h6
        className={`w-full my-4 text-3xl md:text-4xl font-bold leading-tight text-center`}
      >
        {title.split(' ').map((word, index) => (
          <span
            key={index}
            className={
              index % 2 ? 'text-primary' : 'text-gray-900 dark:text-white'
            }
          >
            {word}{' '}
          </span>
        ))}
      </h6>

      <Divider />

      <div className="w-full my-8 md:my-14">
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
              className="w-24 md:w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-400 m-3 sm:m-6 rounded-2xl group relative hover:scale-105 cursor-pointer"
              key={random()}
            >
              <div className="h-full w-full rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="flex justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      alt={skill.title}
                      src={Techs[skill.img]}
                      width={25}
                      height={25}
                      className="h-full w-auto rounded-xl"
                    />
                  </div>
                  <p className="text-primary font-semibold text-sm sm:text-base">
                    {skill.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default memo(SkillsList)
