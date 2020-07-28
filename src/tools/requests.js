import db from "./firebase";
import { errorToast } from "./toasts";
import { normalizePath, sleep } from "./tools";
import components from "./categories/components.json";
import processors from "./categories/processors.json";
import motherboards from "./categories/motherboards.json";
import ram from "./categories/ram.json";

const getCollection = async (collection) => {
  const snapshot = await db
    .collection(collection)
    .get();
  return snapshot.docs.map((doc) => doc.data());
};

export const fetchDoc = async (path) => {
  const npath = normalizePath(path);
  const snapshot = await db.doc(npath).get();
  return snapshot.data();
};

export const getServerRAM3 = () => {
  return getCollection("components/ram/server-ddr3");
};

export const getRAM3 = () => {
  return getCollection("components/ram/ddr3");
};

export const getRAM4 = () => {
  return getCollection("components/ram/ddr4");
};

export const getProcessorsLga2011 = () => {
  return getCollection("components/processors/lga2011");
};

export const getProcessorsV3 = () => {
  return getCollection("components/processors/v3");
};

export const getMothersLga2011 = () => {
  return getCollection("components/mothers/lga2011");
};

export const getMothersV3 = () => {
  return getCollection("components/mothers/v3");
};

export const getSets = () => {
  return getCollection("sets");
};

export const getComponents = (path) => {
  const npath = normalizePath(path);
  switch (npath) {
    case "/components/processors/lga2011":
      return getProcessorsLga2011();
    case "/components/processors/v3":
      return getProcessorsLga2011();
    case "/components/motherboard/lga2011":
      return getProcessorsLga2011();
    case "/components/motherboard/v3":
      return getProcessorsLga2011();
    case "/components/ram/ddr3":
      return getRAM3();
    case "/components/ram/ddr4":
      return getRAM4();
    case "/components/ram/server-ddr3":
      return getServerRAM3();
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
    case "/components/motherboard":
      return await sleep(motherboards, 300);
    case "/components/ram":
      return await sleep(ram, 300);
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку в ВК");
  }
};
