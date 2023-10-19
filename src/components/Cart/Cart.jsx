import { useContext } from "react";
import Modal from "../Modal/Modal";
import "./Cart.css";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalPrice = parseFloat(cartCtx.totalPrice.toFixed(2));
  const hasCartItem = cartCtx.items.length > 0;

  const addItemToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const submitOrderHandler = () => {
    alert(`Thank you for your order! Your bill is: $${totalPrice}`)
  }

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAddItem={addItemToCartHandler.bind(null, item)}
          onRemoveItem={removeItemFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <>
      {props.isShowModal && (
        <Modal onHideModal={props.onHideModal}>
          {!hasCartItem && (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <hr></hr>
            </div>
          )}
          {cartItems}
          <div className="total-price">
            <span>Total Price</span>
            <span>{`$${totalPrice}`}</span>
          </div>
          <div className="actions-btn">
            <button className="close-btn" onClick={props.onHideModal}>
              Close
            </button>
            {hasCartItem && <button className="order-btn" onClick={submitOrderHandler}>Order</button>}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
