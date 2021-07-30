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
                            description="여러 기능을 한봇에, 다기능 챗봇"
                            image={FreeAIProfile.src}
                            buttons={[
                                {
                                    label: '초대하기',
                                    link: 'https://discord.com/oauth2/authorize?client_id=695899835953578025&permissions=8&scope=bot',
                                },
                            ]}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects
