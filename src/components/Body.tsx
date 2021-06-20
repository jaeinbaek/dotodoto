import Card, { CardProps } from "./Card";

function Body() {
    const cards: CardProps[] = [
        { title: '집가기', content: '집에더가고싶어요', user: '백재인'},
        { title: '이대희와 코딩공부', content: '타입스크립트 신기쓰', user: '백재인'},
        { title: '잠자기', content: '희흐흐', user: '백재인'},
        { title: '집가기', content: '집에가고싶어요', user: '백재인'},
        { title: '이대희와 코딩공부', content: '타입스크립트 신기쓰', user: '백재인'},
        { title: '잠자기', content: '희흐흐', user: '백재인'},
        { title: '집가기', content: '집에가고싶어요', user: '백재인'},
        { title: '이대희와 코딩공부', content: '타입스크립트 신기쓰', user: '백재인'},
        { title: '잠자기', content: '희흐흐', user: '백재인'},
        { title: '집가기', content: '집에가고싶어요', user: '백재인'},
        { title: '이대희와 코딩공부', content: '타입스크립트 신기쓰', user: '백재인'},
        { title: '잠자기', content: '희흐흐', user: '백재인'},
        { title: '집가기', content: '집에가고싶어요', user: '백재인'},
        { title: '이대희와 코딩공부', content: '타입스크립트 신기쓰', user: '백재인'},
        { title: '잠자기', content: '희흐흐', user: '백재인'},
    ]

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
            <div className="text-white">
                새 할일 추가
            </div>
          </div>
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
