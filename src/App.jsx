import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header";
import CartProvider from "./context/CartProvider";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModalHandler = () => {
    setIsShowModal(true);
  };

  const hideModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <CartProvider>
      <Cart isShowModal={isShowModal} onHideModal={hideModalHandler}/>
      <Header onShowModal={showModalHandler} />
      <Foods onShowModal={showModalHandler} />
    </CartProvider>
  );
}

export default App;
