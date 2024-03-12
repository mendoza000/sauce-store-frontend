import Image from "next/image"
import { CarouselContent } from "../../ui/carousel"
import CarrouselCard from "./carrousel-card"

export default function CarrouselList() {
	return (
		<CarouselContent>
			<CarrouselCard
				actionButton={() => {}}
				description={
					<>
						Un símbolo de la cultura Sneakerhead desde 1985 <br />
						Obtén hasta un{" "}
						<strong>10% de descuento en tu primera compra</strong>
					</>
				}
				textButton="Comprar ahora"
				title="Nike Dunk"
			>
				<Image src={"/dunk.png"} alt="Nike Dunk" width={400} height={400} />
			</CarrouselCard>

			<CarrouselCard
				actionButton={() => {}}
				description={
					<>
						Contamos con los modelos más exclusivos del mercado <br />
						Consigue <strong>envíos gratis </strong>
						con nuestro sistema de fidelidad
					</>
				}
				textButton="Ver más"
				title="Exclusividad"
			>
				<Image
					src={"/air-jordan.png"}
					alt="Nike Jordan"
					width={400}
					height={400}
					className="-rotate-12"
				/>
			</CarrouselCard>

			<CarrouselCard
				actionButton={() => {}}
				description={
					<>
						Te ofrecemos calidad en cada uno de tus pasos
						<br />
						No dudes en preguntarnos por{" "}
						<strong>la calidad de tu producto</strong>
					</>
				}
				textButton="Contactarnos"
				title="Calidad"
			>
				<Image
					src={"/new-balance-2.png"}
					alt="New Balance"
					width={400}
					height={400}
				/>
			</CarrouselCard>
		</CarouselContent>
	)
}
