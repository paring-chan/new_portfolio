import getPhotos from "../utils/getPhotos";

export default function SecondPage() {
    return (
        <div className='sm:pt-32 pt-16'>
            <h1 className='sm:text-left text-center sm:pl-96 pr-32 font-bold sm:text-4xl text-2xl'>I'm Illustrator!</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 gap-4'>
                    {/*{getPhotos.map((x, y) => (*/}
                    {/*    <img src={x} key={y} alt='' height={300} width={300} className='rounded-2xl' />*/}
                    {/*))}*/}
                    {}
                </div>
            </div>
        </div>
    )
}