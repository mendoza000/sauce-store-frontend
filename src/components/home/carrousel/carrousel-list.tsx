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
						Descubre nuestra colección premium de sneakers auténticos.{" "}
						<br className="hidden sm:block" />
						Cada par está cuidadosamente seleccionado para garantizar
						originalidad y calidad excepcional. <br />
						<strong>Obtén 15% de descuento en tu primera compra</strong> y únete
						a la familia Sauce.
					</>
				}
				textButton="Explorar Colección"
				title="Bienvenido a Sauce Store"
			>
				<div className="">
					<Image
						src={"/new-balance.png"}
						alt="Sauce Store Collection"
						width={700}
						height={700}
					/>
				</div>
			</CarrouselCard>

			<CarrouselCard
				actionButton={() => {}}
				description={
					<>
						Somos más que una tienda, somos tu socio en streetwear. <br />
						Envío gratuito en compras +$100, devoluciones fáciles y{" "}
						<strong>garantía de autenticidad del 100%</strong>. <br />
						Tu satisfacción es nuestra prioridad.
					</>
				}
				textButton="Conocer Más"
				title="Tu Experiencia es Nuestra Pasión"
			>
				<Image
					src={"/cj.png"}
					alt="Customer Experience"
					width={700}
					height={700}
					className="-rotate-12"
				/>
			</CarrouselCard>

			<CarrouselCard
				actionButton={() => {}}
				description={
					<>
						Únete a miles de sneakerheads que confían en nosotros. <br />
						Con +5 años en el mercado, tenemos una reputación sólida basada en{" "}
						<strong>confianza, calidad y servicio excepcional</strong>. <br />
						¿Dudas? Nuestro equipo experto está aquí para ayudarte.
					</>
				}
				textButton="Contáctanos"
				title="Construyendo Confianza Paso a Paso"
			>
				<Image
					src={"/cajas3.png"}
					alt="Trust and Quality"
					width={700}
					height={700}
				/>
			</CarrouselCard>
		</CarouselContent>
	)
}
