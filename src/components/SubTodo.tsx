import { useDispatch } from "react-redux";
import { checkSubTodo } from "../actions";
import { subTodoProps } from "../types/types";

function SubTodo({cardId, subTodoKey, value, checked}:subTodoProps) {
  // Use redux
  const dispatch = useDispatch()

  // Handle subtodo check
  const handleSubTodoCheck = (e:any):void => {
    dispatch(checkSubTodo(cardId, subTodoKey))
  }

  return (
    <div className={checked ? "flex items-center h-5 text-xs text-black font-semibold dark:text-white line-through" : "flex items-center h-5 text-xs text-black font-semibold dark:text-white"}>
      <input className="mr-2" type="checkbox" checked={checked} onChange={handleSubTodoCheck}/>
      {value}
      </div>      
  );
}

export default SubTodo; 
