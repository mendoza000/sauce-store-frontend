import { create } from "zustand"
import type { Product } from "@/utils/productUtils"

interface ProductStore {
	// Modal state
	isOpen: boolean
	selectedProduct: Product | null

	// Actions
	openModal: (product: Product) => void
	closeModal: () => void
	setProduct: (product: Product) => void
	getProduct: () => Product | null
	onOpenChange: (open: boolean) => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
	// Initial state
	isOpen: false,
	selectedProduct: null,

	// Actions
	openModal: (product: Product) => {
		set({
			isOpen: true,
			selectedProduct: product,
		})
	},

	closeModal: () => {
		set({
			isOpen: false,
			selectedProduct: null,
		})
	},

	setProduct: (product: Product) => {
		set({ selectedProduct: product })
	},

	getProduct: () => {
		return get().selectedProduct
	},

	onOpenChange: (open: boolean) => {
		if (!open) {
			set({
				isOpen: false,
				selectedProduct: null,
			})
		} else {
			set({ isOpen: true })
		}
	},
}))
