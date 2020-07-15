import { types } from "../constants";
import produce from "immer";

const init = {
  items: [
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAsd",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAa",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAe",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAq",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAg",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAd",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAet",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAy",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
    {
      img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
      name: "X79 LGAjh",
      price: 3000,
      oldPrice: 3220,
      path: "components/processors/lga2011/1"
    },
  ]  
}

const goods = produce((draft, action) => {
  switch (action.type) {
    case types.CHANGE_SORT_CRITERION:
      draft.sortBy = action.sortBy;
      return draft;
    case types.SORT_BY_NAME_ASC:
      draft.sortBy = action.sortBy;
      return draft;
    case types.SORT_BY_NAME_DESC:
      draft.sortBy = action.sortBy;
      return draft;
    case types.SORT_BY_PRICE_ASC:
      draft.sortBy = action.sortBy;
      return draft;
    case types.SORT_BY_PRICE_DESC:
      draft.sortBy = action.sortBy;
      return draft;
    case types.SET_GOODS:
      draft.items = action.items;
      return draft;
    default:
      return draft;
  }
},{});

export { goods };
