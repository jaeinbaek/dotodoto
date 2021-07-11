import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardProps, CardStates } from "../types/types";
import Card from "./Card";
import SetNewCard from "./SetNewCard";


function Body() {
  // Use redux
  const cards = useSelector((state: CardStates) => state.card)
  const dispatch = useDispatch()


  // Search input value
  const [searchValue, setSearchValue] = useState<string>('')
  // Search result 
  const [searchResult, setSearchResult] = useState<CardProps[]>(cards)

  const searchValueChange = (e:any):void => {
    if (apearNewCard == true) {
      setApearNewCard(false)
    }
    setSearchValue(e.target.value)
    setSearchResult(cards.filter( i => {
      return i.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    }))
  }
  

  // Handle clear search button
  const handleClearSearch = ():void => {
    setSearchResult(cards)
    setSearchValue("")
  }


  // New card states
  const [apearNewCard, setApearNewCard] = useState<boolean>(false)
  // Handle add card button event
  const handleAdd = ():void => setApearNewCard(!apearNewCard)
  // Refresh search result for add new
  const afterAdd = ():void => {
    setApearNewCard(false)
  }

  // Searchresult update when cards change
  useEffect(() => {
    setSearchResult(cards)  
  },[cards])

  
  return (
        <div className="flex-grow flex flex-col mx-auto container max-w-3xl px-4 mb-20">
           {/* Action */}
          <div>
              {/* Heading */}
              <div className="mb-4 text-3xl text-gray-800 dark:text-white font-semibold">메모장</div>
              {/* Categorys */}
              <div className="mb-10">
                {/* 추후에 컴포넌트화 예정 */}
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-full text-sm bg-gray-300 bg-opacity-20 text-gray-900 dark:text-gray-200">메모장</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-full text-sm bg-gray-300 bg-opacity-20 text-gray-900 dark:text-gray-200">회사</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-full text-sm bg-gray-300 bg-opacity-20 text-gray-900 dark:text-gray-200">장보기</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-full text-sm bg-gray-300 bg-opacity-20 text-gray-900 dark:text-gray-200">동해물과백두산이마르고</button>
              </div>
          </div>
          {/* Search */}
          <div className="my-2 flex flex-row justify-between">
            <div className="flex flex-row items-center h-6 w-1/2">
              <input 
                  className="px-1 border-b border-none rounded bg-transparent border border-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-lg" 
                  placeholder="🔎 제목 검색"
                  onChange={searchValueChange}
                  value={searchValue}
              />
              <button
                className="h-6 ml-2 px-2 text-sm text-white rounded bg-gradient-to-r from-teal-400 to-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg"
                onClick={handleClearSearch} 
              >
                초기화
              </button>
            </div>
            
            { apearNewCard ? null : <button className="text-gray-900 dark:text-gray-200" onClick={ handleAdd }>새 할일 추가</button>}
          </div>
          {/* Add New Card UI */}
          { apearNewCard && <SetNewCard afterAdd={afterAdd} /> }
          
          {/* Cards */}
          <div>
            {searchResult.map(({cardId, title, description, user, createdAt, subTodoKey, subTodo}) => {
                return <Card title={title} description={description} user={user} createdAt={createdAt} subTodo={subTodo} subTodoKey={subTodoKey} key={cardId} />
            })}
          </div>
          { searchValue.length > 0 ? (<div className="text-sm text-black dark:text-white">{searchResult.length} 개 결과가 검색되었어요!</div>) : null }
        </div>   
    );
  }

export default Body; 
