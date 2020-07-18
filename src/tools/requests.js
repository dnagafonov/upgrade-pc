import db from "./firebase";
import { errorToast } from "./toasts";

const getMotherOrProc = async (hardware, type) => {
  const snapshot = await db
    .collection("components")
    .doc(hardware)
    .collection(type)
    .get();
  return snapshot.docs.map((doc) => doc.data());
};

const getRAM = async (type) => {
  const snapshot = await db
    .collection("components")
    .doc("ram")
    .collection(type)
    .get();
  return snapshot.docs.map((doc) => doc.data());
};

export const fetchDoc = async (path) => {
  const snapshot = await db.doc(path).get();
  return snapshot.data()
};

export const getServerRAM3 = () => {
  return getRAM("server-ddr3");
};

export const getRAM3 = () => {
  return getRAM("ddr3");
};

export const getRAM4 = () => {
  return getRAM("ddr4");
};

export const getProcessorsLga2011 = () => {
  return getMotherOrProc("processors", "lga2011");
};

export const getProcessorsV3 = () => {
  return getMotherOrProc("processors", "v3");
};

export const getMothersLga2011 = () => {
  return getMotherOrProc("mothers", "lga2011");
};

export const getMothersV3 = () => {
  return getMotherOrProc("mothers", "v3");
};

export const getComponents = (path) => {
  switch (path) {
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
    default:
      errorToast("Если видите эту ошибку, сообщите в поддержку");
  }
};