"use client"

import { Heart } from "lucide-react"
import { useFavoritesStore } from "@/stores/favorites-store"
import { Button } from "../ui/button"
import { FavoriteCard } from "./favorite-card"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"

export function FavoritesDrawer() {
	const { items, isOpen, setIsOpen, clearFavorites, getTotalItems } =
		useFavoritesStore()

	const totalItems = getTotalItems()

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="relative"
					onClick={() => setIsOpen(true)}
				>
					<Heart className="h-4 w-4" />
					{totalItems > 0 && (
						<span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
							{totalItems > 99 ? "99+" : totalItems}
						</span>
					)}
				</Button>
			</SheetTrigger>
			<SheetContent className="w-full sm:max-w-lg flex flex-col">
				<SheetHeader>
					<SheetTitle>Productos Favoritos</SheetTitle>
					<SheetDescription>
						{items.length === 0
							? "No tienes productos favoritos"
							: `${totalItems} producto${
									totalItems !== 1 ? "s" : ""
							  } en tus favoritos`}
					</SheetDescription>
				</SheetHeader>

				{items.length === 0 ? (
					<div className="flex-1 flex flex-col items-center justify-center space-y-4 py-8">
						<div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
							<Heart className="w-8 h-8 text-muted-foreground" />
						</div>
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">
								No tienes productos favoritos aún
							</p>
							<p className="text-sm text-muted-foreground">
								¡Empieza a guardar tus productos favoritos para encontrarlos
								fácilmente!
							</p>
						</div>
						<SheetClose asChild>
							<Button variant="outline">Explorar Productos</Button>
						</SheetClose>
					</div>
				) : (
					<>
						<div className="flex-1 overflow-y-auto py-4 space-y-4">
							{items.map((item) => (
								<FavoriteCard key={item.id} item={item} />
							))}
						</div>

						<SheetFooter className="border-t pt-4">
							<div className="w-full space-y-4">
								{/* Información de favoritos */}
								<div className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span>Total de favoritos</span>
										<span className="font-medium">{totalItems} productos</span>
									</div>
									<p className="text-xs text-muted-foreground">
										Tus productos favoritos se mantienen guardados para que
										puedas encontrarlos fácilmente
									</p>
								</div>

								{/* Botones de acción */}
								<div className="space-y-2">
									<SheetClose asChild>
										<Button className="w-full" size="lg">
											Continuar Comprando
										</Button>
									</SheetClose>
									<Button
										variant="outline"
										onClick={clearFavorites}
										className="w-full text-destructive hover:text-destructive"
									>
										Limpiar Favoritos
									</Button>
								</div>
							</div>
						</SheetFooter>
					</>
				)}
			</SheetContent>
		</Sheet>
	)
}
