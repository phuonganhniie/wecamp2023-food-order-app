import "./Header.css";
import mealsImg from "../../assets/meals.jpg";
import CartOnHeader from "../Cart/CartOnHeader";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>Vietnamese Food</h1>
        <CartOnHeader onShowModal={props.onShowModal} />
      </header>
      <div className="home-image">
        <img src={mealsImg} alt="Food Table" />
      </div>
    </>
  );
};

export default Header;
