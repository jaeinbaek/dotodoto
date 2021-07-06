import { useState } from "react";
import Card, { CardProps } from "./Card";

function Body() {
  // Card States
  const [cards, setCards] = useState<CardProps[]>(
    [
      { 
        title: '안녕하세요!', 
        description: '할 일을 추가해 보세요!', 
        user: '두투두투', 
        createdAt: '2021-06-26', 
        subTodo: 
        [
          {
            checked: false,
            value: '새 할일 추가 누르기'
          },
          {
            checked: false,
            value: '내용 채우기'
          }
        ]
      }
    ]
  )

  // New card states
  const [apearNewCard, setApearNewCard] = useState<boolean>(false)
  const [newCardTitle, setNewCardTitle] = useState<string>('')
  const [newCardDescription, setNewCardDescription] = useState<string>('')

  // Handle add card button event
  const handleAdd = ():void => setApearNewCard(!apearNewCard)

  // Handleing new card values
  const newCardTitleChange = (e:any):void => {
    setNewCardTitle(e.target.value)
  }
  const newCardDescriptionChange = (e:any):void => {
    setNewCardDescription(e.target.value)
  };

  const resetNewCardStates = ():void => {
    setNewCardTitle('')
    setNewCardDescription('')
  }

  const handleAddData = ():void => {
    const d = new Date();
    const year = d.getFullYear()
    const month = (d.getMonth() + 1)
    const day = d.getDate()
    const createdAt = (year + '-' + month + '-' + day)

    setCards([...cards, { title: newCardTitle, description: newCardDescription, user: '두투두투', createdAt: createdAt}])
    // disapear new card UI
    setApearNewCard(!apearNewCard)
    resetNewCardStates()

  }
  
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
          { apearNewCard && 
            <div className=" flex flex-col mb-2 rounded bg-white shadow-lg transform">
              <div className="m-2">
                <div className="flex mb-4 font-bold">
                  새 항목 추가
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-xs">제목</div>
                  <input className="flex mb-1" onChange={ newCardTitleChange } value={ newCardTitle }/>
                  <div className="font-semibold text-xs">내용</div>
                  <input className="flex mb-1" onChange={ newCardDescriptionChange } value={ newCardDescription }/>
                  <button className="w-10 rounded-xl bg-gray-300 font-semibold text-xs text-white" onClick={ handleAddData }>추가</button>
                </div>
              </div>
            </div> 
          } 
          {/* Cards */}
          <div>
            {cards.map(({title, description, user, createdAt, subTodo}) => {
                return <Card title={title} description={description} user={user} createdAt={createdAt} subTodo={subTodo}/>
            })}
          </div>
        </div>      
  );
}

export default Body; 
