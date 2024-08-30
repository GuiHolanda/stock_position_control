import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

interface SlideObject {
  imgUrl: string;
  text: string;
  clientName: string;
  clientDescription: string;
}

interface CarouselProps {
  slides: SlideObject[];
}

export default function Carousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="flex overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out pb-8"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex gap-8 w-full h-auto flex-shrink-0">
            <div className="flex flex-col justify-evenly">
              <p className="max-w-lg text-white font-thin">{slide.text}</p>
              <div>
                <p className="font-bold text-xl font-montserrat text-yellow-200">
                  {slide.clientName}
                </p>
                <p className="font-bold font-montserrat text-white">
                  {slide.clientDescription}
                </p>
              </div>
            </div>
            <Image
              src={slide.imgUrl}
              width={450}
              height={300}
              alt="Client image"
            />
          </div>
        ))}
      </div>

      <div className="absolute flex flex-col items-center gap-4 left-0 bottom-0">
        <div className="flex gap-4">
          <button onClick={previousSlide}>
            <ChevronLeftIcon className="w-8 h-8 text-white border rounded-md" />
          </button>
          <button onClick={nextSlide}>
            <ChevronRightIcon className="w-8 h-8 text-white border rounded-md" />
          </button>
        </div>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurrent(i)}
              key={"circle" + i}
              className={`rounded-full w-2 h-2 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
