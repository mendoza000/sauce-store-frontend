import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { IconHeart, IconShoppingCart } from "@tabler/icons-react"

export default function Navbar() {
	return (
		<nav className=" border-b-2 border-zinc-300">
			<div className="max-w-7xl px-5 mx-auto grid grid-cols-2 md:grid-cols-6 items-center py-4">
				<strong className="text-xl lg:col-span-2">Sauce</strong>
				<div className="md:flex gap-5 mx-auto hidden md:col-span-4 lg:col-span-2">
					<Link href={"/"}>Inicio</Link>
					<Link href={"/"}>Contacto</Link>
					<Link href={"/"}>Nosotros</Link>
					<Link href={"/"}>Cuenta </Link>
				</div>
				<div className="flex gap-3 justify-end lg:col-span-2">
					<Input
						placeholder="Buscar..."
						className="max-w-[15rem] hidden lg:flex"
					/>
					<Button size={"icon"} variant={"outline"}>
						<IconHeart />
					</Button>
					<Button size={"icon"} variant={"outline"}>
						<IconShoppingCart />
					</Button>
				</div>
			</div>
		</nav>
	)
}
