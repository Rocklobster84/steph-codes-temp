import Image from 'next/image'
import ImageGallery from './ImageGallery'
import { photos } from "@/constants";

const About = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 pb-20">
        <div className="shrink-0 self-end max-w-full h-0 border-white border-solid border-[1px] w-full sm:px" />
        <div className="flex flex-nowrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-5 justify-between max-w-full w-[80px] md:w-[100px]">
              <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
              <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
            </div>
            <div className="flex flex-col self-end w-full max-w-[1325px] max-md:max-w-full">
              <div className="titles self-start text-4xl font-bold text-white md:max-w-full md:text-6xl mt-10 uppercase">
                About
              </div>
              <div className="self-start mt-3 text-2xl text-white md:max-w-full md:text-3xl">
                Passionate coder, lifelong learner, mentor, and problem-solver.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3">
        <div className="w-full md:w-2/3 lg:w-3/4 pl-0 mb-6 md:mb-0 md:pr-14 lg:pr-14 lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:block">
          <Image 
            src="/steph-headshot.jpg"
            width={250}
            height={250}
            alt="Headshot of Stephanie Thompson"
            className="rounded-md object-cover h-auto max-w-[300px] md:w-auto md:max-w-full md:h-[350px] lg:w-[450px] lg:h-[350px] lg:object-top lg:float-end"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3">
        <ImageGallery photos={photos} />
      </div>
    </div>
  )
}

export default About