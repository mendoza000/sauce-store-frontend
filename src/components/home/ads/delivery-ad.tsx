"use client"

import { IconChevronRight } from "@tabler/icons-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GlareHover from "@/components/GlareHover"

export default function DeliveryAd() {
	return (
		<section className="max-w-7xl mx-auto px-5 mt-5 pb-10">
			<GlareHover
				width="100%"
				height="auto"
				background="rgb(24 24 27)" // bg-zinc-900
				borderRadius="0.5rem" // rounded-lg (default de Card)
				borderColor="rgb(39 39 42)" // border-zinc-800
				glareColor="#ffffff"
				glareOpacity={0.1}
				glareAngle={-45}
				glareSize={200}
				transitionDuration={800}
				className="w-full"
			>
				<Card className="bg-transparent text-zinc-50 relative w-full border-0 group">
					<CardContent className="p-5 md:px-20 grid md:grid-cols-2 items-center justify-center gap-5 min-h-[25rem]">
						<div className="flex flex-col justify-center gap-3">
							<h2 className="text-xl font-semibold">Sauce</h2>
							<p className="text-3xl">
								¡Con una compra superior a $ 120 obtendrás los mejores
								beneficios de todo el mercado!
							</p>

							<div className="grid md:grid-cols-3 gap-3 text-center">
								<p className="border-2 py-1 cursor-default border-zinc-500/20 hover:bg-zinc-500/20 duration-200 rounded-md">
									Envío gratis
								</p>
								<p className="border-2 py-1 cursor-default border-zinc-500/20 hover:bg-zinc-500/20 duration-200 rounded-md">
									10% de descuento
								</p>
								<p className="border-2 py-1 cursor-default border-zinc-500/20 hover:bg-zinc-500/20 duration-200 rounded-md">
									+20 en fidelidad
								</p>
							</div>

							<Button className="gap-1 mt-5" variant="secondary">
								Comprar ahora <IconChevronRight size={15} />
							</Button>
						</div>

						<Image
							src={"/ad2.png"}
							alt="jodan-ad"
							width={400}
							height={400}
							className="absolute right-0 bottom-0 hidden md:block transition-transform duration-300 group-hover:scale-110"
							draggable={false}
						/>
					</CardContent>
				</Card>
			</GlareHover>
		</section>
	)
}
