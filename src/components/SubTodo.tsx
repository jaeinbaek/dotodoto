import { useDispatch } from "react-redux";
import { checkSubTodo, delSubTodo } from "../actions";
import { subTodoProps } from "../types/types";

function SubTodo({ cardId, subTodoKey, value, checked }: subTodoProps) {
  // Use redux
  const dispatch = useDispatch();

  // Handle subtodo check
  const handleSubTodoCheck = (): void => {
    dispatch(checkSubTodo(cardId, subTodoKey));
  };

  // Handle delete button
  const handleSubTodoDelete = (): void => {
    dispatch(delSubTodo(cardId, subTodoKey));
  };

  return (
    <div
      className={
        checked
          ? "flex items-center h-5 mt-1 text-sm text-black dark:text-white line-through"
          : "flex items-center h-5 mt-1 text-sm text-black dark:text-white"
      }
    >
      <div className="">
        <input
          className="mr-2"
          type="checkbox"
          checked={checked}
          onChange={handleSubTodoCheck}
        />
        {value}
      </div>
      <div className="">
        <button
          className="mx-2 px-2 text-gray-400 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={handleSubTodoDelete}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default SubTodo;
