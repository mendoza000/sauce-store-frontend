import { useMemo } from "react"
import { useFilterStore, type SortOption } from "@/stores/filter-store"
import type { Product } from "@/utils/productUtils"

/**
 * Funciones de utilidad para ordenamiento
 */
const sortProducts = (products: Product[], sortBy: SortOption): Product[] => {
	switch (sortBy) {
		case "price_asc":
			return [...products].sort((a, b) => a.price - b.price)
		case "price_desc":
			return [...products].sort((a, b) => b.price - a.price)
		case "default":
		default:
			return products
	}
}

/**
 * Hook personalizado para filtrar y ordenar productos basado en los filtros activos
 */
export function useFilteredProducts(products: Product[]) {
	const { selectedBrands, priceRange, inStockOnly, promotionOnly, sortBy } =
		useFilterStore()

	const filteredAndSortedProducts = useMemo(() => {
		// Primero aplicamos los filtros
		const filtered = products.filter((product) => {
			// Filtro por marcas
			if (
				selectedBrands.length > 0 &&
				!selectedBrands.includes(product.brand)
			) {
				return false
			}

			// Filtro por rango de precio
			if (product.price < priceRange.min || product.price > priceRange.max) {
				return false
			}

			// Filtro por disponibilidad (solo en stock)
			if (inStockOnly && !product.inStock) {
				return false
			}

			// Filtro por promoción
			if (promotionOnly && !product.promotion) {
				return false
			}

			return true
		})

		// Luego aplicamos el ordenamiento
		return sortProducts(filtered, sortBy)
	}, [products, selectedBrands, priceRange, inStockOnly, promotionOnly, sortBy])

	// Estadísticas de los filtros aplicados
	const filterStats = useMemo(() => {
		const totalProducts = products.length
		const filteredCount = filteredAndSortedProducts.length

		// Contar productos por marca (solo de los filtrados)
		const brandCounts = filteredAndSortedProducts.reduce((acc, product) => {
			acc[product.brand] = (acc[product.brand] || 0) + 1
			return acc
		}, {} as Record<string, number>)

		// Productos en promoción (de los filtrados)
		const promotionCount = filteredAndSortedProducts.filter(
			(p) => p.promotion
		).length

		// Productos disponibles (de los filtrados)
		const inStockCount = filteredAndSortedProducts.filter(
			(p) => p.inStock
		).length

		return {
			total: totalProducts,
			filtered: filteredCount,
			brandCounts,
			promotionCount,
			inStockCount,
			hasActiveFilters:
				selectedBrands.length > 0 ||
				priceRange.min > 0 ||
				priceRange.max < 500 ||
				inStockOnly ||
				promotionOnly,
		}
	}, [
		filteredAndSortedProducts,
		products,
		selectedBrands,
		priceRange,
		inStockOnly,
		promotionOnly,
	])

	return {
		filteredProducts: filteredAndSortedProducts,
		filterStats,
	}
}
