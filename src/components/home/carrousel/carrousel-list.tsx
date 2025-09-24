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
					</>
				}
				textButton="Contáctanos"
				title="Construyendo confianza"
			>
				<div className="relative">
					<div className="absolute bg-zinc-900 w-[30rem] h-20 blur-lg -right-44 top-14 z-40" />
					<Image
						src={"/airmax2.png"}
						alt="Trust and Quality"
						width={500}
						height={500}
						className="xl:scale-125 rotate-90 xl:right-28 top-10 relative"
					/>
				</div>
			</CarrouselCard>
		</CarouselContent>
	)
}
