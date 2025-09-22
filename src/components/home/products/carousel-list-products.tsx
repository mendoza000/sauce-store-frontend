import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import ProductCard from "@/components/ui/product-card"

export default function CarouselListProducts() {
	return (
		<Carousel
			className="mt-7"
			opts={{
				align: "start",
			}}
		>
			<CarouselContent className="-ml-2 md:-ml-4 py-5">
				<CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/5">
					<ProductCard
						promotion
						price={50}
						oldPrice={70}
						title="Nike Dunk"
						imageAlt="nike-dunk"
						imageURL="/images/dunk.jpg"
					/>
				</CarouselItem>
				<CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/5">
					<ProductCard
						promotion
						price={60}
						oldPrice={90}
						title="Air Max"
						imageAlt="air-max"
						imageURL="/images/airmax.jpg"
					/>
				</CarouselItem>

				<CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/5">
					<ProductCard
						promotion
						price={50}
						oldPrice={70}
						title="Nike AJKO"
						imageAlt="nike-ajko"
						imageURL="/images/ajko.jpg"
					/>
				</CarouselItem>

				<CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/5">
					<ProductCard
						promotion
						price={50}
						oldPrice={70}
						title="Nike Dunk"
						imageAlt="nike-dunk"
						imageURL="/images/dunk.jpg"
					/>
				</CarouselItem>
				<CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/5">
					<ProductCard
						promotion
						price={60}
						oldPrice={90}
						title="Air Max"
						imageAlt="air-max"
						imageURL="/images/airmax.jpg"
					/>
				</CarouselItem>

				<CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/5">
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
	)
}
