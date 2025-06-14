"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const carouselImages = [
  "/img/why-choose-us1.png",
  "/img/why-choose-us2.jpg",
  "/img/why-choose-us3.jpg",
];

export default function WhyWilnorSection() {
  return (
    <section className="w-full px-4 py-16 max-w-5xl mx-auto">
      {/* Informational Block */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">
          More Than Just a Maid Agency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 className="font-semibold text-teal-700 mb-1">Regain Your Time</h3>
            <p className="text-gray-700 text-sm">
              Let us handle the household stress while you focus on what matters — your career, your kids, your peace of mind.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-teal-700 mb-1">More Than a Helper</h3>
            <p className="text-gray-700 text-sm">
              We match you with someone who feels like part of the family — trained, trusted, and culturally aligned.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Block */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-700 mb-6">Why People Choose Us</h3>
        <div className="relative w-full max-w-lg mx-auto">
        <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
            {carouselImages.map((src, i) => (
                <CarouselItem key={i} className="flex justify-center">
                <Dialog>
                    <DialogTrigger>
                    <Image
                        src={src}
                        alt={`Why Choose Us Slide ${i + 1}`}
                        width={320}
                        height={320}
                        className="rounded-lg shadow cursor-pointer"
                    />
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <Image
                        src={src}
                        alt={`Slide ${i + 1}`}
                        width={960}
                        height={640}
                        className="w-full h-auto object-contain"
                    />
                    </DialogContent>
                </Dialog>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-full" />
            <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-full" />
        </Carousel>
        </div>



      </div>
    </section>
  );
}
