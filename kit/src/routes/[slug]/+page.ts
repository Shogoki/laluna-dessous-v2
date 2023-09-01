import { WordpressAPI } from '$lib/api/wordpress';
/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
// export async function load({ page, fetch, session, context }) {
    const api = new WordpressAPI(fetch);
    console.log("params", params)
    const requestedPage = await api.getPageBySlug(params.slug)
    return {
            page: requestedPage
    };
}