const ASSET_EXTENSION = /\.(?:avif|bmp|css|csv|docx?|eot|gif|ico|jpe?g|js|json|map|mp3|mp4|ogg|otf|pdf|png|svg|ttf|txt|webm|webp|woff2?|xlsx?|xml|zip)$/i;
const LEGACY_PAGE_EXTENSION = /\.(?:aspx?|html?|php)$/i;
const SYSTEM_PATH = /^\/(?:_next|cdn-cgi)(?:\/|$)/;

function shouldRedirectMissingPage(request, url) {
  if (request.method !== "GET" && request.method !== "HEAD") return false;
  if (SYSTEM_PATH.test(url.pathname)) return false;
  if (LEGACY_PAGE_EXTENSION.test(url.pathname)) return true;
  return !ASSET_EXTENSION.test(url.pathname);
}

const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) return response;

    const url = new URL(request.url);
    if (!shouldRedirectMissingPage(request, url)) return response;

    return Response.redirect(new URL("/", url), 301);
  },
};

export default worker;
