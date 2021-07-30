import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Illustration from '../components/Illustration'
import Illustrations from '../assets/illust'

const IllustrationSection = () => {
    return (
        <div className="section">
            <div style={{ position: 'relative', height: '100%' }}>
                <h1
                    style={{
                        position: 'absolute',
                        left: 30,
                        top: 30,
                        zIndex: 99999,
                    }}
                >
                    I&apos;m Illustrator!
                </h1>
                <Swiper
                    style={{ height: '100%' }}
                    pagination
                    navigation
                    onSlideChange={(slide) => {
                        const v = document.querySelector(
                            `video#illustrations_${slide.activeIndex}`,
                        ) as HTMLVideoElement
                        v.currentTime = 0
                        v.play()
                    }}
                >
                    {Illustrations.map((x, i) => (
                        <SwiperSlide key={i}>
                            <Illustration index={i} i={x} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default IllustrationSection
