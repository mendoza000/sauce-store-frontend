"use client"

import { IconHeart } from "@tabler/icons-react"
import Image from "next/image"
import { usdFormatter } from "@/utils/usdFormatter"
import { useFavoritesStore } from "@/stores/favorites-store"
import { useProductStore } from "@/stores/product-store"
import { Button } from "./button"
import { Card, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"
import type { Product } from "@/utils/productUtils"

interface Props extends Omit<Product, "id"> {
	productId: string
}

export default function ProductCard(props: Props) {
	const { toggleItem, isFavorite } = useFavoritesStore()
	const { openModal } = useProductStore()
	const isItemFavorite = isFavorite(props.productId)

	const handleToggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation() // Evitar que se abra el modal
		toggleItem({
			id: props.productId,
			name: props.title,
			brand: props.brand || "Nike",
			price: props.price,
			originalPrice: props.promotion ? props.oldPrice : undefined,
			image: props.imageURL,
			color: props.color,
			inStock: props.inStock || true,
		})
	}

	const handleCardClick = () => {
		// Crear el objeto Product completo para el modal
		const product: Product = {
			id: props.productId,
			slug: props.slug,
			title: props.title,
			brand: props.brand,
			price: props.price,
			oldPrice: props.oldPrice,
			promotion: props.promotion,
			color: props.color,
			imageAlt: props.imageAlt,
			imageURL: props.imageURL,
			inStock: props.inStock,
			description: props.description,
			sizes: props.sizes,
			category: props.category,
			features: props.features,
		}

		openModal(product)
	}

	return (
		<Card
			className="max-w-[15rem] overflow-hidden hover:shadow-lg duration-200 relative cursor-pointer mx-auto"
			onClick={handleCardClick}
		>
			<Button
				size={"icon"}
				className={cn(
					"absolute top-3 right-3 p-0 rounded-full border-black/10 transition-colors z-10",
					isItemFavorite
						? "text-red-500 bg-white border-black/10 hover:bg-gray-50"
						: "bg-white hover:bg-gray-50"
				)}
				variant={isItemFavorite ? "default" : "outline"}
				onClick={handleToggleFavorite}
			>
				<IconHeart
					size={20}
					className={cn(
						"transition-all duration-200",
						isItemFavorite ? "fill-current" : ""
					)}
				/>
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
					{props.promotion && props.oldPrice && (
						<span className="line-through opacity-50">
							{usdFormatter.format(props.oldPrice)}
						</span>
					)}
				</p>
			</CardHeader>
		</Card>
	)
}
