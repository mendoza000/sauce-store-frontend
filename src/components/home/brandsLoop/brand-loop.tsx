import LogoLoop from "@/components/LogoLoop"

const imageLogos = [
	{ src: "/adidas.svg", alt: "Adidas", href: "https://adidas.com" },
	{ src: "/nike.svg", alt: "Nike", href: "https://nike.com" },
	{
		src: "/new-balance.svg",
		alt: "New Balance",
		href: "https://newbalance.com",
	},
	{ src: "/puma.svg", alt: "Puma", href: "https://puma.com" },
	{ src: "/reebok.svg", alt: "Reebok", href: "https://reebok.com" },
	{ src: "/vans.svg", alt: "Vans", href: "https://vans.com" },
	{ src: "/converse.svg", alt: "Converse", href: "https://converse.com" },
]

function BrandLoop() {
	return (
		<div style={{ position: "relative", overflow: "hidden" }} className="my-10">
			<LogoLoop
				logos={imageLogos}
				speed={120}
				direction="left"
				logoHeight={48}
				gap={40}
				fadeOut
				fadeOutColor="#000"
				ariaLabel="Technology partners"
				className="bg-black py-10"
				pauseOnHover={false}
			/>
		</div>
	)
}

export default BrandLoop
