export class WordpressAPI {
	private baseUrl: string;
	private _fetch;
	constructor(_fetch = fetch, baseUrl: string = 'https://cms.laluna-dessous.de/wp-json/wp/v2/') {
		this._fetch = _fetch;
		this.baseUrl = baseUrl;
	}
	public async getPages(parent = undefined, orderBy = 'menu_order', perPage = 100, order = 'asc') {
		console.log('getting pages');
		const parentFilter = parent ? `&parent=${parent}` : '';
		const url = `${this.baseUrl}pages?per_page=${perPage}&orderby=${orderBy}&order=${order}${parentFilter}`;
		console.log('url is', url);
		const result = await this._fetch(url);
		const pages = await result.json();
		console.log('pages fetched');
		return pages;
	}

	public async getAboutUs(orderBy = 'menu_order', perPage = 100) {
		const url = `${this.baseUrl}about_us?per_page=${perPage}&orderBy=${orderBy}`;
		const result = await this._fetch(url);
		const pages = await result.json();
		console.log('Aboutus is', pages);
		//{ title: "Individuell",  iconName: "fa-ruler", content: "loreim Ipsum"}
		return pages.map((page) => {
			return {
				title: page.title.rendered,
				content: page.content.rendered,
				iconName: page.acf.icon_name
			};
		});
	}

	public async getPageBySlug(slug) {
		console.log('Get page by slug', slug);
		const url = `${this.baseUrl}pages?slug=${slug}`;
		console.log('url is', url);
		const result = await this._fetch(url);
		const pages = await result.json();
		if (pages.length > 1) {
			console.error('Found more than one page for slug', slug);
		} else if (pages.length === 0) {
			console.error('Foundno page for slug', slug);
		}
		console.log('Pages are ', pages);
		return pages[0];
	}

	public async getPosts(perPage = 10) {
		const url = `${this.baseUrl}posts?per_page=${perPage}`;
		const result = await this._fetch(url);
		const posts = await result.json();
		return posts;
	}

	public async getCarouselImages(perPage = 10) {
		const url = `${this.baseUrl}carousel-image?per_page=${perPage}`;
		const result = await this._fetch(url);
		const data = await result.json();
		return data.map((item) => {
			return { image: item.acf.image, title: item.title.rendered };
		});
	}
}
