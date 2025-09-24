import HeaderCarrousel from "./header-carrousel"
import CurvedLoop from "@/components/CurvedLoop"

export default function Header() {
	return (
		<header className="grid grid-cols-1 py-6 md:py-10 gap-5 px-1 sm:px-8 md:px-12 lg:px-10 xl:px-14 bg-white mt-14">
			<HeaderCarrousel />

			<CurvedLoop
				marqueeText="¡Camina con Estilo! ✦ Descubre los Últimos Diseños ✦ Ofertas Exclusivas ✦ Envío Gratis ✦ Calidad Premium ✦ Promociones increíbles ✦ Compra cuando quieras, luce fashion todo el tiempo ✦"
				textColor="black"
				textSizeClasses="text-[5rem] xl:text-2xl"
				speed={0.5}
				curveAmount={30}
				direction="right"
				interactive={false}
				className="h-5"
			/>
		</header>
	)
}
