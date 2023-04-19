import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const SliderImages = () => {
  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1681814308040-9fa0a315fe81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1668488197094-cc4298d247cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1558888433-b00e83783a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <div className='w-full h-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-tl-2xl rounded-tr-2xl bg-center bg-cover duration-500'
      ></div>

      <div className='w-full h-12  rounded-bl-2xl rounded-br-2xl flex justify-between items-center mx-auto bg-sky-400'>
        <div
          onClick={prevSlide}
          className='text-2xl rounded-bl-2xl p-2 bg-black/20 text-white cursor-pointer '
        >
          <ChevronLeftIcon width={30} />
        </div>
        <div className='w-4/12 flex justify-evenly'>
          {slides.map((image, index) => {
            return (
              <div
                onClick={() => setCurrentIndex(index)}
                key={index}
                style={{ backgroundImage: `url(${image.url})` }}
                className='w-10 h-10 bg-cover cursor-pointer'
              ></div>
            );
          })}
        </div>
        <div
          onClick={nextSlide}
          className='text-2xl rounded-br-2xl p-2 bg-black/20 text-white cursor-pointer '
        >
          <ChevronRightIcon width={30} />
        </div>
      </div>
    </div>
  );
};
