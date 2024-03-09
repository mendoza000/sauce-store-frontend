import HeaderCategories from "./header-categories"

export default function Header() {
	return (
		<header className="grid grid-cols-8 max-w-7xl px-5 mx-auto py-10 gap-5">
			<HeaderCategories />
			<div className="col-span-7"></div>
		</header>
	)
}
