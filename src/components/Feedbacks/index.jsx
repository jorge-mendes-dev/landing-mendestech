import { useState } from 'react'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Divider } from 'components'

import config from 'config'

import 'swiper/css'
import 'swiper/css/pagination'

const Feedbacks = () => {
  const { reviews } = config
  const { title, feedbacks } = reviews
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="feedbacks">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <h6 className="text-center text-primary text-4xl font-bold tracking-tight sm:text-5xl mb-2">
          {title}
        </h6>
        <Divider />
        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: true
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          modules={[Pagination]}
          slidesPerGroup={1}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {feedbacks.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`
                rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-xl ring-1 ring-gray-200/50 dark:ring-gray-800/50
                duration-500 mx-8 p-6 h-full flex items-center gap-6
                md:flex-row flex-col border border-gray-200/50 dark:border-zinc-800/50
                ${activeIndex !== i && 'scale-75 blur-sm opacity-50'}`}
              >
                <div className="justify-between">
                  <p className="text-base sm:text-lg md:mb-4 mb-2 leading-relaxed text-gray-900 dark:text-gray-100">
                    {content.review}
                  </p>
                  <h6 className="text-base font-semibold text-primary mt-2">
                    {String(content.name)}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Feedbacks
