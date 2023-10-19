import FoodDescription from './FoodDescription';
import FoodMenu from './FoodMenu';

const Foods = (props) => {
    return (
        <>
            <FoodDescription />
            <FoodMenu onShowModal={props.onShowModal} />
        </>
    )
}

export default Foods;