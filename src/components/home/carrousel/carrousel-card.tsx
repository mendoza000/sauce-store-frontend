import { IconChevronRight } from "@tabler/icons-react"
import { Button } from "../../ui/button"
import { Card, CardContent } from "../../ui/card"
import { CarouselItem } from "../../ui/carousel"

interface Props {
	title: string
	description: React.ReactNode
	textButton: string
	actionButton: () => void
	children: React.ReactNode
}

export default function CarrouselCard(props: Props) {
	return (
		<CarouselItem>
			<div className="p-1">
				<Card className="overflow-hidden relative bg-black/90 min-h-[60vh] md:min-h-[60vh]">
					<CardContent className="flex items-center justify-center lg:justify-between lg:mx-40 mx-4 p-4 md:p-6 flex-col lg:flex-row min-h-[60vh] md:min-h-[60vh] px-0">
						<div className="text-center lg:text-left w-full lg:w-auto flex flex-col justify-between md:justify-center md:space-y-6 h-full min-h-[60vh]">
							<h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight mt-10 md:mt-0">
								{props.title}
							</h1>
							<p className="text-md sm:text-md md:text-base lg:text-xl text-white/70 leading-relaxed  max-w-md lg:max-w-5xl mx-auto lg:mx-0 -mt-20">
								{props.description}
							</p>

							<div className="pt-2 md:pt-4 ">
								<Button
									size="lg"
									className="items-center flex gap-1 w-full sm:w-auto sm:min-w-[12rem] lg:w-[20rem] mx-auto lg:mx-0 text-sm md:text-base py-2 md:py-3"
									variant="secondary"
								>
									{props.textButton}
									<IconChevronRight size={15} />
								</Button>
							</div>
						</div>
						<div className="w-full lg:w-auto justify-center lg:block hidden">
							{props.children}
						</div>
					</CardContent>
				</Card>
			</div>
		</CarouselItem>
	)
}
