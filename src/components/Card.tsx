import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTodo, checkTodo, addAlert } from "../actions";
import { CardProps, CardStates } from "../types/types";

function Card({ cardId, title, description, user, createdAt, subTodo, checked, subTodoKey}:CardProps) {
  // Use redux
  const cards = useSelector((state: CardStates) => state.card)
  const dispatch = useDispatch()


  // State for show card detail
  const [apearCardDetail, setApearCardDetail] = useState<boolean>(false)

  // Handle detail button event
  const handleDetail = ():void => setApearCardDetail(!apearCardDetail)

  const handleCheck = ():void => {
    dispatch(checkTodo(cardId))
  }

  const handleDelete = ():void => {
    dispatch(addAlert({type:'check', value:'정말 삭제하시겠어요?', callback: dispatch(delTodo(cardId))}))
  
  }

  return (
        <div className="flex flex-row bg-white dark:bg-gray-700 mb-3 rounded shadow-lg transform hover:bg-gray-100 dark:hover:bg-gray-600">
          {/* CheckBox Area */}
          <div className="w-1/12 flex justify-center items-center">
            <input 
              type="checkbox" 
              className="checked:bg-red-600 checked:border-transparent"
              onChange={handleCheck}
            />
          </div>
          {/* Data Area */}
          <div 
            className="w-10/12 flex flex-col my-2 py-1" 
            onClick={handleDetail}
          >
            {/* Create date & delete button */}
            <div className="flex flex-row justify-between text-xs text-gray-500 dark:text-gray-200">
              <div className="text-xs text-gray-500 dark:text-gray-200">
                {user}
                {apearCardDetail && ` create at ${createdAt}`}
              </div>
              {/* Delete Card Button */}
              <div>
                {apearCardDetail &&
                  <button 
                    className="px-2 text-rose-500 rounded-full text-xs font-semibold hover:underline hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={handleDelete}
                  >
                    삭제
                  </button>
                }
              </div>
            </div>
            <div className=" font-bold text-black dark:text-white">
              {title}
            </div>
            {
              apearCardDetail && 
                <div>
                  <div className="ml-2 text-sm font-semibold text-black dark:text-white">
                    {description}
                  </div>
                  <hr className="my-2"/>
                    {subTodo?.map(({checked, value, subTodoKey}) => {
                      return <div className="flex items-center h-5 text-xs text-black font-semibold dark:text-white"><input className="mr-2" type="checkbox" checked={checked} key={subTodoKey}/>{value}</div>
                    })}
                </div>
            }
          </div>
          {/* Detail Button */}
          <div 
            className="w-1/12 flex justify-center items-center"
            onClick={handleDetail}
          >
            <img
              className="h-2"
              src="detail.png"
              onClick={handleDetail}
           />
          </div>
        </div>      
  );
}

export default Card; 
