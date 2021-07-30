import React from 'react'

const Illustration: React.FC<{
    i: {
        title: string
        description: string
        img: any
        vid: any
    }
    index: number
}> = ({ i, index }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <video
                src={i.vid}
                id={`illustrations_${index}`}
                autoPlay
                loop
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 99,
                }}
            />
            <div
                style={{
                    zIndex: 100,
                    background: '#000',
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh',
                    opacity: 0.3,
                }}
            />
            <img
                src={i.img.src}
                alt={i.title}
                style={{
                    width: '100vmin',
                    height: '100vmin',
                    zIndex: 101,
                }}
            />
            <div
                style={{
                    zIndex: 102,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100vw',
                    padding: 30,
                    background: 'rgba(0,0,0,0.5)',
                }}
            >
                <h1>{i.title}</h1>
                <div>{i.description}</div>
            </div>
        </div>
    )
}

export default Illustration
