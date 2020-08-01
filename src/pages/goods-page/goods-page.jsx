import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import FallBack from '../../components/common/fallback/fallback';

const GoodsContainer = React.lazy(() => import("../../components/goods/goods-container"));

const GoodsPage = () => {
  const pages = ["/sets", "/components/ram/ddr3", "/components/processors/lga2011"]
    return(
       <>
        {pages.map(page => (
          <Route exact path={page}>
            <Suspense fallback={<FallBack />}>
              <GoodsContainer />
            </Suspense>
          </Route>
        ))}
       </>
    )
};

export default GoodsPage;