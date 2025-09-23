"use client"

import { X, Plus, Minus } from "lucide-react"
import Image from "next/image"
import type { CartItem } from "@/stores/cart-store"
import { useCartStore } from "@/stores/cart-store"
import { usdFormatter } from "@/utils/usdFormatter"
import { Button } from "../ui/button"

interface CartCardProps {
	item: CartItem
}

export function CartCard({ item }: CartCardProps) {
	const { removeItem, updateQuantity } = useCartStore()

	const handleQuantityChange = (change: number) => {
		updateQuantity(item.id, item.quantity + change)
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
			<div className="flex-1 space-y-2">
				<div>
					<h4 className="font-medium text-sm line-clamp-2 leading-tight">
						{item.name}
					</h4>
					<p className="text-xs text-muted-foreground">
						{item.brand} • Talla: {item.size}
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

					{/* Controles de cantidad */}
					<div className="flex items-center space-x-2">
						<Button
							variant="outline"
							size="sm"
							className="h-6 w-6 p-0"
							onClick={() => handleQuantityChange(-1)}
							disabled={item.quantity <= 1}
						>
							<Minus className="h-3 w-3" />
						</Button>
						<span className="text-sm font-medium min-w-[20px] text-center">
							{item.quantity}
						</span>
						<Button
							variant="outline"
							size="sm"
							className="h-6 w-6 p-0"
							onClick={() => handleQuantityChange(1)}
						>
							<Plus className="h-3 w-3" />
						</Button>
					</div>
				</div>

				{/* Stock status */}
				{!item.inStock && <p className="text-xs text-destructive">Sin stock</p>}
			</div>

			{/* Botón eliminar */}
			<Button
				variant="ghost"
				size="sm"
				className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2"
				onClick={() => removeItem(item.id)}
			>
				<X className="h-3 w-3" />
			</Button>
		</div>
	)
}
