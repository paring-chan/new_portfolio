import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blur = styled.div`
  backdrop-filter: blur(20px) saturate(100%);
  top: 0;
  position: sticky;
`

export default function Navigation() {
    return (
        <Blur>
            <nav className='fixed w-full flex justify-around pt-8 py-10'>
                <a href='./' className='font-bold text-2xl'>
                    STORM
                </a>
                <div />
                <a className='flex justify-center text-2xl font-bold gap-10'>
                    <a />
                    <a href='#illust'>전시관</a>
                    <button className='focus:outline-none'>
                        <FontAwesomeIcon icon={['fas', 'sun']} />
                    </button>
                </a>
            </nav>
        </Blur>
    )
}