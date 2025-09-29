"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useFilterStore } from "@/stores/filter-store"
import { PRODUCT_CATEGORIES } from "@/utils/filterConstants"
import { X } from "lucide-react"

interface CategoryFilterProps {
	className?: string
}

export function CategoryFilter({ className }: CategoryFilterProps) {
	const { selectedCategories, toggleCategory, clearCategories } =
		useFilterStore()

	const handleClearCategories = () => {
		clearCategories()
	}

	return (
		<div className={className}>
			<div className="flex items-center justify-between mb-3">
				<h4 className="font-medium text-sm">Categorías</h4>
				{selectedCategories.length > 0 && (
					<Button
						variant="ghost"
						size="sm"
						onClick={handleClearCategories}
						className="h-6 text-xs p-1 text-muted-foreground hover:text-foreground"
					>
						Limpiar
						<X className="h-3 w-3 ml-1" />
					</Button>
				)}
			</div>

			{/* Categorías seleccionadas como badges */}
			{selectedCategories.length > 0 && (
				<div className="flex flex-wrap gap-1 mb-3">
					{selectedCategories.map((category) => (
						<Badge
							key={category}
							variant="secondary"
							className="text-xs cursor-pointer hover:bg-secondary/80"
							onClick={() => toggleCategory(category)}
						>
							{category}
							<X className="h-3 w-3 ml-1" />
						</Badge>
					))}
				</div>
			)}

			{/* Lista de categorías */}
			<div className="space-y-2">
				{PRODUCT_CATEGORIES.map((category) => {
					const isSelected = selectedCategories.includes(category.name)

					return (
						<div key={category.name} className="flex items-center space-x-2">
							<Checkbox
								id={`category-${category.name}`}
								checked={isSelected}
								onCheckedChange={() => toggleCategory(category.name)}
								className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
							/>
							<label
								htmlFor={`category-${category.name}`}
								className="flex items-center space-x-2 text-sm cursor-pointer hover:text-primary transition-colors flex-1"
							>
								<div className="flex items-center space-x-2 flex-1">
									<span
										className="text-base"
										role="img"
										aria-label={category.name}
									>
										{category.icon}
									</span>
									<span className="flex-1">{category.name}</span>
									<span className="text-xs text-muted-foreground">
										({category.count})
									</span>
								</div>
							</label>
						</div>
					)
				})}
			</div>
		</div>
	)
}
