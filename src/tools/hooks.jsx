import React, { useEffect, useState } from "react";
import db from "./firebase";

export const useComponents = (path) => {
  const [state, setState] = useState({});
  useEffect(() => {
    db.collection("Components")
      .doc(path)
      .get()
      .then((res) => setState(res.data()));
  }, [path]);
  return state;
};

export const useSets = (path) => {
  const [state, setState] = useState();
  useEffect(() => {
    db.collection("sets")
      .doc(path)
      .get()
      .then((res) => setState(res.data()));
  }, [path]);
  return state;
};