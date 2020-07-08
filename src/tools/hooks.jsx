import React, { useEffect, useState } from "react";
import firebase from "./firebase";

export const useComponents = (path) => {
  const [state, setState] = useState();
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("Components")
      .doc(path)
      .get()
      .then((res) => setState(res.data()));
    return () => unsubscribe();
  }, [path]);
  return state;
};

export const useSets = (path) => {
  const [state, setState] = useState();
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("sets")
      .doc(path)
      .get()
      .then((res) => setState(res.data()));
    return () => unsubscribe();
  }, [path]);
  return state;
};