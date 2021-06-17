import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainPage() {
    return (
        <>
            <div className='font-light pt-96'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 text-7xl font-bold'>STORM</span>
                <h1 className='py-5 text-2xl font-light'>I'm Illustrator & Developer</h1>
            </div>
            <div className='sm:pt-96 pt-56 pb-28'>
                <FontAwesomeIcon icon={['fas', 'chevron-down']} color='white' className='animate-bounce' />
            </div>
        </>
    )
}