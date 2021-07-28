import React from 'react'

const Illustration: React.FC<{
    i: {
        title: string
        description: string
        img: any
        vid: any
    }
}> = ({ i }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            <video
                src={i.vid}
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
        </div>
    )
}

export default Illustration
