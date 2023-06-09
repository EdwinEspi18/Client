// @ts-nocheck
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useStore } from "@/store/store";

export const SliderImages = () => {
  const images = useStore((state) => state.store?.images);
  const color = useStore((state) => state.color);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = currentIndex === images?.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='w-full h-full relative shadow-lg'>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]?.image_url})` }}
        className='w-full h-48 rounded-tl-2xl rounded-tr-2xl bg-center bg-cover duration-500 '
      ></div>

      <div
        className={`w-full h-12 rounded-bl-2xl rounded-br-2xl shadow-lg flex justify-between items-center mx-auto`}
        style={{
          backgroundColor: color,
        }}
      >
        <div
          onClick={prevSlide}
          className='text-2xl rounded-bl-2xl p-2 bg-black/20 text-white cursor-pointer '
        >
          <ChevronLeftIcon width={30} />
        </div>
        <div className='w-4/12 flex justify-evenly'>
          {images &&
            images.map((image, index) => {
              return (
                <div
                  onClick={() => setCurrentIndex(index)}
                  key={index}
                  style={{ backgroundImage: `url(${image.image_url})` }}
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
