import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';


function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    // <Button className="w-full px-2 bg-red-600 text-white py-2 rounded-lg hover:bg-blue-600 transition-all" onClick={() => dispatch(deleteItem(pizzaId))}>
    //   Delete
      // </Button>
      <button className="w-full px-5 bg-red-600 text-white  py-2 rounded-lg hover:bg-red-900 transition-all" onClick={() => dispatch(deleteItem(pizzaId))} >
          Delete
      </button>
  );
}

export default DeleteItem;