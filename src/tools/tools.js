export const normalizePath = path => path.split(/\/+$/)[0];
export const sleep = (data, ms) => new Promise(r => setTimeout(() => r(data), ms))
export const convertUrlToBreadcrumb = url => url.split("/").slice(1).map((e, i, a) => ({
  name: e,
  to: a.slice(0, ++i).join("/")
}));