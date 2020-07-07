import React, { useState, useEffect } from "react";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import Good from "../../pages/good/good";
import GoodsBuild from "../../pages/goods-build/goods-build";
import firebase from "firebase";

import "./app.scss";

var firebaseConfig = {
  apiKey: "AIzaSyDc5VvBOuF82UVIcald-7TiDPeaY-YR5vU",
  authDomain: "zhelpa-f2d95.firebaseapp.com",
  databaseURL: "https://zhelpa-f2d95.firebaseio.com/",
  projectId: "zhelpa-f2d95",
  storageBucket: "zhelpa-f2d95.appspot.com",
  messagingSenderId: "104761785113",
  appId: "1:104761785113:web:f7733c6e45b97d2c3a2388",
  measurementId: "G-LEWW4ZPTYL",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {
  const [state, setstate] = useState();
  console.log(state);
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("Components")
      .doc("processors")
      .get()
      .then((res) => setstate(res.data().lga2011[0]));
  }, []);
  const g = {
    id: 1,
    href:
      "https://aliexpress.ru/item/10000147838732.html?spm=a2g0o.productlist.0.0.2f9c70849y3kOR&s=p&ad_pvid=202007051023282264541117854030015405282_2&algo_pvid=486742e9-9201-48a5-bf3c-131c248ddf6a&algo_expid=486742e9-9201-48a5-bf3c-131c248ddf6a-1&btsid=0b0a187915939698078476945e6089&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_",
    img:
      "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
    name: "XFX RX 580 8GB 2304 256bit GDDR5",
    price: 4500,
    oldPrice: 5500,
    description:
      "Графический чип: Radeon Polaris 20 XTX\nИнтерфейс шины: PCI Express 3,0 x16\nПараметры производительности\nПроцессор потока: 2304\nЧастота сердечника: 1366 ~ 1386 МГц\nЧастота памяти: 7 ~ 7,1 ГГц\nТип памяти: GDDR5\nХарактеристики памяти: 4 Гб 256 бит\nВыходной интерфейс: HDMI + DPx3 + DVI\nНаивысшее Разрешение: 4096x2160\nМаксимальная потребляемая мощность: 145 вт\nДругие параметры\nDirectX: 12\nOpenGL: 4,5\nCrossFire: Поддержка\nHDCP: Поддержка\nРадиатор: двойная Бесшумная нагревательная трубка вентилятора\nВнешний разъем питания: 8pin\nРекомендуемый Источник питания: 500 Вт",
  };
  const g2 = {
    id: 1,
    img:
      "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
    name: "Cборочка рикардо",
    price: 144002,
    oldPrice: 155000,
    href:
      "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
    description:
      "Графический чип: Radeon Polaris 20 XTX\nИнтерфейс шины: PCI Express 3,0 x16\nПараметры производительности\nПроцессор потока: 2304\nЧастота сердечника: 1366 ~ 1386 МГц\nЧастота памяти: 7 ~ 7,1 ГГц\nТип памяти: GDDR5\nХарактеристики памяти: 4 Гб 256 бит\nВыходной интерфейс: HDMI + DPx3 + DVI\nНаивысшее Разрешение: 4096x2160\nМаксимальная потребляемая мощность: 145 вт\nДругие параметры\nDirectX: 12\nOpenGL: 4,5\nCrossFire: Поддержка\nHDCP: Поддержка\nРадиатор: двойная Бесшумная нагревательная трубка вентилятора\nВнешний разъем питания: 8pin\nРекомендуемый Источник питания: 500 Вт",
    lists: [
      {
        id: 1,
        img:
          "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
        name: "XEON E5-2650",
        bestSeller: {
          name:
            "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
          link:
            "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
          price: 1640,
          oldPrice: 2640,
        },
        sellers: [
          {
            name:
              "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
            link:
              "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
            price: 1640,
            oldPrice: 2640,
          },
          {
            name:
              "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
            link:
              "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg  ",
            price: 1640,
            oldPrice: 2640,
          },
          {
            name:
              "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
            link:
              "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg ",
            price: 1640,
            oldPrice: 2640,
          },
        ],
      },
      {
        id: 2,
        img:
          "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
        name: "XEON E5-2640",
        bestSeller: {
          name:
            "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
          link:
            "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
          price: 1640,
          oldPrice: 2640,
        },
        sellers: [
          {
            name:
              "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
            link:
              "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg",
            price: 1640,
            oldPrice: 2640,
          },
          {
            name:
              "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
            link:
              "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg  ",
            price: 1640,
            oldPrice: 2640,
          },
          {
            name:
              "Б/у XFX RX 580 8GB 2304 256bit GDDR5 Настольные ПК игровые видеокарты видеокарта не горная 580 8G",
            link:
              "https://ae01.alicdn.com/kf/H855980b895f047dba6ae31b72b8d376cr/XFX-RX-580-8GB-2304-256bit-GDDR5.jpg ",
            price: 1640,
            oldPrice: 2640,
          },
        ],
      },
    ],
  };

  return (
    <div className="app">
      <HeaderLogo />
      <Header />
      <div className="wrapper">
        <pre>Комплектующие / процессоры / XFX RX 580 8GB 2304 256bit GDDR5</pre>{" "}
      </div>
      <Good {...state} />
    </div>
  );
};

export default App;
