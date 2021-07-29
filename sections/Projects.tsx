import React from 'react'
import styles from '../styles/Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as CoreSwiper } from 'swiper/core'
import ProjectSlide from '../components/ProjectSlide'
import FreeAIProfile from '../assets/img/projects/freeai/FreeAI_black.png'

const Projects = () => {
    const [_control, setControl] = React.useState<CoreSwiper>()

    const control = _control!

    return (
        <div className="section">
            <div className={styles.projects}>
                <h1>PROJECTS</h1>
                <Swiper
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}
                    pagination
                    navigation
                >
                    <SwiperSlide>
                        <ProjectSlide
                            title="FreeAI"
                            description="ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㄹㅇㅁㄴㅇㄹㅇㅁㄴㄻㄴㄻㅇ"
                            image={FreeAIProfile.src}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects
