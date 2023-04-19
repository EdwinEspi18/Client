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
    <div className='w-full h-96 m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      <div
        onClick={prevSlide}
        className='hidden group-hover:block absolute top-[50%] left-5 -translate-x-0 -translate-y-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '
      >
        <ChevronLeftIcon width={30} />
      </div>
      <div
        onClick={nextSlide}
        className='hidden group-hover:block absolute top-[50%] right-5 -translate-x-0 -translate-y-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '
      >
        <ChevronRightIcon width={30} />
      </div>
    </div>
  );
};
