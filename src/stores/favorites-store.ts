import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface FavoriteItem {
	id: string
	name: string
	brand: string
	price: number
	originalPrice?: number
	image: string
	color?: string
	inStock: boolean
}

export interface FavoritesState {
	items: FavoriteItem[]
	isOpen: boolean
}

export interface FavoritesActions {
	// Items management
	addItem: (item: FavoriteItem) => void
	removeItem: (id: string) => void
	toggleItem: (item: FavoriteItem) => void
	clearFavorites: () => void

	// UI management
	setIsOpen: (open: boolean) => void
	toggleDrawer: () => void

	// Computed values
	getTotalItems: () => number
	isFavorite: (id: string) => boolean
}

export type FavoritesStore = FavoritesState & FavoritesActions

export const useFavoritesStore = create<FavoritesStore>()(
	persist(
		(set, get) => ({
			// Initial state - empezamos con lista vacía
			items: [],
			isOpen: false,

			// Items management actions
			addItem: (newItem) => {
				const { items } = get()
				const existingItem = items.find((item) => item.id === newItem.id)

				if (!existingItem) {
					set({
						items: [...items, newItem],
					})
				}
			},

			removeItem: (id) => {
				set((state) => ({
					items: state.items.filter((item) => item.id !== id),
				}))
			},

			toggleItem: (item) => {
				const { items, addItem, removeItem } = get()
				const existingItem = items.find(
					(existingItem) => existingItem.id === item.id
				)

				if (existingItem) {
					removeItem(item.id)
				} else {
					addItem(item)
				}
			},

			clearFavorites: () => {
				set({ items: [] })
			},

			// UI management actions
			setIsOpen: (open) => {
				set({ isOpen: open })
			},

			toggleDrawer: () => {
				set((state) => ({ isOpen: !state.isOpen }))
			},

			// Computed values
			getTotalItems: () => {
				return get().items.length
			},

			isFavorite: (id) => {
				return get().items.some((item) => item.id === id)
			},
		}),
		{
			name: "sauce-favorites-storage", // Nombre único para localStorage
			// Solo persistir los items, no el estado de UI
			partialize: (state) => ({
				items: state.items,
			}),
		}
	)
)
