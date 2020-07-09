import React from "react";
import Wrapper from "../../components/common/wrapper/wrapper";
import GoodsItems from "./goods__items/goods__items";

import "./goods.scss";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const Goods = (props) => {
  let { path, url } = useRouteMatch();
  console.log(1, path, url);
  return (
    <main className="goods">
      <Wrapper>
        <Switch>
          <Route path={`${path}/q`}>
            <GoodsItems />
          </Route>
        </Switch>
      </Wrapper>
    </main>
  );
};

export default Goods;
