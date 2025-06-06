export const scrollTo = (element: string) => {
	const elem = document.getElementById(element)

	if (elem) {
		elem.scrollIntoView({ behavior: 'smooth' })
	}
}
