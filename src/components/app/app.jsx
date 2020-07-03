import React, { useState } from "react";
import List from "../common/list/list";

import "./app.scss";

const App = () => {
  const [state2, setstate2] = useState({
    name: "видеокарты",
    img: "",
    isOpen: true,
    sellers: [
      {
        name: "(* best seller )XFX RX 580 4 Гб 256bit GDDR5 Настольные ПК игровые видеокарты не добыча 580 4G б/у",
        price: 7000,
        oldPrice: 7700,
        link: "#"
      },
      {
        name: "GDDR5 Настольные ПК игровые видеокарты не добыча 580 4G б/у",
        price: 3000,
        oldPrice: 3700,
        link: "#"
      },
      {
        name: "best seller )XFX RX 580 4 Гб 256bit best seller )XFX RX 580 4 Гб 256bit XFX RX 580 4 Гб 256bit GDDR5 Настольные ПК игровые видеокарты не добыча 580 4G б/у",
        price: 2000,
        oldPrice: 2700,
        link: "#"
      },
      {
        name: "(* best seller )XFX RX 580 4 Гб 256bit GDDR5 Настольные ПК игровые видеокарты не добыча 580 4G б/у",
        price: 4000,
        oldPrice: 4700,
        link: "#"
      },
    ],
    bestSeller: {
      name: "(* best seller )XFX RX 580 4 Гб 256bit GDDR5 Настольные ПК игровые видеокарты не добыча 580 4G б/у",
      price: 4000,
      oldPrice: 4700,
      link: "#"
    },
    img: "https://ae01.alicdn.com/kf/Hea91275257614be89a08e92402c604468/xfx-570-4g-256bit-GDDR5-xfx-amd-rx.jpg"
  });
  return (
    <div className="app">
      <List {...state2} onClick={() => setstate2({...state2, isOpen: !state2.isOpen})}/>
      <div>Дальше контент</div>
      <div>какой-то</div>
    </div>
  );
};

export default App;
