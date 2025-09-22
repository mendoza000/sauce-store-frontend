import ShinyText from "@/components/ShinyText"

interface InformationItemProps {
	icon: React.ReactNode
	title: string
	description: string
	speed?: number
}

function InformationItem({
	icon,
	title,
	description,
	speed = 3,
}: InformationItemProps) {
	return (
		<div className="flex flex-col justify-center items-center mx-auto lg:mx-0">
			<div className="bg-zinc-900/20 p-1 rounded-full w-16 h-16">
				<div className="bg-zinc-900 rounded-full p-2 text-zinc-50 w-full h-full flex justify-center items-center">
					{icon}
				</div>
			</div>

			<ShinyText text={title} speed={speed} />
			<p className="text-xs max-w-xs text-center">{description}</p>
		</div>
	)
}

export default InformationItem
