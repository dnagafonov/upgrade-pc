import React, { useEffect } from "react";
import Categories from "./categories";
import { getCategories, cleanCategories } from "../../redux/actions";
import { connect } from "react-redux";
import { getCategoriesSelector } from "../../redux/selectors";
import { useRouteMatch } from "react-router-dom";
import FallBack from "../common/fallback/fallback";

const CategoriesContainer = ({ categories, getCategories, cleanCategories }) => {
  const { url } = useRouteMatch();
  useEffect(() => {
    getCategories(url);
    return () => cleanCategories();
  }, [url]);
  if (!categories) return <FallBack />;
  return <Categories categories={categories} url={url} />;
};

const mapState = (state) => ({
  categories: getCategoriesSelector(state),
});

export default connect(mapState, { getCategories, cleanCategories })(CategoriesContainer);
