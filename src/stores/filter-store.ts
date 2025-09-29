import { create } from "zustand"

// Tipos para los filtros
export interface PriceRange {
	min: number
	max: number
}

// Tipos para el ordenamiento
export type SortOption = "default" | "price_asc" | "price_desc"

export interface SortOptionItem {
	value: SortOption
	label: string
	description?: string
}

export interface FilterState {
	// Marcas seleccionadas
	selectedBrands: string[]

	// Categorías seleccionadas
	selectedCategories: string[]

	// Rango de precios
	priceRange: PriceRange

	// Tallas seleccionadas
	selectedSizes: string[]

	// Disponibilidad
	inStockOnly: boolean

	// En promoción
	promotionOnly: boolean

	// Colores seleccionados
	selectedColors: string[]

	// Ordenamiento
	sortBy: SortOption
}

interface FilterActions {
	// Acciones para marcas
	toggleBrand: (brand: string) => void
	clearBrands: () => void

	// Acciones para categorías
	toggleCategory: (category: string) => void
	clearCategories: () => void

	// Acciones para precios
	setPriceRange: (range: PriceRange) => void
	resetPriceRange: () => void

	// Acciones para tallas
	toggleSize: (size: string) => void
	clearSizes: () => void

	// Acciones para disponibilidad
	toggleInStockOnly: () => void

	// Acciones para promociones
	togglePromotionOnly: () => void

	// Acciones para colores
	toggleColor: (color: string) => void
	clearColors: () => void

	// Acciones para ordenamiento
	setSortBy: (sortOption: SortOption) => void
	resetSortBy: () => void

	// Limpiar todos los filtros
	clearAllFilters: () => void
}

type FilterStore = FilterState & FilterActions

// Valores por defecto
const DEFAULT_PRICE_RANGE: PriceRange = { min: 0, max: 500 }

export const useFilterStore = create<FilterStore>((set) => ({
	// Estado inicial
	selectedBrands: [],
	selectedCategories: [],
	priceRange: DEFAULT_PRICE_RANGE,
	selectedSizes: [],
	inStockOnly: false,
	promotionOnly: false,
	selectedColors: [],
	sortBy: "default",

	// Acciones para marcas
	toggleBrand: (brand: string) => {
		set((state) => ({
			selectedBrands: state.selectedBrands.includes(brand)
				? state.selectedBrands.filter((b) => b !== brand)
				: [...state.selectedBrands, brand],
		}))
	},

	clearBrands: () => set({ selectedBrands: [] }),

	// Acciones para categorías
	toggleCategory: (category: string) => {
		set((state) => ({
			selectedCategories: state.selectedCategories.includes(category)
				? state.selectedCategories.filter((c) => c !== category)
				: [...state.selectedCategories, category],
		}))
	},

	clearCategories: () => set({ selectedCategories: [] }),

	// Acciones para precios
	setPriceRange: (range: PriceRange) => set({ priceRange: range }),

	resetPriceRange: () => set({ priceRange: DEFAULT_PRICE_RANGE }),

	// Acciones para tallas
	toggleSize: (size: string) => {
		set((state) => ({
			selectedSizes: state.selectedSizes.includes(size)
				? state.selectedSizes.filter((s) => s !== size)
				: [...state.selectedSizes, size],
		}))
	},

	clearSizes: () => set({ selectedSizes: [] }),

	// Acciones para disponibilidad
	toggleInStockOnly: () =>
		set((state) => ({ inStockOnly: !state.inStockOnly })),

	// Acciones para promociones
	togglePromotionOnly: () =>
		set((state) => ({ promotionOnly: !state.promotionOnly })),

	// Acciones para colores
	toggleColor: (color: string) => {
		set((state) => ({
			selectedColors: state.selectedColors.includes(color)
				? state.selectedColors.filter((c) => c !== color)
				: [...state.selectedColors, color],
		}))
	},

	clearColors: () => set({ selectedColors: [] }),

	// Acciones para ordenamiento
	setSortBy: (sortOption: SortOption) => set({ sortBy: sortOption }),

	resetSortBy: () => set({ sortBy: "default" }),

	// Limpiar todos los filtros
	clearAllFilters: () =>
		set({
			selectedBrands: [],
			selectedCategories: [],
			priceRange: DEFAULT_PRICE_RANGE,
			selectedSizes: [],
			inStockOnly: false,
			promotionOnly: false,
			selectedColors: [],
			sortBy: "default",
		}),
}))

// Opciones de ordenamiento disponibles
export const SORT_OPTIONS: SortOptionItem[] = [
	{
		value: "default",
		label: "Por defecto",
		description: "Orden original de los productos",
	},
	{
		value: "price_asc",
		label: "Precio: Menor a Mayor",
		description: "Del más barato al más caro",
	},
	{
		value: "price_desc",
		label: "Precio: Mayor a Menor",
		description: "Del más caro al más barato",
	},
]
