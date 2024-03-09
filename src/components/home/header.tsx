import HeaderCategories from "./header-categories"
import HeaderCarrousel from "./header-carrousel"

export default function Header() {
	return (
		<header className="grid grid-cols-1 md:grid-cols-8 max-w-7xl px-5 mx-auto py-10 gap-5">
			<div className="lg:col-span-1 md:col-span-2 hidden md:flex border-r-2 pr-5 border-zinc-300">
				<HeaderCategories />
			</div>
			<div className="lg:col-span-7 md:col-span-6 lg:px-10">
				<HeaderCarrousel />
			</div>
		</header>
	)
}
