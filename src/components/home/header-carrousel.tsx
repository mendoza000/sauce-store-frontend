"use client"

import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	type CarouselApi,
} from "../ui/carousel"
import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"
import { IconChevronRight } from "@tabler/icons-react"
import { useEffect, useState } from "react"

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
			<CarouselContent>
				<CarouselItem>
					<div className="p-1">
						<Card className=" overflow-hidden relative max-h-[28rem] md:max-h-none">
							<CardContent className="flex aspect-square gap-5 md:aspect-auto md:min-h-[60vh] items-center justify-center p-6 flex-col lg:flex-row">
								<div>
									<h1 className="text-4xl font-bold mb-4">Nike Dunk</h1>
									<p className="text-lg">
										Un símbolo de la cultura Sneakerhead desde 1985
									</p>
									<p className="text-lg">
										Obtén hasta un{" "}
										<strong>10% de descuento en tu primera compra</strong>
									</p>

									<Button className="mt-4 items-center flex gap-1">
										Comprar ahora
										<IconChevronRight size={15} />
									</Button>
								</div>

								<Image
									src={"/dunk.png"}
									alt="Nike Dunk"
									width={400}
									height={400}
									// className="-rotate-12"
								/>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>

				<CarouselItem>
					<div className="p-1">
						<Card className=" overflow-hidden relative max-h-[28rem] md:max-h-none">
							<CardContent className="flex aspect-square gap-5 md:aspect-auto md:min-h-[60vh]  items-center justify-center p-6 flex-col lg:flex-row">
								<div>
									<h1 className="text-4xl font-bold mb-4">Exclusividad</h1>
									<p className="text-lg">
										Contamos con los modelos más exclusivos del mercado
									</p>
									<p className="text-lg">
										Consigue <strong>envíos gratis</strong> con nuestro sistema
										de fidelidad
									</p>

									<Button className="mt-4 items-center flex gap-1">
										Ver mas
										<IconChevronRight size={15} />
									</Button>
								</div>

								<Image
									src={"/air-jordan.png"}
									alt="Nike Jordan"
									width={400}
									height={500}
									className="-rotate-12"
								/>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>

				<CarouselItem>
					<div className="">
						<Card className=" overflow-hidden max-h-[28rem] md:max-h-none">
							<CardContent className="flex aspect-square gap-5 md:aspect-auto md:min-h-[60vh] items-center justify-center p-6 flex-col lg:flex-row">
								<div>
									<h1 className="text-4xl font-bold mb-4">Calidad</h1>
									<p className="text-lg">
										Te ofrecemos lo mejor en cada uno de tus pasos
									</p>
									<p className="text-lg">
										No dudes en preguntarnos por{" "}
										<strong>la calidad de tu producto</strong>
									</p>

									<Button className="mt-4 items-center flex gap-1">
										Contactarnos
										<IconChevronRight size={15} />
									</Button>
								</div>

								<Image
									src={"/new-balance-2.png"}
									alt="New Balance"
									width={400}
									height={400}
									className=""
									// className="-rotate-12"
								/>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>
			</CarouselContent>
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
