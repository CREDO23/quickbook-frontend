import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import { CarouselProps } from "../types/carousels";

export default function carousel({ images }: CarouselProps): JSX.Element {
    return (
        <div className="h-[25rem] w-72">
            <Carousel autoplay>
                {images &&
                    images?.map((image, key) => (
                        <div
                            className="flex h-[25rem] w-72 border items-center justify-center"
                            key={key}
                        >
                            <Image
                                className="w-full h-full"
                                alt=""
                                height={250}
                                width={200}
                                src={image}
                            />
                        </div>
                    ))}
            </Carousel>
        </div>
    );
}
