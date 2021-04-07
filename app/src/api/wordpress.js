const baseUrl = "https://cms.laluna-dessous.de/wp-json/wp/v2/";

export async function getPages(
  parent = undefined,
  orderBy = "menu_order",
  perPage = 100,
  order = "asc"
) {
  const parentFilter = parent ? `&parent=${parent}` : "";
  const url = `${baseUrl}pages?per_page=${perPage}&orderby=${orderBy}&order=${order}${parentFilter}`;
  const result = await fetch(url);
  const pages = await result.json();
  return pages;
}

export async function getAboutUs(orderBy = "menu_order", perPage = 100) {
  const url = `${baseUrl}about_us?per_page=${perPage}&orderBy=${orderBy}`;
  const result = await fetch(url);
  const pages = await result.json();
  //{ title: "Individuell",  iconName: "fa-ruler", content: "loreim Ipsum"}
  return pages.map((page) => {
    return {
      title: page.title.rendered,
      content: page.content.rendered,
      iconName: page.acf.icon_name,
    };
  });
}

export async function getPageBySlug(slug) {
  const url = `${baseUrl}pages?slug=${slug}`;
  const result = await fetch(url);
  const pages = await result.json();
  if (pages.length > 1) {
    console.error("Found more than one page for slug", slug);
  } else if (pages.length === 0) {
    console.error("Foundno page for slug", slug);
  }
  return pages[0];
}

export async function getPosts(perPage = 10) {
  const url = `${baseUrl}posts?per_page=${perPage}`;
  const result = await fetch(url);
  const posts = await result.json();
  return posts;
}

export async function getCarouselImages(perPage = 10) {
  const url = `${baseUrl}carousel-image?per_page=${perPage}`;
  const result = await fetch(url);
  const data = await result.json();
  return data.map((item) => {
    return { image: item.acf.image, title: item.title.rendered };
  });
}
