import db from "./firebase";

const getMotherOrProc = async (hardware, type) => {
  const snapshot = await db
    .collection("Components")
    .doc(hardware)
    .collection(type)
    .get();
  return snapshot.docs.map((doc) => doc.data());
};

const getRAM = async (type) => {
  const snapshot = await db
    .collection("Components")
    .doc("ram")
    .collection(type)
    .get();
  return snapshot.docs.map((doc) => doc.data());
};

export const getServerRAM3 = () => {
  return getRAM("serverddr3");
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
    case "/components/ram/serverddr3":
      return getServerRAM3();
    default:
      throw new Error("Если видите эту ошибку, сообщите саппорту");
  }
};
