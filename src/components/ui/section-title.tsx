export default function SectionTitle({
	title,
	subtitle,
}: {
	title: string
	subtitle: string
}) {
	return (
		<>
			<p className="border-l-8 border-black pl-3 mb-3">{subtitle}</p>
			<h2 className="text-2xl font-bold">{title}</h2>
		</>
	)
}
