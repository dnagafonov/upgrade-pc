import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import FallBack from '../../components/common/fallback/fallback';

const CategoriesContainer = React.lazy(() => import("../../components/categories/categories-container"));

const CategoriesPage = () => {
  const pages = ["/components", "/components/processors", "/components/motherboard", "/components/ram"]
    return(
       <>
        {pages.map(page => (
          <Route exact path={page}>
            <Suspense fallback={<FallBack />}>
              <CategoriesContainer />
            </Suspense>
          </Route>
        ))}
       </>
    )
};

export default CategoriesPage;