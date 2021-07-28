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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
                src={i.img.src}
                alt={i.title}
                style={{
                    width: '100vmin',
                    height: '100vmin',
                }}
            />
        </div>
    )
}

export default Illustration
