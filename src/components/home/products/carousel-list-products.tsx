"use client"

import { useMemo } from "react"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import ProductCard from "@/components/ui/product-card"
import { createProducts, SAMPLE_PRODUCTS_DATA } from "@/utils/productUtils"

export default function CarouselListProducts() {
	// Generar los productos con UUIDs únicos - duplicamos algunos para el carrusel
	const products = useMemo(() => {
		return createProducts([
			...SAMPLE_PRODUCTS_DATA,
			...SAMPLE_PRODUCTS_DATA, // Duplicar para tener más elementos en el carrusel
		])
	}, [])
	return (
		<Carousel
			className="mt-7"
			opts={{
				align: "start",
			}}
		>
			<CarouselContent className="-ml-2 md:-ml-4 py-5">
				{products.map((product) => (
					<CarouselItem
						key={product.id}
						className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/5"
					>
						<ProductCard
							productId={product.id}
							slug={product.slug}
							title={product.title}
							brand={product.brand}
							price={product.price}
							oldPrice={product.oldPrice}
							promotion={product.promotion}
							color={product.color}
							imageAlt={product.imageAlt}
							imageURL={product.imageURL}
							inStock={product.inStock}
							description={product.description}
							sizes={product.sizes}
							category={product.category}
							features={product.features}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
