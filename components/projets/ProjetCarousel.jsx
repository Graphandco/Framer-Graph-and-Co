import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ProjetCarousel({ images }) {
	return (
		<Carousel
			className="w-full max-w-10/12 mx-auto"
			opts={{
				loop: true,
				align: "start",
			}}
		>
			<CarouselContent>
				{images.map((image, index) => (
					<CarouselItem
						key={index}
						className="xs:basis-1/2 sm:basis-1/2 md:basis-1/3"
					>
						<div className="p-1">
							<div className="flex aspect-[1.4/1] h-full items-center justify-center p-6">
								<Image
									src={image.full}
									alt={`Capture d'écran de ${image.alt}`}
									width={200}
									height={200}
									className="w-full h-full object-cover rounded-xl shadow-md"
									sizes="(max-width: 640px) 100vw, 320px"
								/>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
