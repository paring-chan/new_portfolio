import Link from "next/link";

export default function Illust({ img, video, title, description }) {
    return (
        <div className='block px-1 flex items-center flex-col'>
            <video src={video} className='w-screen fixed z-10' autoPlay loop playsInline />
            <Link href="/">
                <a href='/' className='absolute left-8 top-8 z-50'>
                    홈으로
                </a>
            </Link>
            <div className='w-screen h-screen absolute bg-black z-20 opacity-50' style={{ backdropFilter: 'blur(32px)' }}/>
            <div className='flex pt-24 z-50 items-center md:items-start md:flex-row flex-col'>
                <img src={img} alt='' height={300} width={300} />
                <div className='block p-10'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <h1 className='text-2xl font-light'>{description}</h1>
                </div>
            </div>
        </div>
    )
}