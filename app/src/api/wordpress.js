const baseUrl = "https://laluna-dessous.de/wp-json/wp/v2/"

export async function getPages(parent = undefined, orderBy="menu_order", perPage=100) {
    const parentFilter = parent ? `&parent=${parent}` : ""
	const url = `https://laluna-dessous.de/wp-json/wp/v2/pages?per_page=${perPage}&orderBy=${orderBy}${parentFilter}`
	const result = await fetch(url)
	const pages = await result.json()
	return pages
}



export async function getAboutUs(orderBy="menu_order", perPage=100) {
	const url = `${baseUrl}about_us?per_page=${perPage}&orderBy=${orderBy}`
	const result = await fetch(url)
	const pages = await result.json()
	//{ title: "Individuell",  iconName: "fa-ruler", content: "loreim Ipsum"}
	return pages.map(page => {
		return {title: page.title.rendered, content: page.content.rendered, iconName: page.acf.icon_name} }
		)
}

export async function getPageBySlug(slug) {
	const url = `${baseUrl}pages?slug=${slug}`
	const result = await fetch(url)
	const pages = await result.json()
	if (pages.length > 1) {
		console.error("Found more than one page for slug", slug)
	}
	else if (pages.length === 0 ) {
		console.error("Foundno page for slug", slug)

	}
	return pages[0]
}
