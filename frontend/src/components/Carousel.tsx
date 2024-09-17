import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { CustomText } from "./UI/Texts";

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
    <div className="col-span-12 flex flex-col gap-4 md:gap-8">
      <div className="flex overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-4 md:gap-8 w-full h-auto flex-shrink-0 items-start"
            >
              <Image
                src={slide.imgUrl}
                width={450}
                height={300}
                alt="Client image"
                className="w-auto"
              />
              <div className="flex flex-col gap-4 md:gap-8 md:justify-evenly">
                <div>
                  <CustomText.Title
                    fontSize="xs"
                    maxWidth="md"
                    className="text-sky-500 tracking-widest font-light"
                  >
                    {slide.clientName}
                  </CustomText.Title>
                  <CustomText.Paragraph
                    fontSize="sm"
                    maxWidth="md"
                    className="text-white"
                  >
                    {slide.clientDescription}
                  </CustomText.Paragraph>
                </div>
                <CustomText.Paragraph
                  fontSize="sm"
                  maxWidth="lg"
                  className="text-white"
                >
                  {slide.text}
                </CustomText.Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 md:gap-4 w-fit">
        <div className="flex gap-2 md:gap-4">
          <button onClick={previousSlide}>
            <ChevronLeftIcon className="size-4 md:size-8 text-white border rounded-sm md:rounded-md" />
          </button>
          <button onClick={nextSlide}>
            <ChevronRightIcon className="size-4 md:size-8 text-white border rounded-sm md:rounded-md" />
          </button>
        </div>
        <div className="flex gap-2 md:gap-3">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurrent(i)}
              key={"circle" + i}
              className={`rounded-full size-1 md:size-2 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
