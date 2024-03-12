import SectionTitle from "../ui/section-title"
import ProductCard from "../ui/product-card"

export default function PromotionSection() {
	return (
		<section className="max-w-7xl mx-auto px-5 mt-5 pb-10">
			<SectionTitle title="Promociones rápidas" subtitle="Hoy" />
			<div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
				<ProductCard
					promotion
					price={50}
					oldPrice={70}
					title="Nike Dunk"
					imageAlt="nike-dunk"
					imageURL="/images/dunk.jpg"
				/>

				<ProductCard
					promotion
					price={60}
					oldPrice={90}
					title="Air Max"
					imageAlt="air-max"
					imageURL="/images/airmax.jpg"
				/>

				<ProductCard
					promotion
					price={50}
					oldPrice={70}
					title="Nike AJKO"
					imageAlt="nike-ajko"
					imageURL="/images/ajko.jpg"
				/>

				<ProductCard
					promotion
					price={50}
					oldPrice={70}
					title="Nike Dunk"
					imageAlt="nike-dunk"
					imageURL="/images/dunk.jpg"
				/>

				<ProductCard
					promotion
					price={60}
					oldPrice={90}
					title="Air Max"
					imageAlt="air-max"
					imageURL="/images/airmax.jpg"
				/>
			</div>
		</section>
	)
}
