import GoodItem from "./good-item";
import PropTypes from "prop-types";
import withRedirectTo from "../hocs/withRedirectTo";

const GoodItemContainer = ({ img, name = "название", price = "мало", oldPrice = "много", path }) => {
  return withRedirectTo(GoodItem, path)({ img, name, price, oldPrice });
};

GoodItemContainer.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired
};

export default GoodItemContainer;