import React from 'react'
import styles from '../styles/Home.module.scss'
import ReactFullpage from '@fullpage/react-fullpage'
import Hero from '../sections/Hero'
import Illustrations from '../sections/Illustrations'
import Footer from '../sections/Footer'
import Projects from '../sections/Projects'

export default function Home() {
    return (
        <ReactFullpage
            licenseKey="7A6BD9E1-8D334350-80A4BC34-64E1097D"
            anchors={['intro', 'illustrations', 'projects', 'footer']}
            render={({ fullpageApi }) => (
                <div>
                    <Hero fullPageAPI={fullpageApi} />
                    <Illustrations />
                    <Projects />
                    <Footer />
                </div>
            )}
        />
    )
}
