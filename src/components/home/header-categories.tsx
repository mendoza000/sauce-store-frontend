import { IconChevronRight } from "@tabler/icons-react"
import Link from "next/link"

export default function HeaderCategories() {
	return (
		<div className="col-span-1 border-r-2 pr-5 border-zinc-300">
			<strong className="">Categories</strong>
			<ul className="mt-3">
				<li>
					<Link
						href="/"
						className="hover:underline flex justify-between items-center"
					>
						<span>Hombres</span>
						<IconChevronRight size={15} />
					</Link>
				</li>
				<li className="mb-5">
					<Link
						href="/"
						className="hover:underline flex justify-between items-center"
					>
						<span>Mujeres</span>
						<IconChevronRight size={15} />
					</Link>
				</li>

				<li>
					<Link href="/" className="hover:underline">
						<span>Nike</span>
					</Link>
				</li>
				<li>
					<Link href="/" className="hover:underline">
						<span>Adidas</span>
					</Link>
				</li>
				<li>
					<Link href="/" className="hover:underline">
						<span>Converse</span>
					</Link>
				</li>
				<li>
					<Link href="/" className="hover:underline">
						<span>Vans</span>
					</Link>
				</li>
				<li>
					<Link href="/" className="hover:underline">
						<span>Reebok</span>
					</Link>
				</li>
			</ul>
		</div>
	)
}
