"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFilterStore } from "@/stores/filter-store"
import { POPULAR_COLORS } from "@/utils/filterConstants"
import { X, Check } from "lucide-react"

interface ColorFilterProps {
	className?: string
}

export function ColorFilter({ className }: ColorFilterProps) {
	const { selectedColors, toggleColor, clearColors } = useFilterStore()

	const handleClearColors = () => {
		clearColors()
	}

	return (
		<div className={className}>
			<div className="flex items-center justify-between mb-3">
				<h4 className="font-medium text-sm">Colores</h4>
				{selectedColors.length > 0 && (
					<Button
						variant="ghost"
						size="sm"
						onClick={handleClearColors}
						className="h-6 text-xs p-1 text-muted-foreground hover:text-foreground"
					>
						Limpiar
						<X className="h-3 w-3 ml-1" />
					</Button>
				)}
			</div>

			{/* Colores seleccionados como badges */}
			{selectedColors.length > 0 && (
				<div className="flex flex-wrap gap-1 mb-3">
					{selectedColors.map((colorName) => {
						const color = POPULAR_COLORS.find((c) => c.name === colorName)
						return (
							<Badge
								key={colorName}
								variant="secondary"
								className="text-xs cursor-pointer hover:bg-secondary/80"
								onClick={() => toggleColor(colorName)}
							>
								<div
									className="w-2 h-2 rounded-full mr-1 border border-gray-300"
									style={{ backgroundColor: color?.value }}
								/>
								{colorName}
								<X className="h-3 w-3 ml-1" />
							</Badge>
						)
					})}
				</div>
			)}

			{/* Grid de colores */}
			<div className="grid grid-cols-2 gap-2">
				{POPULAR_COLORS.map((color) => {
					const isSelected = selectedColors.includes(color.name)

					return (
						<Button
							key={color.name}
							variant="ghost"
							size="sm"
							onClick={() => toggleColor(color.name)}
							className="h-8 justify-start p-2 hover:bg-accent hover:text-accent-foreground"
						>
							<div className="flex items-center space-x-2 w-full">
								<div
									className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
										isSelected ? "border-primary" : "border-gray-300"
									}`}
									style={{ backgroundColor: color.value }}
								>
									{isSelected && (
										<Check
											className="h-2 w-2 text-white"
											style={{
												color:
													color.value === "#FFFFFF" ? "#000000" : "#FFFFFF",
											}}
										/>
									)}
								</div>
								<span className="text-xs flex-1 text-left">{color.name}</span>
								<span className="text-xs text-muted-foreground">
									({color.count})
								</span>
							</div>
						</Button>
					)
				})}
			</div>
		</div>
	)
}
