import { IconHeadset, IconShield, IconTruckDelivery } from "@tabler/icons-react"
import InformationItem from "./information/information-item"

export default function SauceInformation() {
	return (
		<section className="max-w-7xl mx-auto px-5 mt-10 pb-10 flex flex-col gap-5 md:flex-row justify-between items-start">
			<InformationItem
				icon={<IconTruckDelivery size={35} />}
				title="Delivery rápido y gratis"
				description="Una gran parte de nuestros productos ofrece delivery gratis"
				speed={4}
			/>

			<InformationItem
				icon={<IconHeadset size={35} />}
				title="Servicio al cliente 24/7"
				description="¿Tienes alguna duda? Contáctenos en cualquier momento"
			/>

			<InformationItem
				icon={<IconShield size={35} />}
				title="Seguridad garantizada"
				description="Tenemos mad de 5 años de experiencia en el mercado y garantizamos la seguridad de tus compras"
				speed={3.5}
			/>
		</section>
	)
}
