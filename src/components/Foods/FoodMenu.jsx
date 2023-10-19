import "./FoodMenu.css";
import FoodItem from "./FoodItem";

const DUMMY_MENU = [
  {
    id: "f1",
    name: "Cơm tấm",
    description: "Cơm tấm và sườn rất ngon thêm chén mắm kẹo nữa là order 3 dĩa ăn chưa hết đã",
    price: 10.99,
  },
  {
    id: "f2",
    name: "Bún bò",
    description: "Bún bò thêm ớt sa tế là hết sẩy",
    price: 11.11,
  },
  {
    id: "f3",
    name: "Phở",
    description: "Vietnamese food quốc dân nhưng mà mắc nha nhất là phở ngoài sân bay",
    price: 18.8,
  },
  {
    id: "f4",
    name: "Xà lách trộn",
    description: "Vừa ngon vừa đỡ mập 🤤",
    price: 5.99,
  },
  {
    id: "f5",
    name: "Bánh tráng cuốn thịt luộc",
    description: "Phải ăn được mắm nêm thì ăn món này mới tròn vị nha chứ chấm nước tương là thua",
    price: 20,
  },
];

const FoodMenu = (props) => {
  const foodsList = DUMMY_MENU.map((food) => (
    <FoodItem
      key={food.id}
      id={food.id}
      name={food.name}
      description={food.description}
      price={food.price}
      onShowModal={props.onShowModal}
    />
  ));

  return (
    <section className="foods">
        <ul>{foodsList}</ul>
    </section>
  );
};

export default FoodMenu;
