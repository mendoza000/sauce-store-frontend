import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { IconHeart, IconMenu2, IconShoppingCart } from "@tabler/icons-react"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"

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

					<Sheet>
						<SheetTrigger>
							<Button
								size={"icon"}
								variant={"ghost"}
								className="flex md:hidden"
							>
								<IconMenu2 />
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Sauce</SheetTitle>
								<div className="flex flex-col space-y-2 text-left">
									<Link className="hover:underline duration-200" href={"/"}>
										Inicio
									</Link>
									<Link className="hover:underline duration-200" href={"/"}>
										Contacto
									</Link>
									<Link className="hover:underline duration-200" href={"/"}>
										Nosotros
									</Link>
									<Link className="hover:underline duration-200" href={"/"}>
										Cuenta{" "}
									</Link>
								</div>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}
