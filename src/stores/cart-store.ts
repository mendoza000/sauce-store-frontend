import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
	id: string
	name: string
	brand: string
	price: number
	originalPrice?: number
	size: string
	quantity: number
	image: string
	color?: string
	inStock: boolean
}

export interface CartState {
	items: CartItem[]
	isOpen: boolean
}

export interface CartActions {
	// Items management
	addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
	removeItem: (id: string) => void
	updateQuantity: (id: string, quantity: number) => void
	clearCart: () => void

	// UI management
	setIsOpen: (open: boolean) => void
	toggleCart: () => void

	// Computed values
	getTotalItems: () => number
	getTotalPrice: () => number
	getItemCount: (id: string) => number
}

export type CartStore = CartState & CartActions

// Productos iniciales para prueba
const initialCartItems: CartItem[] = [
	{
		id: "airmax-90-white-42",
		name: "Air Max 90",
		brand: "Nike",
		price: 129.99,
		originalPrice: 149.99,
		size: "42",
		quantity: 1,
		image: "/images/airmax.jpg",
		color: "White/Black",
		inStock: true,
	},
	{
		id: "dunk-low-panda-41",
		name: 'Dunk Low "Panda"',
		brand: "Nike",
		price: 159.99,
		size: "41",
		quantity: 2,
		image: "/images/dunk.jpg",
		color: "White/Black",
		inStock: true,
	},
	{
		id: "nike-ajko-low-bred-43",
		name: 'AJKO Low "Bred"',
		brand: "Nike",
		price: 149.99,
		size: "43",
		quantity: 1,
		image: "/images/ajko.jpg",
		color: "Black/Red",
		inStock: true,
	},
]

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			// Initial state
			items: initialCartItems,
			isOpen: false,

			// Items management actions
			addItem: (newItem) => {
				const { items } = get()
				const existingItem = items.find((item) => item.id === newItem.id)

				if (existingItem) {
					// If item exists, update quantity
					set({
						items: items.map((item) =>
							item.id === newItem.id
								? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
								: item
						),
					})
				} else {
					// If new item, add to cart
					set({
						items: [...items, { ...newItem, quantity: newItem.quantity || 1 }],
					})
				}
			},

			removeItem: (id) => {
				set((state) => ({
					items: state.items.filter((item) => item.id !== id),
				}))
			},

			updateQuantity: (id, quantity) => {
				if (quantity <= 0) {
					get().removeItem(id)
					return
				}

				set((state) => ({
					items: state.items.map((item) =>
						item.id === id ? { ...item, quantity } : item
					),
				}))
			},

			clearCart: () => {
				set({ items: [] })
			},

			// UI management actions
			setIsOpen: (open) => {
				set({ isOpen: open })
			},

			toggleCart: () => {
				set((state) => ({ isOpen: !state.isOpen }))
			},

			// Computed values
			getTotalItems: () => {
				return get().items.reduce((total, item) => total + item.quantity, 0)
			},

			getTotalPrice: () => {
				return get().items.reduce(
					(total, item) => total + item.price * item.quantity,
					0
				)
			},

			getItemCount: (id) => {
				const item = get().items.find((item) => item.id === id)
				return item?.quantity || 0
			},
		}),
		{
			name: "sauce-cart-storage", // Nombre único para localStorage
			// Solo persistir los items, no el estado de UI
			partialize: (state) => ({
				items: state.items,
			}),
		}
	)
)
