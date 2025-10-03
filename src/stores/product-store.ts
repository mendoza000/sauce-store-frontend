import { create } from "zustand"
import type { Product } from "@/utils/productUtils"

interface ProductStore {
	isOpen: boolean
	selectedProduct: Product | null
	availableProducts: Product[]
	openModal: (product: Product) => void
	closeModal: () => void
	setProduct: (product: Product) => void
	getProduct: () => Product | null
	onOpenChange: (open: boolean) => void
	setAvailableProducts: (products: Product[]) => void
	findProductBySlug: (slug: string) => Product | undefined
}

const updateURL = (slug?: string) => {
	if (typeof window === "undefined") return

	const url = new URL(window.location.href)

	if (slug) {
		url.searchParams.set("product", slug)
	} else {
		url.searchParams.delete("product")
	}

	window.history.replaceState({}, "", url.toString())
}

export const useProductStore = create<ProductStore>((set, get) => ({
	isOpen: false,
	selectedProduct: null,
	availableProducts: [],

	openModal: (product: Product) => {
		set({
			isOpen: true,
			selectedProduct: product,
		})
		updateURL(product.slug)
	},

	closeModal: () => {
		set({
			isOpen: false,
			selectedProduct: null,
		})
		updateURL()
	},

	setProduct: (product: Product) => {
		set({ selectedProduct: product })
	},

	getProduct: () => get().selectedProduct,

	onOpenChange: (open: boolean) => {
		if (!open) {
			set({
				isOpen: false,
				selectedProduct: null,
			})
			updateURL()
		} else {
			set({ isOpen: true })
		}
	},

	setAvailableProducts: (products: Product[]) => {
		set({ availableProducts: products })
	},

	findProductBySlug: (slug: string) => {
		const products = get().availableProducts
		return products.find((product) => product.slug === slug)
	},
}))
