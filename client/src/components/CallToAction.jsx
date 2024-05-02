import { Button } from 'flowbite-react';
import { selltemplate } from '../../img';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3   items-center rounded-tl-3xl rounded-br-3xl text-center justify-between md:gap-[100px] light:bg-[#BED7DC]'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to start Your own Blog Website?
            </h2>
            <p className='text-gray-500 my-2'>
               Use this boiler plate and Modify to your needs
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none w-80 mx-auto'>
                <a href={selltemplate} target='_blank' rel='noopener noreferrer'>
                 Start your Blog
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={selltemplate} className='h-[400px] w-[400px]'/>
        </div>
    </div>
  )
}