import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MainPage() {
    return (
        <>
            <div className='font-light pt-96'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 text-7xl font-bold'>STORM</span>
                <h1 className='py-5 text-2xl font-light'>I'm Illustrator & Developer</h1>
                <div className='flex justify-center gap-5'>
                    <Link href='tel:01054987416'>
                        <a href='tel:01054987416'>
                            <FontAwesomeIcon icon={['fas', 'phone']} />
                        </a>
                    </Link>
                    <Link href='mailto:storm@stormdev.club'>
                        <a href='mailto:storm@stormdev.club'>
                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </a>
                    </Link>
                </div>
            </div>
            <div className='sm:pt-96 pt-56 pb-28'>
                <FontAwesomeIcon icon={['fas', 'chevron-down']} color='white' className='animate-bounce' />
            </div>
        </>
    )
}