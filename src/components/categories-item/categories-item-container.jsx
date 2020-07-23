import GoodItem from "./categories-item";
import PropTypes from "prop-types";
import withRedirectTo from "../hocs/withRedirectTo";
import CategoriesItem from "./categories-item";

const CategoriesItemContainer = ({ img, name = "название", path }) => {
  return withRedirectTo(CategoriesItem, path)({ img, name });
};

CategoriesItemContainer.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default CategoriesItemContainer;