import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import FallBack from '../../components/common/fallback/fallback';

const GoodContainer = React.lazy(() => import("../../components/good/good-container"));

const GoodPage = () => {
  const pages = ["/components/processors/lga2011/:id", "/components/ram/ddr3/:id", "/sets/:id"]
    return(
       <>
        {pages.map(page => (
          <Route exact path={page}>
            <Suspense fallback={<FallBack />}>
              <GoodContainer />
            </Suspense>
          </Route>
        ))}
       </>
    )
};

export default GoodPage;