import DeliveryAd from "@/components/home/ads/delivery-ad"
import BestSellingSection from "@/components/home/best-selling-section"
import Header from "@/components/home/header"
import OurProducts from "@/components/home/our-products"
import PromotionSection from "@/components/home/promotion-section"
import SauceInformation from "@/components/home/sauce-information"

export default function Home() {
	return (
		<main className="">
			<Header />
			<PromotionSection />
			<BestSellingSection />
			<DeliveryAd />
			<OurProducts />
			<SauceInformation />
		</main>
	)
}
