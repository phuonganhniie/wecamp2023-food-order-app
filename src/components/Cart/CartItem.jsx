import "./CartItem.css";

const CartItem = (props) => {
  const price = props.price.toFixed(2);

  return (
    <>
      <li className="cart-item">
        <div>
          <h2>{props.name}</h2>
          <div className="total-item">
            <span className="item-price">{`$${price}`}</span>
            <span className="amount">x {props.amount}</span>
          </div>
        </div>
        <div className="add-item-actions">
          <button onClick={props.onRemoveItem}>-</button>
          <button onClick={props.onAddItem}>+</button>
        </div>
      </li>
    </>
  );
};

export default CartItem;
