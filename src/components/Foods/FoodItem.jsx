import { useContext } from "react";
import "./FoodItem.css";
import FoodItemForm from "./FoodItemForm";
import CartContext from "../../context/cart-context";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    })
  };

  return (
    <li className="food">
      <div>
        <h3>{props.name}</h3>
        <div className="food-description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <FoodItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodItem;
