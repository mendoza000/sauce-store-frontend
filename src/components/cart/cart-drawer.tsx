"use client"

import { ShoppingBag } from "lucide-react"
import { useCartStore } from "@/stores/cart-store"
import { usdFormatter } from "@/utils/usdFormatter"
import { Button } from "../ui/button"
import { CartCard } from "./cart-card"
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

export function CartDrawer() {
	const { items, isOpen, setIsOpen, clearCart, getTotalItems, getTotalPrice } =
		useCartStore()

	const totalItems = getTotalItems()
	const totalPrice = getTotalPrice()
	const shippingCost = totalPrice > 100 ? 0 : 9.99
	const finalTotal = totalPrice + shippingCost

	console.log(totalItems)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="relative"
					onClick={() => setIsOpen(true)}
				>
					<ShoppingBag className="h-4 w-4" />
					{totalItems > 0 && (
						<span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
							{totalItems > 99 ? "99+" : totalItems}
						</span>
					)}
				</Button>
			</SheetTrigger>
			<SheetContent className="w-full sm:max-w-lg flex flex-col">
				<SheetHeader>
					<SheetTitle>Carrito de Compras</SheetTitle>
					<SheetDescription>
						{items.length === 0
							? "Tu carrito está vacío"
							: `${totalItems} producto${
									totalItems !== 1 ? "s" : ""
							  } en tu carrito`}
					</SheetDescription>
				</SheetHeader>

				{items.length === 0 ? (
					<div className="flex-1 flex flex-col items-center justify-center space-y-4 py-8">
						<div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
							<ShoppingBag className="w-8 h-8 text-muted-foreground" />
						</div>
						<p className="text-muted-foreground text-center">
							No tienes productos en tu carrito
						</p>
						<SheetClose asChild>
							<Button variant="outline">Continúa Comprando</Button>
						</SheetClose>
					</div>
				) : (
					<>
						<div className="flex-1 overflow-y-auto py-4 space-y-4">
							{items.map((item) => (
								<CartCard key={item.id} item={item} />
							))}
						</div>

						<SheetFooter className="border-t pt-4">
							<div className="w-full space-y-4">
								{/* Resumen de precios */}
								<div className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span>Subtotal ({totalItems} productos)</span>
										<span>{usdFormatter.format(totalPrice)}</span>
									</div>
									<div className="flex items-center justify-between text-sm">
										<span>Envío</span>
										<span
											className={
												shippingCost === 0 ? "text-green-600 font-medium" : ""
											}
										>
											{shippingCost === 0
												? "¡Gratis!"
												: usdFormatter.format(shippingCost)}
										</span>
									</div>
									{totalPrice > 0 && totalPrice < 100 && (
										<p className="text-xs text-muted-foreground">
											Envío gratis en compras mayores a $100
										</p>
									)}
								</div>

								<div className="flex items-center justify-between font-semibold text-lg border-t pt-3">
									<span>Total</span>
									<span>{usdFormatter.format(finalTotal)}</span>
								</div>

								{/* Botones de acción */}
								<div className="space-y-2">
									<Button className="w-full" size="lg">
										Proceder al Checkout
									</Button>
									<div className="grid grid-cols-2 gap-2">
										<SheetClose asChild>
											<Button variant="outline">Seguir Comprando</Button>
										</SheetClose>
										<Button
											variant="outline"
											onClick={clearCart}
											className="text-destructive hover:text-destructive"
										>
											Vaciar Carrito
										</Button>
									</div>
								</div>
							</div>
						</SheetFooter>
					</>
				)}
			</SheetContent>
		</Sheet>
	)
}
