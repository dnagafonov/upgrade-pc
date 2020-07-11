import GoodItem from "../good-item";
import PropTypes from "prop-types";
import withRedirect from "../../hocs/withRedirect";

const GoodItemContainer = ({ img, name = "название", price = "мало", oldPrice = "много", path }) => {
  return withRedirect(GoodItem, path)({ img, name, price, oldPrice });
};

GoodItemContainer.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default GoodItemContainer;