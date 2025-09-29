"use client"

import { useId } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { useFilterStore } from "@/stores/filter-store"
import { Package, Tag } from "lucide-react"

interface AdditionalFiltersProps {
	className?: string
}

export function AdditionalFilters({ className }: AdditionalFiltersProps) {
	const { inStockOnly, promotionOnly, toggleInStockOnly, togglePromotionOnly } =
		useFilterStore()
	const inStockId = useId()
	const promotionId = useId()

	return (
		<div className={className}>
			<div className="space-y-3">
				{/* Solo en stock */}
				<div className="flex items-center space-x-2">
					<Checkbox
						id={inStockId}
						checked={inStockOnly}
						onCheckedChange={toggleInStockOnly}
						className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
					/>
					<label
						htmlFor={inStockId}
						className="flex items-center space-x-2 text-sm cursor-pointer hover:text-primary transition-colors"
					>
						<Package className="h-4 w-4 text-green-600" />
						<span>Solo disponibles</span>
					</label>
				</div>

				{/* Solo en promoción */}
				<div className="flex items-center space-x-2">
					<Checkbox
						id={promotionId}
						checked={promotionOnly}
						onCheckedChange={togglePromotionOnly}
						className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
					/>
					<label
						htmlFor={promotionId}
						className="flex items-center space-x-2 text-sm cursor-pointer hover:text-primary transition-colors"
					>
						<Tag className="h-4 w-4 text-red-600" />
						<span>En promoción</span>
					</label>
				</div>
			</div>
		</div>
	)
}
