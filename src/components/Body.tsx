import { useState } from "react";
import Card, { CardProps } from "./Card";

function Body() {
    
  const [cards, setCards] = useState<CardProps[] | []>(
    [{ title: '할 일을 추가해 보세요!', content: '할 일을 추가해 보세요!', user: '두투두투', createdAt: '2021-06-26'}]
  )

  const [apearNewCard, setApearNewCard] = useState<boolean>(false)
  const [newCardTitle, setNewCardTitle] = useState<string>()
  const [newCardContent, setNewCardContent] = useState<string>()

  // handle add card button event
  const handleAdd = ():void => setApearNewCard(!apearNewCard)

  const newCardTitleChange(e):void => {
    setNewCardTitle(e.target.value)
  }
  const newCardContentChange(e):void => {
    setNewCardContent(e.target.value)
  };

  const handleAddData = ():void => {
    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDay()
    let createdAt = (year + '-' + month + '-' + day)

    setCards([...cards, { title: 'title', content: 'content', user: '두투두투', createdAt: createdAt}])
    console.log(cards)
  }
  
  return (
        <div className="flex-grow flex flex-col mx-auto container max-w-3xl px-4 mb-20">
           {/* Action */}
          <div>
              {/* Heading */}
              <div className="mb-4 text-3xl text-white font-semibold">메모장</div>
              {/* Categorys */}
              <div className="mb-4">
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">메모장</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">회사</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">장보기</button>
                <button className="max-w-xs overflow-hidden mb-2 mr-2 px-2 rounded-xl text-sm bg-gray-300 bg-opacity-20 text-white">동해물과백두산이마르고</button>
              </div>
          </div>
          {/* Search */}
          <div className="my-2 flex flex-row  justify-between">
            <input 
                className="h-6 w-1/2 px-2 rounded bg-gray-500 opacity-20 hover:bg-gray-300 focus:bg-gray-300 shadow-lg" 
                placeholder="Search"
            />
            <button
              className="text-white"
              onClick={ handleAdd }
            >
              새 할일 추가
            </button>
          </div>
          {/* Add New Card UI */}
          { apearNewCard && 
            <div className="h-12 flex flex-row bg-white mb-2 rounded shadow-lg transform hover:bg-gray-100">
              <div className="font-bold">
                새 항목 추가
              </div>
              타이틀
              <input onChange={ newCardTitleChange } value={ newCardTitle } />
              콘텐츠
              <input onChange={ newCardContentChange } value={ newCardContent } />
              <button onClick={ handleAddData }>추가</button>
            </div> 
          } 
          {/* Cards */}
          <div>
            {cards.map(({title, content, user}) => {
                return <Card title={title} content={content} user={user} />
            })}
          </div>
        </div>      
  );
}

export default Body; 
