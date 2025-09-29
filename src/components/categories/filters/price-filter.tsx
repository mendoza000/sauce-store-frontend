"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useFilterStore } from "@/stores/filter-store"
import { PRICE_RANGES } from "@/utils/filterConstants"
import { usdFormatter } from "@/utils/usdFormatter"

interface PriceFilterProps {
	className?: string
}

export function PriceFilter({ className }: PriceFilterProps) {
	const { priceRange, setPriceRange } = useFilterStore()
	const [localRange, setLocalRange] = useState([priceRange.min, priceRange.max])

	// Sincronizar el estado local con los cambios del store
	useEffect(() => {
		setLocalRange([priceRange.min, priceRange.max])
	}, [priceRange.min, priceRange.max])

	const handleSliderChange = (values: number[]) => {
		setLocalRange(values)
		setPriceRange({ min: values[0], max: values[1] })
	}

	const handlePresetClick = (min: number, max: number) => {
		const newRange = [min, max]
		setLocalRange(newRange)
		setPriceRange({ min, max })
	}

	return (
		<div className={className}>
			{/* Slider de precio */}
			<div className="mb-4">
				<Slider
					value={localRange}
					onValueChange={handleSliderChange}
					max={500}
					min={0}
					step={5}
					className="w-full"
				/>
				<div className="flex justify-between text-xs text-muted-foreground mt-2">
					<span>{usdFormatter.format(localRange[0])}</span>
					<span>{usdFormatter.format(localRange[1])}</span>
				</div>
			</div>

			{/* Rangos predefinidos */}
			<div className="space-y-1">
				<p className="text-xs text-muted-foreground mb-2">Rangos rápidos:</p>
				<div className="grid grid-cols-1 gap-1">
					{PRICE_RANGES.map((range) => {
						const isSelected =
							priceRange.min === range.min && priceRange.max === range.max

						return (
							<Button
								key={range.label}
								variant={isSelected ? "default" : "ghost"}
								size="sm"
								onClick={() => handlePresetClick(range.min, range.max)}
								className="justify-start h-8 text-xs font-normal"
							>
								{range.label}
							</Button>
						)
					})}
				</div>
			</div>
		</div>
	)
}
