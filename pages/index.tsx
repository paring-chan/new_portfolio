import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <div>
            <div className='font-extrabold text-center sm:pt-96 pt-72 block'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 text-7xl'>Zero</span>
                <h1 className='text-white text-2xl font-light'>I'm Illustrator & Developer</h1>
            </div>
            <div className='text-center sm:pt-96 pt-56'>
                <FontAwesomeIcon icon={['fas', 'chevron-down']} color='white' className='animate-bounce' />
            </div>
        </div>
    )
}