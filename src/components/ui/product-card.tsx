import Image from "next/image"
import { Card, CardHeader, CardTitle } from "./card"
import { usdFormatter } from "@/utils/usdFormatter"
import { Button } from "./button"
import { IconHeart } from "@tabler/icons-react"

interface Props {
	promotion?: boolean
	price: number
	oldPrice?: number
	title: string
	imageURL: string
	imageAlt: string
}

export default function ProductCard({ oldPrice = 0, ...props }: Props) {
	return (
		<Card className="max-w-[15rem] overflow-hidden hover:shadow-lg duration-200 relative cursor-pointer mx-auto">
			<Button
				size={"icon"}
				className="absolute top-3 right-3 p-0 rounded-full"
				variant={"outline"}
			>
				<IconHeart size={20} />
			</Button>

			<Image
				src={props.imageURL}
				alt={props.imageAlt}
				width={300}
				height={300}
			/>
			<CardHeader className="pt-3">
				<CardTitle className="text-lg">{props.title}</CardTitle>
				<p className="flex gap-3">
					{usdFormatter.format(props.price)}{" "}
					{props.promotion && (
						<span className="line-through opacity-50">
							{usdFormatter.format(oldPrice)}
						</span>
					)}
				</p>
			</CardHeader>
		</Card>
	)
}
