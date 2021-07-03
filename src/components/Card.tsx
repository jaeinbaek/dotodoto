import { useState } from "react";

// export type SubTodo = {
  // checked: boolean;
  // value: string;
// }

export type CardProps = {
    title: string;
    description?: string;
    user: string;
    createdAt: string; 
    subTodo?: any[];
}

function Card({ title, description, user, createdAt, subTodo}:CardProps) {

  const [apearCardDetail, setApearCardDetail] = useState<boolean>(false)

  // Handle detail button event
  const handleDetail = ():void => setApearCardDetail(!apearCardDetail)

  return (
        <div className="flex flex-row bg-white mb-2 rounded shadow-lg transform hover:bg-gray-100">
          {/* CheckBox Area */}
          <div className="w-1/12 flex justify-center items-center">
            <input type="checkbox" className="checked:bg-red-600 checked:border-transparent"/>
          </div>
          {/* Data Area */}
          <div className="w-10/12 flex flex-col my-1 py-1">
            <div className="text-xs text-gray-500">
              {user}
              {
              apearCardDetail && ' create at '
              }
              {
              apearCardDetail && createdAt
              }
            </div>
            <div className="font-bold">
              {title}
            </div>
            {
              apearCardDetail && 
                <div>
                  <div className="text-xs font-semibold">
                    {description}
                  </div>
                  <hr className="my-2"/>
                    {subTodo?.map(({checked, value}) => {
                      return <div><input type="checkbox" checked={checked}/> {value}</div>
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