import HeaderCarrousel from "./header-carrousel"
import HeaderCategories from "./header-categories"
import CurvedLoop from "@/components/CurvedLoop"

export default function Header() {
	return (
		<header className="grid grid-cols-1 py-6 md:py-10 gap-5 px-1 sm:px-8 md:px-12 lg:px-20 bg-white">
			{/* <div className="lg:col-span-1 md:col-span-2 hidden md:flex border-r-2 pr-5 border-zinc-300">
				<HeaderCategories />
			</div> */}

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
