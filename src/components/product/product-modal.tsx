"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useProductStore } from "@/stores/product-store"
import { useCartStore } from "@/stores/cart-store"
import { usdFormatter } from "@/utils/usdFormatter"
import type { Product } from "@/utils/productUtils"
import Image from "next/image"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { cn } from "@/lib/utils"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "../ui/drawer"

interface ProductContentProps {
	product: Product
	selectedSize: string | null
	onSizeSelect: (size: string) => void
}

function ProductContent({
	product,
	selectedSize,
	onSizeSelect,
}: ProductContentProps) {
	const isMobile = useIsMobile()

	return (
		<div className={cn("space-y-4", isMobile ? "pb-4" : "py-4")}>
			{/* Imagen del producto - más compacta en móvil */}
			<div
				className={cn(
					"relative overflow-hidden rounded-lg",
					isMobile ? "aspect-[4/3] max-h-[250px] mx-auto" : "aspect-square"
				)}
			>
				<Image
					src={product.imageURL}
					alt={product.imageAlt}
					fill
					className="object-cover"
				/>
			</div>

			{/* Información del producto */}
			<div className="space-y-3">
				{/* Título y marca */}
				<div className="space-y-1">
					<h3
						className={cn(
							"font-semibold leading-tight",
							isMobile ? "text-base" : "text-lg"
						)}
					>
						{product.title}
					</h3>
					<p className="text-sm text-muted-foreground">{product.brand}</p>
				</div>

				{/* Precios */}
				<div className="flex items-center gap-2">
					<span className={cn("font-bold", isMobile ? "text-xl" : "text-2xl")}>
						{usdFormatter.format(product.price)}
					</span>
					{product.promotion && product.oldPrice && (
						<span
							className={cn(
								"text-muted-foreground line-through",
								isMobile ? "text-base" : "text-lg"
							)}
						>
							{usdFormatter.format(product.oldPrice)}
						</span>
					)}
				</div>

				{/* Descripción - más corta en móvil */}
				{product.description && (
					<p
						className={cn(
							"text-muted-foreground leading-relaxed",
							isMobile ? "text-sm line-clamp-3" : "text-sm"
						)}
					>
						{product.description}
					</p>
				)}

				{/* Color */}
				<div className="space-y-2">
					<p className="text-sm font-medium">Color:</p>
					<Badge variant="secondary" className="w-fit">
						{product.color}
					</Badge>
				</div>

				{/* Tallas */}
				{product.sizes && product.sizes.length > 0 && (
					<div className="space-y-3">
						<p className="text-sm font-medium">Talla:</p>
						<div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
							{product.sizes.map((size) => (
								<Button
									key={size}
									variant={selectedSize === size ? "default" : "outline"}
									size="sm"
									className={cn(
										"h-10 font-medium transition-all",
										selectedSize === size
											? "bg-black text-white hover:bg-black/90"
											: "hover:border-black"
									)}
									onClick={() => onSizeSelect(size)}
								>
									{size}
								</Button>
							))}
						</div>
						{selectedSize && (
							<p className="text-xs text-muted-foreground font-medium">
								Talla seleccionada:{" "}
								<span className="text-black">{selectedSize}</span>
							</p>
						)}
					</div>
				)}

				{/* Características - solo en desktop o colapsadas en móvil */}
				{product.features && product.features.length > 0 && !isMobile && (
					<div className="space-y-2">
						<p className="text-sm font-medium">Características:</p>
						<ul className="text-sm text-muted-foreground space-y-1">
							{product.features.slice(0, 3).map((feature, index) => (
								<li key={index} className="flex items-start gap-2">
									<span className="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Botón de agregar al carrito solo en desktop */}
				{!isMobile && (
					<div className="pt-4">
						<AddToCartButton product={product} selectedSize={selectedSize} />
					</div>
				)}
			</div>
		</div>
	)
}

interface AddToCartButtonProps {
	product: Product
	selectedSize: string | null
}

function AddToCartButton({ product, selectedSize }: AddToCartButtonProps) {
	const { addItem } = useCartStore()
	const { closeModal } = useProductStore()

	const handleAddToCart = () => {
		if (!product.inStock) return

		// Si hay tallas disponibles, verificar que se haya seleccionado una
		if (product.sizes && product.sizes.length > 0 && !selectedSize) {
			toast.error("Por favor selecciona una talla", {
				duration: 2000,
			})
			return
		}

		// Crear el ID único combinando product id y talla
		const itemId = `${product.id}-${selectedSize || "no-size"}`

		// Agregar al carrito
		addItem({
			id: itemId,
			name: product.title,
			brand: product.brand || "Nike",
			price: product.price,
			originalPrice: product.promotion ? product.oldPrice : undefined,
			size: selectedSize || "Única",
			image: product.imageURL,
			color: product.color,
			inStock: product.inStock || true,
		})

		// Mostrar notificación de éxito
		toast.success("¡Producto agregado al carrito!", {
			duration: 3000,
		})

		// Cerrar el modal después de agregar al carrito
		closeModal()
	}

	return (
		<Button
			className="w-full h-12 font-medium"
			disabled={
				!product.inStock ||
				(product.sizes && product.sizes.length > 0 && !selectedSize)
			}
			onClick={handleAddToCart}
		>
			{!product.inStock
				? "Agotado"
				: product.sizes && product.sizes.length > 0 && !selectedSize
				? "Selecciona una talla"
				: "Agregar al carrito"}
		</Button>
	)
}

export function ProductModal() {
	const isMobile = useIsMobile()
	const { isOpen, selectedProduct, onOpenChange } = useProductStore()
	const [selectedSize, setSelectedSize] = useState<string | null>(null)

	// Reset selected size when modal closes or product changes
	useEffect(() => {
		if (!isOpen || !selectedProduct) {
			setSelectedSize(null)
		}
	}, [isOpen, selectedProduct])

	if (!selectedProduct) return null

	if (!isMobile) {
		return (
			<Dialog open={isOpen} onOpenChange={onOpenChange}>
				<DialogContent className="sm:max-w-[500px] md:min-w-[40rem] lg:min-w-[50rem] md:max-w-[40rem] lg:max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>{selectedProduct.title}</DialogTitle>
						<DialogDescription>
							{selectedProduct.category} • {selectedProduct.brand}
						</DialogDescription>
					</DialogHeader>
					<ProductContent
						product={selectedProduct}
						selectedSize={selectedSize}
						onSizeSelect={setSelectedSize}
					/>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={isOpen} onOpenChange={onOpenChange}>
			<DrawerContent className="max-h-[85vh] flex flex-col">
				<DrawerHeader className="text-left pb-2 flex-shrink-0">
					<DrawerTitle className="text-lg">{selectedProduct.title}</DrawerTitle>
					<DrawerDescription className="text-sm">
						{selectedProduct.category} • {selectedProduct.brand}
					</DrawerDescription>
				</DrawerHeader>

				<div className="px-4 flex-1 overflow-y-auto">
					<ProductContent
						product={selectedProduct}
						selectedSize={selectedSize}
						onSizeSelect={setSelectedSize}
					/>
				</div>

				<DrawerFooter className="flex-shrink-0 pt-4 pb-6">
					<AddToCartButton
						product={selectedProduct}
						selectedSize={selectedSize}
					/>
					<DrawerClose asChild>
						<Button variant="outline" className="w-full">
							Cerrar
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
