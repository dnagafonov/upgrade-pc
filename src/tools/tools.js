export const normalizePath = path => path.split(/\/+$/)[0];
export const sleep = (data, ms) => new Promise(() => setTimeout(() => data, ms))
