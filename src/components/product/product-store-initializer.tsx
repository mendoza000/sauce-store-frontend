"use client"

import { useEffect } from "react"
import { useProductStore } from "@/stores/product-store"
import { ALL_PRODUCTS } from "@/utils/products"

export function ProductStoreInitializer() {
	const { setAvailableProducts } = useProductStore()

	useEffect(() => {
		setAvailableProducts(ALL_PRODUCTS)
	}, [setAvailableProducts])

	return null
}
