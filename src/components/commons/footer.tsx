import { useId } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
	IconBrandInstagram,
	IconBrandFacebook,
	IconBrandTwitter,
	IconBrandTiktok,
} from "@tabler/icons-react"

interface FooterSection {
	title: string
	links: FooterLink[]
}

interface FooterLink {
	href: string
	label: string
}

interface SocialLink {
	href: string
	label: string
	icon: React.ComponentType<{ className?: string }>
}

const FOOTER_SECTIONS: FooterSection[] = [
	{
		title: "Productos",
		links: [
			{ href: "/sneakers", label: "Sneakers" },
			{ href: "/deportivos", label: "Deportivos" },
			{ href: "/casuales", label: "Casuales" },
			{ href: "/ofertas", label: "Ofertas" },
		],
	},
	{
		title: "Marcas",
		links: [
			{ href: "/nike", label: "Nike" },
			{ href: "/adidas", label: "Adidas" },
			{ href: "/jordan", label: "Jordan" },
			{ href: "/new-balance", label: "New Balance" },
		],
	},
	{
		title: "Soporte",
		links: [
			{ href: "/contacto", label: "Contacto" },
			{ href: "/envios", label: "Envíos" },
			{ href: "/devoluciones", label: "Devoluciones" },
			{ href: "/guia-tallas", label: "Guía de tallas" },
		],
	},
	{
		title: "Empresa",
		links: [
			{ href: "/nosotros", label: "Nosotros" },
			{ href: "/politica-privacidad", label: "Política de privacidad" },
			{ href: "/terminos", label: "Términos y condiciones" },
			{ href: "/blog", label: "Blog" },
		],
	},
]

const SOCIAL_LINKS: SocialLink[] = [
	{
		href: "https://instagram.com/saucestore",
		label: "Instagram",
		icon: IconBrandInstagram,
	},
	{
		href: "https://facebook.com/saucestore",
		label: "Facebook",
		icon: IconBrandFacebook,
	},
	{
		href: "https://twitter.com/saucestore",
		label: "Twitter",
		icon: IconBrandTwitter,
	},
	{
		href: "https://tiktok.com/@saucestore",
		label: "TikTok",
		icon: IconBrandTiktok,
	},
]

export default function Footer() {
	const brandHeadingId = useId()
	const newsletterHeadingId = useId()

	return (
		<footer className="bg-zinc-900 text-zinc-100">
			<div className="container mx-auto px-4 py-8 md:py-12">
				{/* Main Footer Content */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
					{/* Brand Section - Full width on mobile, span 2 columns */}
					<section
						className="col-span-2 md:col-span-3 lg:col-span-1"
						aria-labelledby={brandHeadingId}
					>
						<h2
							id={brandHeadingId}
							className="text-2xl font-bold text-white mb-4"
						>
							Sauce Store
						</h2>
						<p className="text-zinc-400 text-sm leading-relaxed mb-6">
							Tu destino favorito para los sneakers más exclusivos y las últimas
							tendencias en calzado deportivo.
						</p>

						{/* Social Media Links */}
						<nav aria-label="Redes sociales">
							<ul className="flex space-x-4 justify-center sm:justify-start">
								{SOCIAL_LINKS.map((social) => {
									const IconComponent = social.icon
									return (
										<li key={social.label}>
											<Button
												variant="ghost"
												size="icon"
												asChild
												className="text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
											>
												<Link
													href={social.href}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`Síguenos en ${social.label}`}
												>
													<IconComponent className="h-5 w-5" />
												</Link>
											</Button>
										</li>
									)
								})}
							</ul>
						</nav>
					</section>

					{/* Footer Navigation Sections - 2 columns on mobile, 1 each on larger screens */}
					{FOOTER_SECTIONS.map((section, index) => {
						const sectionHeadingId = `${brandHeadingId}-${section.title.toLowerCase()}`
						return (
							<nav
								key={section.title}
								className={`
                  ${index < 2 ? "col-span-1" : "col-span-1"} 
                  md:col-span-1 lg:col-span-1
                `}
								aria-labelledby={sectionHeadingId}
							>
								<h3
									id={sectionHeadingId}
									className="text-white font-semibold mb-4 text-sm md:text-base"
								>
									{section.title}
								</h3>
								<ul className="space-y-2 md:space-y-3">
									{section.links.map((link) => (
										<li key={link.label}>
											<Link
												href={link.href}
												className="text-zinc-400 hover:text-white transition-colors duration-200 text-xs md:text-sm"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						)
					})}
				</div>

				{/* Newsletter Section */}
				<section
					className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-zinc-800"
					aria-labelledby={newsletterHeadingId}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start md:items-center">
						<div className="text-center md:text-left">
							<h3
								id={newsletterHeadingId}
								className="text-lg md:text-xl font-semibold text-white mb-2"
							>
								Mantente al día
							</h3>
							<p className="text-zinc-400 text-sm">
								Suscríbete para recibir las últimas noticias, ofertas exclusivas
								y lanzamientos.
							</p>
						</div>
						<form
							className="flex flex-col sm:flex-row gap-3"
							aria-label="Suscripción al newsletter"
						>
							<Input
								type="email"
								placeholder="Tu email"
								required
								aria-label="Dirección de correo electrónico"
								className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400 focus:ring-white focus:border-white text-sm"
							/>
							<Button
								type="submit"
								variant="secondary"
								className="px-4 md:px-6 text-sm md:text-base"
							>
								Suscribirse
							</Button>
						</form>
					</div>
				</section>
			</div>

			<Separator className="bg-zinc-800" />

			{/* Footer Bottom */}
			<div className="container mx-auto px-4 py-4 md:py-6">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
					<p className="text-zinc-400 text-xs md:text-sm text-center sm:text-left">
						© {new Date().getFullYear()} Sauce Store. Todos los derechos
						reservados.
					</p>
					<nav aria-label="Enlaces legales">
						<ul className="flex flex-wrap justify-center sm:justify-end gap-4 md:gap-6 text-xs md:text-sm">
							<li>
								<Link
									href="/politica-privacidad"
									className="text-zinc-400 hover:text-white transition-colors duration-200"
								>
									Política de privacidad
								</Link>
							</li>
							<li>
								<Link
									href="/terminos"
									className="text-zinc-400 hover:text-white transition-colors duration-200"
								>
									Términos de servicio
								</Link>
							</li>
							<li>
								<Link
									href="/cookies"
									className="text-zinc-400 hover:text-white transition-colors duration-200"
								>
									Política de cookies
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}
