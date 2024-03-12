"use client"

import {
	Carousel,
	CarouselPrevious,
	CarouselNext,
	type CarouselApi,
} from "../ui/carousel"
import { useEffect, useState } from "react"
import CarrouselList from "./carrousel/carrousel-list"

export default function HeaderCarrousel() {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<Carousel setApi={setApi} className="w-full px-0">
			<CarrouselList />
			<CarouselPrevious className="hidden md:flex" />
			<CarouselNext className="hidden md:flex" />

			<div className="py-2 text-center justify-center flex gap-5">
				<div
					className={`h-3 w-3  rounded-full duration-200 ${
						current == 1 ? "bg-black/100" : "bg-black/20"
					}`}
				></div>
				<div
					className={`h-3 w-3  rounded-full duration-200 ${
						current === 2 ? "bg-black/100" : "bg-black/20"
					}`}
				></div>
				<div
					className={`h-3 w-3  rounded-full duration-200 ${
						current === 3 ? "bg-black/100" : "bg-black/20"
					}`}
				></div>
			</div>
		</Carousel>
	)
}
