import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions";
import { CardStates } from "../types/types";

import Card from "./Card";
import SetNewCard from "./SetNewCard";

function Body() {
  // Use redux
  const cards = useSelector((state: CardStates) => state.card)
  const dispatch = useDispatch()

  // New card states
  const [apearNewCard, setApearNewCard] = useState<boolean>(false)

  // Handle add card button event
  const handleAdd = ():void => setApearNewCard(!apearNewCard)

  
  return (
        <div className="flex-grow flex flex-col mx-auto container max-w-3xl px-4 mb-20">
           {/* Action */}
          <div>
              {/* Heading */}
              <div className="mb-4 text-3xl text-white font-semibold">메모장</div>
              {/* Categorys */}
              <div className="mb-4">
                {/* 추후에 컴포넌트화 예정 */}
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">메모장</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">회사</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">장보기</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">동해물과백두산이마르고</button>
              </div>
          </div>
          {/* Search */}
          <div className="my-2 flex flex-row justify-between">
            <input 
                className="h-6 w-1/2 px-2 rounded bg-gray-500 opacity-20 hover:bg-gray-300 focus:bg-gray-300 shadow-lg" 
                placeholder="Search"
            />
              { apearNewCard ? null : <button className="text-white" onClick={ handleAdd }>새 할일 추가</button>}
          </div>
          {/* Add New Card UI */}
          { apearNewCard && <SetNewCard/> }
          
          {/* Cards */}
          <div>
            {cards.map(({cardId, title, description, user, createdAt, subTodo}) => {
                return <Card title={title} description={description} user={user} createdAt={createdAt} subTodo={subTodo} key={cardId} />
            })}
          </div>
        </div>   
    );
  }

export default Body; 
