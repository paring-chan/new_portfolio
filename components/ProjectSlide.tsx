import React from 'react'
import styles from '../styles/components/ProjectSlide.module.scss'

type ProjectSlideProps = {
    title: string
    description: string
    image: string
    bg?: string
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({
    bg,
    image,
    title,
    description,
}) => {
    return (
        <div
            className={styles.container}
            style={
                bg
                    ? {
                          background: `url(${bg})`,
                      }
                    : {}
            }
        >
            <div
                style={{
                    backgroundColor: '#000',
                    opacity: 0.5,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}
            />
            <div className={styles.content} style={{ zIndex: 1000 }}>
                <img src={image} width={300} alt={title} />
                <div>
                    <h1>{title}</h1>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide
