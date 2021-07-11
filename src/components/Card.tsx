import { useState } from "react";
import { CardProps } from "../types/types";

function Card({ title, description, user, createdAt, subTodo}:CardProps) {

  // State for show card detail
  const [apearCardDetail, setApearCardDetail] = useState<boolean>(false)

  // Handle detail button event
  const handleDetail = ():void => setApearCardDetail(!apearCardDetail)

  return (
        <div className="flex flex-row bg-white dark:bg-gray-800 mb-2 rounded shadow-lg transform hover:bg-gray-100 dark:hover:bg-gray-700">
          {/* CheckBox Area */}
          <div className="w-1/12 flex justify-center items-center">
            <input type="checkbox" className="checked:bg-red-600 checked:border-transparent"/>
          </div>
          {/* Data Area */}
          <div className="w-10/12 flex flex-col my-1 py-1">
            <div className="text-xs text-gray-500 dark:text-gray-200">
              {user}
              {apearCardDetail && ` create at ${createdAt}`}
            </div>
            <div className="font-bold text-black dark:text-white">
              {title}
            </div>
            {
              apearCardDetail && 
                <div>
                  <div className="text-xs font-semibold text-black dark:text-white">
                    {description}
                  </div>
                  <hr className="my-2"/>
                    {subTodo?.map(({checked, value, subTodoKey}) => {
                      return <div className="flex items-center h-5 text-xs font-semibold text-black dark:text-white"><input className="mr-1" type="checkbox" checked={checked} key={subTodoKey}/>{value}</div>
                    })}
                </div>
            }
          </div>
          {/* Detail Button */}
          <div className="w-1/12 flex justify-center items-center">
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
