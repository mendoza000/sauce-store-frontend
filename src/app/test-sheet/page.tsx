"use client"

import { CartDrawer } from "@/components/cart/cart-drawer"
import { useCartStore } from "@/stores/cart-store"
import { Button } from "@/components/ui/button"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

export default function TestSheetPage() {
	const { addItem, clearCart, getTotalItems } = useCartStore()

	// Función para agregar productos de ejemplo
	const addSampleProducts = () => {
		const sampleProducts = [
			{
				id: "test-product-1",
				name: "New Balance 550",
				brand: "New Balance",
				price: 99.99,
				originalPrice: 119.99,
				size: "42",
				image: "/new-balance.png",
				color: "White/Green",
				inStock: true,
			},
			{
				id: "test-product-2",
				name: "Converse Chuck Taylor",
				brand: "Converse",
				price: 79.99,
				size: "41",
				image: "/air-jordan.png", // Usando imagen disponible
				color: "Black/White",
				inStock: true,
			},
		]

		sampleProducts.forEach((product) => {
			addItem(product)
		})
	}
	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="max-w-4xl mx-auto space-y-8">
				<h1 className="text-3xl font-bold text-center mb-8">
					Prueba de Animaciones Sheet
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Cart Drawer */}
					<div className="space-y-4">
						<h2 className="text-xl font-semibold">Cart Drawer con Zustand</h2>
						<p className="text-gray-600">
							Carrito de compras con estado global usando Zustand. Total de
							productos: {getTotalItems()}
						</p>
						<div className="space-y-2">
							<CartDrawer />
							<div className="flex gap-2">
								<Button variant="outline" size="sm" onClick={addSampleProducts}>
									Agregar Productos de Prueba
								</Button>
								<Button variant="outline" size="sm" onClick={clearCart}>
									Vaciar Carrito
								</Button>
							</div>
						</div>
					</div>

					{/* Sheet desde la izquierda */}
					<div className="space-y-4">
						<h2 className="text-xl font-semibold">Sheet desde Izquierda</h2>
						<p className="text-gray-600">
							Panel que se desliza desde la izquierda
						</p>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline">Abrir desde Izquierda</Button>
							</SheetTrigger>
							<SheetContent side="left">
								<SheetHeader>
									<SheetTitle>Panel Izquierdo</SheetTitle>
									<SheetDescription>
										Este panel se desliza desde la izquierda con animación
										suave.
									</SheetDescription>
								</SheetHeader>
								<div className="py-4">
									<p className="text-sm text-gray-600">
										Aquí puedes agregar cualquier contenido que necesites.
									</p>
								</div>
							</SheetContent>
						</Sheet>
					</div>

					{/* Sheet desde arriba */}
					<div className="space-y-4">
						<h2 className="text-xl font-semibold">Sheet desde Arriba</h2>
						<p className="text-gray-600">Panel que se desliza desde arriba</p>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline">Abrir desde Arriba</Button>
							</SheetTrigger>
							<SheetContent side="top">
								<SheetHeader>
									<SheetTitle>Panel Superior</SheetTitle>
									<SheetDescription>
										Este panel se desliza desde arriba con animación suave.
									</SheetDescription>
								</SheetHeader>
								<div className="py-4">
									<p className="text-sm text-gray-600">
										Perfecto para notificaciones o mensajes importantes.
									</p>
								</div>
							</SheetContent>
						</Sheet>
					</div>

					{/* Sheet desde abajo */}
					<div className="space-y-4">
						<h2 className="text-xl font-semibold">Sheet desde Abajo</h2>
						<p className="text-gray-600">Panel que se desliza desde abajo</p>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline">Abrir desde Abajo</Button>
							</SheetTrigger>
							<SheetContent side="bottom">
								<SheetHeader>
									<SheetTitle>Panel Inferior</SheetTitle>
									<SheetDescription>
										Este panel se desliza desde abajo con animación suave.
									</SheetDescription>
								</SheetHeader>
								<div className="py-4">
									<p className="text-sm text-gray-600">
										Ideal para acciones secundarias o información adicional.
									</p>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>

				<div className="text-center mt-8 p-6 bg-white rounded-lg shadow-sm">
					<h3 className="text-lg font-semibold mb-2">
						¿Las animaciones funcionan correctamente?
					</h3>
					<p className="text-gray-600 mb-4">
						Si las animaciones se ven fluidas y suaves, entonces la
						configuración es correcta.
					</p>
					<div className="flex justify-center gap-4">
						<Button>✅ Funcionan Bien</Button>
						<Button variant="outline">❌ Necesitan Ajustes</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
