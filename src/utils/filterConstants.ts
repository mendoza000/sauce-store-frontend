// Constantes para las marcas de zapatos
export const SHOE_BRANDS = [
	{
		name: "Nike",
		logo: "/nike.svg",
		count: 15,
	},
	{
		name: "Adidas",
		logo: "/adidas.svg",
		count: 12,
	},
	{
		name: "New Balance",
		logo: "/new-balance.svg",
		count: 8,
	},
	{
		name: "Converse",
		logo: "/converse.svg",
		count: 6,
	},
	{
		name: "Vans",
		logo: "/vans.svg",
		count: 9,
	},
	{
		name: "Puma",
		logo: "/puma.svg",
		count: 7,
	},
	{
		name: "Reebok",
		logo: "/reebok.svg",
		count: 5,
	},
] as const

// Constantes para las categorías
export const PRODUCT_CATEGORIES = [
	{
		name: "Running",
		icon: "🏃",
		count: 18,
	},
	{
		name: "Basketball",
		icon: "🏀",
		count: 12,
	},
	{
		name: "Lifestyle",
		icon: "👟",
		count: 25,
	},
	{
		name: "Training",
		icon: "💪",
		count: 14,
	},
	{
		name: "Skateboarding",
		icon: "🛹",
		count: 10,
	},
	{
		name: "Tennis",
		icon: "🎾",
		count: 8,
	},
] as const

// Constantes para las tallas
export const SHOE_SIZES = [
	"35",
	"35.5",
	"36",
	"36.5",
	"37",
	"37.5",
	"38",
	"38.5",
	"39",
	"39.5",
	"40",
	"40.5",
	"41",
	"41.5",
	"42",
	"42.5",
	"43",
	"43.5",
	"44",
	"44.5",
	"45",
	"45.5",
	"46",
	"46.5",
	"47",
] as const

// Constantes para los colores populares
export const POPULAR_COLORS = [
	{
		name: "Negro",
		value: "#000000",
		count: 32,
	},
	{
		name: "Blanco",
		value: "#FFFFFF",
		count: 28,
	},
	{
		name: "Rojo",
		value: "#DC2626",
		count: 15,
	},
	{
		name: "Azul",
		value: "#2563EB",
		count: 18,
	},
	{
		name: "Verde",
		value: "#059669",
		count: 12,
	},
	{
		name: "Gris",
		value: "#6B7280",
		count: 22,
	},
	{
		name: "Marrón",
		value: "#92400E",
		count: 9,
	},
	{
		name: "Rosa",
		value: "#EC4899",
		count: 7,
	},
] as const

// Rangos de precios predefinidos
export const PRICE_RANGES = [
	{
		label: "Menos de $50",
		min: 0,
		max: 50,
	},
	{
		label: "$50 - $100",
		min: 50,
		max: 100,
	},
	{
		label: "$100 - $150",
		min: 100,
		max: 150,
	},
	{
		label: "$150 - $200",
		min: 150,
		max: 200,
	},
	{
		label: "Más de $200",
		min: 200,
		max: 500,
	},
] as const

// Tipos para extraer los valores
export type ShoeBrand = (typeof SHOE_BRANDS)[number]["name"]
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]["name"]
export type ShoeSize = (typeof SHOE_SIZES)[number]
export type PopularColor = (typeof POPULAR_COLORS)[number]["name"]
