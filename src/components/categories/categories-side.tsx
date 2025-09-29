"use client"

import { useState, forwardRef } from "react"
import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
	DrawerTitle,
	DrawerHeader,
} from "@/components/ui/drawer"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { useFilterStore } from "@/stores/filter-store"

// Componentes de filtros
import { BrandFilter } from "./filters/brand-filter"
import { PriceFilter } from "./filters/price-filter"
import { AdditionalFilters } from "./filters/additional-filters"

import { Filter, ChevronDown, RotateCcw } from "lucide-react"

const CollapsibleButton = forwardRef<
	HTMLButtonElement,
	{
		text: string
		openSection: boolean
	} & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ text, openSection, ...props }, ref) => {
	return (
		<Button
			ref={ref}
			variant="ghost"
			className="w-full justify-between p-0 px-3 py-1 h-auto"
			{...props}
		>
			<span className="font-medium text-sm">{text}</span>
			<ChevronDown
				className={`h-4 w-4 transition-transform ${
					openSection ? "transform rotate-180" : ""
				}`}
			/>
		</Button>
	)
})

CollapsibleButton.displayName = "CollapsibleButton"

interface FiltersContentProps {
	openSections: {
		brands: boolean
		categories: boolean
		price: boolean
		sizes: boolean
		colors: boolean
		additional: boolean
	}
	toggleSection: (section: keyof FiltersContentProps["openSections"]) => void
	handleClearAllFilters: () => void
}

// Componente de filtros reutilizable
function FiltersContent({
	openSections,
	toggleSection,
	handleClearAllFilters,
}: FiltersContentProps) {
	return (
		<div className="space-y-6">
			{/* Header con botón limpiar todo */}
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-semibold">Filtros</h3>
				<Button
					variant="ghost"
					size="sm"
					onClick={handleClearAllFilters}
					className="text-muted-foreground hover:text-foreground"
				>
					<RotateCcw className="h-4 w-4 mr-1" />
					Limpiar todo
				</Button>
			</div>

			<Separator />

			{/* Filtro de Marcas */}
			<Collapsible
				open={openSections.brands}
				onOpenChange={() => toggleSection("brands")}
			>
				<CollapsibleTrigger asChild>
					<CollapsibleButton text="Marcas" openSection={openSections.brands} />
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-3">
					<BrandFilter />
				</CollapsibleContent>
			</Collapsible>

			<Separator />

			{/* Filtro de Precios */}
			<Collapsible
				open={openSections.price}
				onOpenChange={() => toggleSection("price")}
			>
				<CollapsibleTrigger asChild>
					<CollapsibleButton text="Precio" openSection={openSections.price} />
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-3">
					<PriceFilter />
				</CollapsibleContent>
			</Collapsible>

			<Separator />

			{/* Filtros Adicionales */}
			<Collapsible
				open={openSections.additional}
				onOpenChange={() => toggleSection("additional")}
			>
				<CollapsibleTrigger asChild>
					<CollapsibleButton
						text="Disponibilidad"
						openSection={openSections.additional}
					/>
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-3">
					<AdditionalFilters />
				</CollapsibleContent>
			</Collapsible>
		</div>
	)
}

function CategoriesSide() {
	const isMobile = useIsMobile()
	const { clearAllFilters } = useFilterStore()

	// Estados para colapsar secciones en desktop
	const [openSections, setOpenSections] = useState({
		brands: true,
		categories: true,
		price: true,
		sizes: false,
		colors: false,
		additional: false,
	})

	const toggleSection = (section: keyof typeof openSections) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}))
	}

	const handleClearAllFilters = () => {
		clearAllFilters()
	}

	// En móviles, mostrar como drawer
	if (isMobile) {
		return (
			<div className="lg:hidden">
				<Drawer>
					<DrawerTrigger asChild>
						<Button variant="outline" className="w-full mb-4">
							<Filter className="h-4 w-4 mr-2" />
							Filtros
						</Button>
					</DrawerTrigger>
					<DrawerContent className="h-[85vh]">
						<DrawerHeader>
							<DrawerTitle>Filtros de productos</DrawerTitle>
						</DrawerHeader>
						<div className="px-4 pb-4 overflow-y-auto">
							<FiltersContent
								openSections={openSections}
								toggleSection={toggleSection}
								handleClearAllFilters={handleClearAllFilters}
							/>
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		)
	}

	// En desktop, mostrar como sidebar fijo
	return (
		<aside className="hidden lg:block w-72 shrink-0">
			<div className="sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4">
				<div className="bg-card border rounded-lg p-6">
					<FiltersContent
						openSections={openSections}
						toggleSection={toggleSection}
						handleClearAllFilters={handleClearAllFilters}
					/>
				</div>
			</div>
		</aside>
	)
}

export default CategoriesSide
