import PropTypes from "prop-types";

export const CartItemPropTypes = PropTypes.shape({
  colour: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  availableSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSize: PropTypes.string.isRequired,
});
