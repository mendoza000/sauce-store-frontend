"use client"

import { X, ShoppingBag } from "lucide-react"
import Image from "next/image"
import type { FavoriteItem } from "@/stores/favorites-store"
import { useFavoritesStore } from "@/stores/favorites-store"
import { useCartStore } from "@/stores/cart-store"
import { usdFormatter } from "@/utils/usdFormatter"
import { Button } from "../ui/button"

interface FavoriteCardProps {
	item: FavoriteItem
}

export function FavoriteCard({ item }: FavoriteCardProps) {
	const { removeItem } = useFavoritesStore()
	const { addItem } = useCartStore()

	const handleAddToCart = () => {
		// Convertir FavoriteItem a CartItem con valores por defecto
		addItem({
			id: `${item.id}-default-size`, // Agregamos un sufijo para el tamaño
			name: item.name,
			brand: item.brand,
			price: item.price,
			originalPrice: item.originalPrice,
			size: "40", // Tamaño por defecto, se podría hacer configurable
			image: item.image,
			color: item.color,
			inStock: item.inStock,
		})
	}

	const handleRemoveFromFavorites = () => {
		removeItem(item.id)
	}

	return (
		<div className="flex items-start space-x-4 rounded-lg border p-4 relative group">
			{/* Imagen del producto */}
			<div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
				<Image
					src={item.image}
					alt={item.name}
					width={64}
					height={64}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Información del producto */}
			<div className="flex-1 space-y-3">
				<div>
					<h4 className="font-medium text-sm line-clamp-2 leading-tight">
						{item.name}
					</h4>
					<p className="text-xs text-muted-foreground">
						{item.brand}
						{item.color && ` • ${item.color}`}
					</p>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<span className="font-medium text-sm">
							{usdFormatter.format(item.price)}
						</span>
						{item.originalPrice && item.originalPrice > item.price && (
							<span className="text-xs text-muted-foreground line-through">
								{usdFormatter.format(item.originalPrice)}
							</span>
						)}
					</div>

					{/* Botón agregar al carrito */}
					<Button
						variant="outline"
						size="sm"
						className="h-8 px-3"
						onClick={handleAddToCart}
						disabled={!item.inStock}
					>
						<ShoppingBag className="h-3 w-3 mr-1" />
						Agregar
					</Button>
				</div>

				{/* Stock status */}
				{!item.inStock && <p className="text-xs text-destructive">Sin stock</p>}
			</div>

			{/* Botón eliminar */}
			<Button
				variant="ghost"
				size="sm"
				className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2"
				onClick={handleRemoveFromFavorites}
				title="Quitar de favoritos"
			>
				<X className="h-3 w-3" />
			</Button>
		</div>
	)
}
