import SectionTitle from "../ui/section-title"
import CarouselListProducts from "./products/carousel-list-products"

export default function PromotionSection() {
	return (
		<section className="max-w-7xl mx-auto px-5 mt-5 pb-10">
			<SectionTitle title="Promociones rápidas" subtitle="Hoy" />

			<CarouselListProducts />
		</section>
	)
}
