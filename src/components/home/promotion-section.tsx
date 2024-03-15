import SectionTitle from "../ui/section-title"
import ProductCard from "../ui/product-card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

export default function PromotionSection() {
	return (
		<section className="max-w-7xl mx-auto px-5 mt-5 pb-10">
			<SectionTitle title="Promociones rápidas" subtitle="Hoy" />

			<Carousel className="mt-7">
				<CarouselPrevious className="hidden lg:flex" />
				<CarouselNext className="hidden lg:flex" />

				<CarouselContent>
					<CarouselItem className="basis-1/1 md:basis-1/3 lg:basis-1/5">
						<ProductCard
							promotion
							price={50}
							oldPrice={70}
							title="Nike Dunk"
							imageAlt="nike-dunk"
							imageURL="/images/dunk.jpg"
						/>
					</CarouselItem>
					<CarouselItem className="basis-1/1 md:basis-1/3 lg:basis-1/5">
						<ProductCard
							promotion
							price={60}
							oldPrice={90}
							title="Air Max"
							imageAlt="air-max"
							imageURL="/images/airmax.jpg"
						/>
					</CarouselItem>

					<CarouselItem className="basis-1/1 md:basis-1/3 lg:basis-1/5">
						<ProductCard
							promotion
							price={50}
							oldPrice={70}
							title="Nike AJKO"
							imageAlt="nike-ajko"
							imageURL="/images/ajko.jpg"
						/>
					</CarouselItem>

					<CarouselItem className="basis-1/1 md:basis-1/3 lg:basis-1/5">
						<ProductCard
							promotion
							price={50}
							oldPrice={70}
							title="Nike Dunk"
							imageAlt="nike-dunk"
							imageURL="/images/dunk.jpg"
						/>
					</CarouselItem>
					<CarouselItem className="basis-1/1 md:basis-1/3 lg:basis-1/5">
						<ProductCard
							promotion
							price={60}
							oldPrice={90}
							title="Air Max"
							imageAlt="air-max"
							imageURL="/images/airmax.jpg"
						/>
					</CarouselItem>

					<CarouselItem className="basis-1/1 md:basis-1/3 lg:basis-1/5">
						<ProductCard
							promotion
							price={50}
							oldPrice={70}
							title="Nike AJKO"
							imageAlt="nike-ajko"
							imageURL="/images/ajko.jpg"
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</section>
	)
}
