"use client"

import { SortDesc } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	useFilterStore,
	SORT_OPTIONS,
	type SortOption,
} from "@/stores/filter-store"

interface SortDropdownProps {
	className?: string
}

/**
 * Componente dropdown para ordenar productos por precio
 * Utiliza shadcn/ui components y sigue principios de clean code
 */
export function SortDropdown({ className }: SortDropdownProps) {
	const { sortBy, setSortBy } = useFilterStore()

	const handleSortChange = (value: string) => {
		setSortBy(value as SortOption)
	}

	const getCurrentSortLabel = () => {
		const currentOption = SORT_OPTIONS.find((option) => option.value === sortBy)
		return currentOption?.label || "Por defecto"
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="sm" className={`h-8 ${className}`}>
					<SortDesc className="h-4 w-4 mr-1" />
					<span className="hidden sm:inline">{getCurrentSortLabel()}</span>
					<span className="sm:hidden">Ordenar</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuRadioGroup value={sortBy} onValueChange={handleSortChange}>
					{SORT_OPTIONS.map((option) => (
						<DropdownMenuRadioItem
							key={option.value}
							value={option.value}
							className="cursor-pointer"
						>
							<div className="flex flex-col">
								<span className="font-medium">{option.label}</span>
								{option.description && (
									<span className="text-xs text-muted-foreground">
										{option.description}
									</span>
								)}
							</div>
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
