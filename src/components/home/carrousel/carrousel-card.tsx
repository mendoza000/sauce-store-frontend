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
				<Card className=" overflow-hidden relative max-h-[28rem] min-h-[28rem] md:max-h-none md:min-h-full">
					<CardContent className="flex aspect-square gap-5 md:aspect-auto md:min-h-[60vh]  items-center justify-center p-6 flex-col lg:flex-row">
						<div>
							<h1 className="text-4xl font-bold mb-4">{props.title}</h1>
							<p className="text-lg">{props.description}</p>

							<Button className="mt-4 items-center flex gap-1">
								{props.textButton}
								<IconChevronRight size={15} />
							</Button>
						</div>
						{props.children}
					</CardContent>
				</Card>
			</div>
		</CarouselItem>
	)
}
