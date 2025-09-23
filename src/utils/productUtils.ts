import { v4 as uuidv4 } from "uuid"

export interface ProductData {
	title: string
	brand: string
	price: number
	oldPrice?: number
	promotion?: boolean
	color: string
	imageAlt: string
	imageURL: string
	inStock?: boolean
	description?: string
	sizes?: string[]
	category?: string
	features?: string[]
}

export interface Product extends ProductData {
	id: string
	slug: string
}

/**
 * Genera un slug a partir del título del producto
 */
function generateSlug(title: string, id: string): string {
	return (
		title
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, "") // Remover caracteres especiales
			.replace(/\s+/g, "-") // Reemplazar espacios con guiones
			.replace(/-+/g, "-") // Remover guiones múltiples
			.trim() +
		"-" +
		id.slice(0, 8)
	) // Agregar parte del ID para unicidad
}

/**
 * Genera un producto con un UUID único y slug
 */
export function createProduct(productData: ProductData): Product {
	const id = uuidv4()
	const slug = generateSlug(productData.title, id)

	return {
		id,
		slug,
		inStock: true,
		promotion: false,
		description: "Descripción del producto disponible próximamente.",
		sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
		category: "Sneakers",
		features: [
			"Comodidad superior",
			"Diseño versátil",
			"Materiales de calidad",
		],
		...productData,
	}
}

/**
 * Genera múltiples productos con UUIDs únicos
 */
export function createProducts(productsData: ProductData[]): Product[] {
	return productsData.map(createProduct)
}

/**
 * Datos de productos de muestra
 */
export const SAMPLE_PRODUCTS_DATA: ProductData[] = [
	{
		title: "Nike Dunk Low Panda",
		brand: "Nike",
		price: 120,
		oldPrice: 150,
		promotion: true,
		color: "White/Black",
		imageAlt: "nike-dunk-low-panda",
		imageURL: "/images/dunk.jpg",
		inStock: true,
		description:
			"Las Nike Dunk Low 'Panda' presentan un colorway clásico en blanco y negro que se ha convertido en un icono del streetwear. Con su silueta retro y construcción premium, estas zapatillas ofrecen estilo y comodidad para el uso diario.",
		category: "Lifestyle",
		features: [
			"Parte superior de cuero premium",
			"Suela de goma para tracción superior",
			"Diseño icónico de los 80s",
			"Comodidad todo el día",
		],
		sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
	},
	{
		title: "Air Max 90",
		brand: "Nike",
		price: 130,
		oldPrice: 160,
		promotion: true,
		color: "White/Red",
		imageAlt: "nike-air-max-90",
		imageURL: "/images/airmax.jpg",
		inStock: true,
		description:
			"Las Air Max 90 combinan el estilo clásico con la innovación moderna. Con su icónica unidad Air visible en el talón y materiales de primera calidad, estas zapatillas ofrecen comodidad y estilo incomparables.",
		category: "Running",
		features: [
			"Unidad Air Max visible",
			"Amortiguación superior",
			"Parte superior transpirable",
			"Suela Waffle para tracción",
		],
		sizes: ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
	},
	{
		title: "Nike AJKO Low Bred",
		brand: "Nike",
		price: 140,
		oldPrice: 175,
		promotion: true,
		color: "Black/Red",
		imageAlt: "nike-ajko-low-bred",
		imageURL: "/images/ajko.jpg",
		inStock: true,
		description:
			"Las Nike AJKO Low 'Bred' rinden homenaje al legado del basketball con su esquema de colores negro y rojo. Perfectas para quienes buscan el estilo Jordan con un toque más accesible.",
		category: "Basketball",
		features: [
			"Inspiradas en el legado Jordan",
			"Construcción duradera",
			"Estilo retro auténtico",
			"Tracción optimizada para la cancha",
		],
		sizes: ["39", "40", "41", "42", "43", "44", "45"],
	},

	{
		title: "Nike Dunk Low Panda",
		brand: "Nike",
		price: 120,
		oldPrice: 150,
		promotion: true,
		color: "White/Black",
		imageAlt: "nike-dunk-low-panda",
		imageURL: "/images/dunk.jpg",
		inStock: true,
		description:
			"Las Nike Dunk Low 'Panda' presentan un colorway clásico en blanco y negro que se ha convertido en un icono del streetwear. Con su silueta retro y construcción premium, estas zapatillas ofrecen estilo y comodidad para el uso diario.",
		category: "Lifestyle",
		features: [
			"Parte superior de cuero premium",
			"Suela de goma para tracción superior",
			"Diseño icónico de los 80s",
			"Comodidad todo el día",
		],
		sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
	},
	{
		title: "Air Max 90",
		brand: "Nike",
		price: 130,
		oldPrice: 160,
		promotion: true,
		color: "White/Red",
		imageAlt: "nike-air-max-90",
		imageURL: "/images/airmax.jpg",
		inStock: true,
		description:
			"Las Air Max 90 combinan el estilo clásico con la innovación moderna. Con su icónica unidad Air visible en el talón y materiales de primera calidad, estas zapatillas ofrecen comodidad y estilo incomparables.",
		category: "Running",
		features: [
			"Unidad Air Max visible",
			"Amortiguación superior",
			"Parte superior transpirable",
			"Suela Waffle para tracción",
		],
		sizes: ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
	},
	{
		title: "Nike AJKO Low Bred",
		brand: "Nike",
		price: 140,
		oldPrice: 175,
		promotion: true,
		color: "Black/Red",
		imageAlt: "nike-ajko-low-bred",
		imageURL: "/images/ajko.jpg",
		inStock: true,
		description:
			"Las Nike AJKO Low 'Bred' rinden homenaje al legado del basketball con su esquema de colores negro y rojo. Perfectas para quienes buscan el estilo Jordan con un toque más accesible.",
		category: "Basketball",
		features: [
			"Inspiradas en el legado Jordan",
			"Construcción duradera",
			"Estilo retro auténtico",
			"Tracción optimizada para la cancha",
		],
		sizes: ["39", "40", "41", "42", "43", "44", "45"],
	},
]

/**
 * Buscar producto por slug
 */
export function findProductBySlug(
	products: Product[],
	slug: string
): Product | undefined {
	return products.find((product) => product.slug === slug)
}
