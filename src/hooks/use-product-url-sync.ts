"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useProductStore } from "@/stores/product-store"

export function useProductUrlSync() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const {
			findProductBySlug,
			openModal,
			closeModal,
			isOpen,
			selectedProduct,
		} = useProductStore.getState()

		const productSlug = searchParams.get("product")

		if (productSlug) {
			const shouldOpenModal = !isOpen || selectedProduct?.slug !== productSlug

			if (shouldOpenModal) {
				const product = findProductBySlug(productSlug)
				if (product) {
					openModal(product)
				}
			}
		} else if (isOpen) {
			closeModal()
		}
	}, [searchParams])
}
