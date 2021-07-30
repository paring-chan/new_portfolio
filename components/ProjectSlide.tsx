import React from 'react'
import styles from '../styles/components/ProjectSlide.module.scss'
import Button from './Button'

type ProjectSlideProps = {
    title: string
    description: string
    image: string
    bg?: string
    buttons?: TButton[]
}

type TButton = {
    label: string
    link: string
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({
    bg,
    image,
    title,
    description,
    buttons,
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
                <img
                    style={{ borderRadius: '50%' }}
                    src={image}
                    width={300}
                    alt={title}
                />
                <div>
                    <h1>{title}</h1>
                    <div>{description}</div>
                    {buttons && (
                        <div style={{ marginTop: 5 }}>
                            {buttons.map((x, i) => (
                                <Button
                                    text={x.label}
                                    target="_blank"
                                    href={x.link}
                                    key={i}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide
