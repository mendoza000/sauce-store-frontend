"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFilterStore } from "@/stores/filter-store"
import { SHOE_SIZES } from "@/utils/filterConstants"
import { X } from "lucide-react"

interface SizeFilterProps {
	className?: string
}

export function SizeFilter({ className }: SizeFilterProps) {
	const { selectedSizes, toggleSize, clearSizes } = useFilterStore()

	const handleClearSizes = () => {
		clearSizes()
	}

	return (
		<div className={className}>
			<div className="flex items-center justify-between mb-3">
				<h4 className="font-medium text-sm">Tallas</h4>
				{selectedSizes.length > 0 && (
					<Button
						variant="ghost"
						size="sm"
						onClick={handleClearSizes}
						className="h-6 text-xs p-1 text-muted-foreground hover:text-foreground"
					>
						Limpiar
						<X className="h-3 w-3 ml-1" />
					</Button>
				)}
			</div>

			{/* Tallas seleccionadas como badges */}
			{selectedSizes.length > 0 && (
				<div className="flex flex-wrap gap-1 mb-3">
					{selectedSizes.map((size) => (
						<Badge
							key={size}
							variant="secondary"
							className="text-xs cursor-pointer hover:bg-secondary/80"
							onClick={() => toggleSize(size)}
						>
							{size}
							<X className="h-3 w-3 ml-1" />
						</Badge>
					))}
				</div>
			)}

			{/* Grid de tallas */}
			<div className="grid grid-cols-4 gap-1">
				{SHOE_SIZES.map((size) => {
					const isSelected = selectedSizes.includes(size)

					return (
						<Button
							key={size}
							variant={isSelected ? "default" : "outline"}
							size="sm"
							onClick={() => toggleSize(size)}
							className={`h-8 text-xs font-normal ${
								isSelected
									? "bg-primary text-primary-foreground hover:bg-primary/90"
									: "hover:bg-accent hover:text-accent-foreground"
							}`}
						>
							{size}
						</Button>
					)
				})}
			</div>
		</div>
	)
}
