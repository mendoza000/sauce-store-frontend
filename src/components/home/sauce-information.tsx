import { IconHeadset, IconShield, IconTruckDelivery } from "@tabler/icons-react"

export default function SauceInformation() {
	return (
		<section className="max-w-7xl mx-auto px-5 mt-10 pb-10 flex flex-col gap-5 md:flex-row justify-between items-start">
			<div className="flex flex-col justify-center items-center">
				<div className="bg-zinc-900/20 p-1 rounded-full w-16 h-16">
					<div className="bg-zinc-900 rounded-full p-2 text-zinc-50 w-full h-full flex justify-center items-center">
						<IconTruckDelivery size={35} />
					</div>
				</div>
				<strong>Delivery rápido y gratis</strong>
				<p className="text-xs max-w-xs text-center">
					Una gran parte de nuestros productos ofrece delivery gratis
				</p>
			</div>

			<div className="flex flex-col justify-center items-center">
				<div className="bg-zinc-900/20 p-1 rounded-full w-16 h-16">
					<div className="bg-zinc-900 rounded-full p-2 text-zinc-50 w-full h-full flex justify-center items-center">
						<IconHeadset size={35} />
					</div>
				</div>
				<strong>Servicio al cliente 24/7</strong>
				<p className="text-xs max-w-xs text-center">
					¿Tienes alguna duda? Contáctenos en cualquier momento
				</p>
			</div>

			<div className="flex flex-col justify-center items-center">
				<div className="bg-zinc-900/20 p-1 rounded-full w-16 h-16">
					<div className="bg-zinc-900 rounded-full p-2 text-zinc-50 w-full h-full flex justify-center items-center">
						<IconShield size={35} />
					</div>
				</div>
				<strong>Seguridad garantizada</strong>
				<p className="text-xs max-w-xs text-center">
					Tenemos mad de 5 años de experiencia en el mercado y garantizamos la
					seguridad de tus compras
				</p>
			</div>
		</section>
	)
}
