import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.scss'
import profile from '../assets/img/profile.png'
import ReactFullpage from '@fullpage/react-fullpage'
import { Swiper, SwiperSlide } from 'swiper/react'
import Illustrations from '@assets/illust'
import Illustration from '../components/Illustration'

export default function Home() {
    return (
        <ReactFullpage
            licenseKey="7A6BD9E1-8D334350-80A4BC34-64E1097D"
            render={({ fullpageApi }) => (
                <div>
                    <div className="section">
                        <div className={styles.hero}>
                            <div className={styles.content}>
                                <img
                                    src={profile.src}
                                    width={200}
                                    height={200}
                                    alt="profile"
                                />
                                <h1>STORM</h1>
                                <h2>I&apos;m Illustrator & Developer</h2>
                                <div className={styles.links}>
                                    <a href="tel:01054987416">
                                        <FontAwesomeIcon
                                            icon={['fas', 'phone']}
                                        />
                                    </a>
                                    <a href="mailto:me@stormdev.club">
                                        <FontAwesomeIcon
                                            icon={['fas', 'envelope']}
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://github.com/uniquedevstorm"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={['fab', 'github']}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div style={{ position: 'relative', height: 100 }}>
                                <a
                                    onClick={() =>
                                        fullpageApi.moveSectionDown()
                                    }
                                    style={{ cursor: 'pointer' }}
                                    className={styles.scrollButton}
                                >
                                    <span />
                                    <span />
                                    <span />
                                </a>
                            </div>
                        </div>
                    </div>
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
                                I'm Illustrator!
                            </h1>
                            <Swiper
                                style={{ height: '100%' }}
                                pagination
                                navigation
                            >
                                {Illustrations.map((x, i) => (
                                    <SwiperSlide key={i}>
                                        <Illustration i={x} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )}
        />
    )
}
