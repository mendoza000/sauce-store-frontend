"use client"

import { useFilterStore } from "@/stores/filter-store"
import { Button } from "@/components/ui/button"

export function FilterDebugPanel() {
	const filterState = useFilterStore()

	return (
		<div className="fixed top-4 right-4 bg-card border rounded-lg p-4 shadow-lg z-50 max-w-xs">
			<h4 className="font-bold mb-2">Debug - Estado de Filtros</h4>

			<div className="space-y-2 text-xs">
				<div>
					<strong>Marcas:</strong>{" "}
					{filterState.selectedBrands.join(", ") || "Ninguna"}
				</div>

				<div>
					<strong>Precio:</strong> ${filterState.priceRange.min} - $
					{filterState.priceRange.max}
				</div>

				<div>
					<strong>Solo en stock:</strong>{" "}
					{filterState.inStockOnly ? "Sí" : "No"}
				</div>

				<div>
					<strong>Solo promoción:</strong>{" "}
					{filterState.promotionOnly ? "Sí" : "No"}
				</div>
			</div>

			<Button
				variant="outline"
				size="sm"
				className="mt-2 w-full"
				onClick={filterState.clearAllFilters}
			>
				Limpiar todo
			</Button>
		</div>
	)
}
