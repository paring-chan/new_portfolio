import getPhotos from "../utils/getPhotos";
import getPhonesString from "../utils/getPhonesString";

export default function SecondPage() {
    return (
        <div className='sm:pt-32 pt-16 pb-40'>
            <h1 className='sm:text-left text-center sm:pl-96 pr-32 font-bold sm:text-4xl text-2xl'>I'm Illustrator!</h1>
            <div className='flex justify-center pt-10'>
                <div className='grid sm:grid-cols-4 grid-cols-2 gap-4'>
                    {getPhotos.map((x, y) => (
                        <a href={`./illust/${getPhonesString[y]}`} key={y} className='transition duration-500 filter hover:opacity-50' id='illust'>
                            <img src={x} alt='' height={300} width={300} className='rounded-2xl'/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}