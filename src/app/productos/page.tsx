"use client"

import CategoriesSide from "@/components/categories/categories-side"
import { ALL_PRODUCTS } from "@/utils/products"
import { useFilteredProducts } from "@/hooks/use-filtered-products"
import { useFilterStore } from "@/stores/filter-store"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ui/product-card"
import { SortDropdown } from "@/components/product/sort-dropdown"
import { X } from "lucide-react"

function ProductsPage() {
	// Usar productos generados de forma consistente
	const allProducts = ALL_PRODUCTS

	// Aplicar filtros
	const { filteredProducts, filterStats } = useFilteredProducts(allProducts)

	// Estado de filtros para mostrar badges activos
	const {
		selectedBrands,
		priceRange,
		inStockOnly,
		promotionOnly,
		toggleBrand,
		resetPriceRange,
		toggleInStockOnly,
		togglePromotionOnly,
		clearAllFilters,
	} = useFilterStore()

	return (
		<main className="min-h-screen pt-20">
			<div className="container mx-auto px-4 py-6">
				{/* Header de la página */}
				<div className="mb-6">
					<h1 className="text-3xl font-bold mb-2">Catálogo de Zapatos</h1>
					<p className="text-muted-foreground">
						Descubre nuestra colección completa de zapatillas deportivas y
						casuales
					</p>
				</div>

				<div className="flex gap-6">
					{/* Sidebar de filtros - Solo visible en desktop */}
					<div className="hidden lg:block">
						<CategoriesSide />
					</div>

					{/* Contenido principal */}
					<div className="flex-1">
						{/* Filtros móviles - Solo visible en móviles */}
						<div className="lg:hidden mb-4">
							<CategoriesSide />
						</div>

						{/* Barra de herramientas */}
						<div className="flex items-center justify-between mb-6 p-4 bg-card border rounded-lg">
							<div className="flex items-center space-x-4">
								<Badge variant="secondary" className="px-3 py-1">
									{filteredProducts.length} de {allProducts.length} productos
								</Badge>

								{/* Filtros activos como badges removibles */}
								<div className="hidden sm:flex items-center space-x-2 flex-wrap">
									{/* Marcas seleccionadas */}
									{selectedBrands.map((brand) => (
										<Badge
											key={brand}
											variant="outline"
											className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
											onClick={() => toggleBrand(brand)}
										>
											{brand} ({filterStats.brandCounts[brand] || 0})
											<X className="h-3 w-3 ml-1" />
										</Badge>
									))}

									{/* Rango de precio */}
									{(priceRange.min > 0 || priceRange.max < 500) && (
										<Badge
											variant="outline"
											className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
											onClick={resetPriceRange}
										>
											${priceRange.min} - ${priceRange.max}
											<X className="h-3 w-3 ml-1" />
										</Badge>
									)}

									{/* Solo disponibles */}
									{inStockOnly && (
										<Badge
											variant="outline"
											className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
											onClick={toggleInStockOnly}
										>
											Solo disponibles ({filterStats.inStockCount})
											<X className="h-3 w-3 ml-1" />
										</Badge>
									)}

									{/* En promoción */}
									{promotionOnly && (
										<Badge
											variant="outline"
											className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
											onClick={togglePromotionOnly}
										>
											En promoción ({filterStats.promotionCount})
											<X className="h-3 w-3 ml-1" />
										</Badge>
									)}
								</div>
							</div>

							<div className="flex items-center space-x-2">
								{/* Dropdown de ordenamiento */}
								<SortDropdown />
							</div>
						</div>

						{/* Grid de productos */}
						{filteredProducts.length > 0 ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
								{filteredProducts.map((product) => (
									<ProductCard
										key={product.id}
										productId={product.id}
										slug={product.slug}
										title={product.title}
										brand={product.brand}
										price={product.price}
										oldPrice={product.oldPrice}
										promotion={product.promotion}
										color={product.color}
										imageAlt={product.imageAlt}
										imageURL={product.imageURL}
										inStock={product.inStock}
										description={product.description}
										sizes={product.sizes}
										category={product.category}
										features={product.features}
									/>
								))}
							</div>
						) : (
							<div className="text-center py-12">
								<div className="text-6xl mb-4">👟</div>
								<h3 className="text-xl font-semibold mb-2">
									No se encontraron productos
								</h3>
								<p className="text-muted-foreground mb-4">
									Intenta ajustar los filtros para ver más resultados
								</p>
								<Button variant="outline" onClick={clearAllFilters}>
									Limpiar todos los filtros
								</Button>
							</div>
						)}

						{/* Pagination o Load More - Solo mostrar si hay productos */}
						{filteredProducts.length > 0 && (
							<div className="flex justify-center mt-12">
								<Button variant="outline" size="lg">
									Cargar más productos
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default ProductsPage
