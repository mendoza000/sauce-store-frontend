"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { useFilterStore } from "@/stores/filter-store"
import { SHOE_BRANDS } from "@/utils/filterConstants"

interface BrandFilterProps {
	className?: string
}

export function BrandFilter({ className }: BrandFilterProps) {
	const { selectedBrands, toggleBrand } = useFilterStore()

	return (
		<div className={className}>
			{/* Lista de marcas */}
			<div className="space-y-2">
				{SHOE_BRANDS.map((brand) => {
					const isSelected = selectedBrands.includes(brand.name)

					return (
						<div key={brand.name} className="flex items-center space-x-2">
							<Checkbox
								id={`brand-${brand.name}`}
								checked={isSelected}
								onCheckedChange={() => toggleBrand(brand.name)}
								className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
							/>
							<label
								htmlFor={`brand-${brand.name}`}
								className="flex items-center space-x-2 text-sm cursor-pointer hover:text-primary transition-colors flex-1"
							>
								<div className="flex items-center space-x-2 flex-1">
									<span className="flex-1">{brand.name}</span>
									<span className="text-xs text-muted-foreground">
										({brand.count})
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
