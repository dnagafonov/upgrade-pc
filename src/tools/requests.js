import db from "./firebase";
import { errorToast } from "./toasts";
import { normalizePath, sleep } from "./tools";
import components from "./categories/components.json";
import processors from "./categories/processors.json";
import motherboards from "./categories/motherboards.json";
import ram from "./categories/ram.json";

const fetchCollection = async (collection) => {
  const snapshot = await db.collection(collection).get();
  return snapshot.docs.map((doc) => doc.data());
};

export const fetchDoc = async (path) => {
  const npath = normalizePath(path);
  const snapshot = await db.doc(npath).get();
  return snapshot.data();
};

const getServerRAM3 = () => {
  return fetchCollection("components/ram/server-ddr3");
};

const getRAM3 = () => {
  return fetchCollection("components/ram/ddr3");
};

const getRAM4 = () => {
  return fetchCollection("components/ram/ddr4");
};

const getProcessorsLga2011 = () => {
  return fetchCollection("components/processors/lga2011");
};

const getProcessorsV3 = () => {
  return fetchCollection("components/processors/v3");
};

const getMothersLga2011 = () => {
  return fetchCollection("components/motherboards/lga2011");
};

const getMothersV3 = () => {
  return fetchCollection("components/motherboards/v3");
};

const getVideocards = () => {
  return fetchCollection("/components/videocards/all");
};

const getSets = () => {
  return fetchCollection("sets");
};

export const getComponents = (path) => {
  const npath = normalizePath(path);
  switch (npath) {
    case "/components/processors/lga2011":
      return getProcessorsLga2011();
    case "/components/processors/v3":
      return getProcessorsV3();
    case "/components/motherboards/lga2011":
      return getMothersLga2011();
    case "/components/motherboards/v3":
      return getMothersV3();
    case "/components/ram/ddr3":
      return getRAM3();
    case "/components/ram/ddr4":
      return getRAM4();
    case "/components/ram/server-ddr3":
      return getServerRAM3();
    case "/components/videocards/all":
      return getVideocards();
    case "/sets":
      return getSets();
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку в ВК");
  }
};

export const requestCategories = async (url) => {
  const nurl = normalizePath(url);
  switch (nurl) {
    case "/components":
      return await sleep(components, 300);
    case "/components/processors":
      return await sleep(processors, 300);
    case "/components/motherboards":
      return await sleep(motherboards, 300);
    case "/components/ram":
      return await sleep(ram, 300);
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку в ВК");
  }
};
