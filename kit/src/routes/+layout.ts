import { WordpressAPI } from '$lib/api/wordpress';

export async function load({ params}) {
    const api = new WordpressAPI(fetch);
    console.log('got pages');
    const pages = await api.getPages(0);
    return {
            titles: pages ? pages : []
    };
}