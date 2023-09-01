import { WordpressAPI } from '$lib/api/wordpress';

export async function load({ params }) {
    const api = new WordpressAPI(fetch);
    const postPage = await api.getPageBySlug('aktuelles');
    const posts = await api.getPosts(10);
    return {
            page: postPage,
            posts: posts
    };
}