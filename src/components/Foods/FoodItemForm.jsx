import { useRef } from "react";
import Input from "../Input/Input";
import "./FoodItemForm.css";

const FoodItemForm = (props) => {
  const inputAmount = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const amount = parseInt(inputAmount.current.value);
    props.onAddToCart(amount);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="food-item-form">
        <Input
          ref={inputAmount}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "10",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    </>
  );
};

export default FoodItemForm;
