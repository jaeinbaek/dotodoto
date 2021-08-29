import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CardProps, CardStates } from "../types/types";
import Card from "../components/Card";
import SetNewCard from "../components/SetNewCard";

function Body() {
  // Use redux
  const cards = useSelector((state: CardStates) => state.card);

  // Searchresult update when cards change
  useEffect(() => {
    const searchResult = cards.sort((a, b) => a.cardId - b.cardId);
    setSearchResult(searchResult);
  }, [cards]);

  // Search input value
  const [searchValue, setSearchValue] = useState<string>("");
  // Search result
  const [searchResult, setSearchResult] = useState<CardProps[]>(cards);

  const searchValueChange = (e: any): void => {
    if (apearNewCard === true) {
      setApearNewCard(false);
    }
    setSearchValue(e.target.value);

    let searchResult = cards.filter((i) => {
      return i.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    });
    searchResult = searchResult.sort((a, b) => a.cardId - b.cardId);
    setSearchResult(searchResult);
  };

  // Handle clear search button
  const handleClearSearch = (): void => {
    const searchResult = cards.sort((a, b) => a.cardId - b.cardId);
    setSearchResult(searchResult);
    setSearchValue("");
  };

  // New card states
  const [apearNewCard, setApearNewCard] = useState<boolean>(false);
  // Handle add card button event
  const handleAdd = (): void => setApearNewCard(!apearNewCard);
  // Refresh search result for add new
  const afterAdd = (): void => {
    setApearNewCard(false);
  };

  return (
    <div className="flex-grow flex flex-col mx-auto container max-w-3xl px-4 mb-20">
      {/* Action */}
      <div>
        {/* Heading */}
        <div className="mb-4 mt-8 text-3xl text-gray-800 dark:text-white font-semibold">
          메모장📝
        </div>
        {/* Categorys */}
        <div className="mb-6">
          {/* 추후에 컴포넌트화 예정 */}
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            메모장📝
          </button>
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            회사
          </button>
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            장보기
          </button>
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            동해물과백두산이마르고
          </button>
        </div>
      </div>
      {/* Search */}
      <div className="my-2 flex flex-row justify-between">
        <div className="flex flex-row items-center h-6 w-1/2">
          <input
            className="h-6 px-2 border-b border-none rounded-full bg-transparent border border-transparent text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-theme-100 focus:border-transparent"
            placeholder="🔎 제목 검색"
            onChange={searchValueChange}
            value={searchValue}
          />
          <button
            className="h-6 ml-1 px-2 text-sm text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-theme-100 "
            onClick={handleClearSearch}
          >
            초기화
          </button>
        </div>

        {apearNewCard ? null : (
          <button
            className="h-6 px-2 rounded-full text-white bg-gradient-to-r from-theme-100 via-theme-200 via-theme-300 via-theme-400 to-theme-500 hover:ring-1 hover:ring-theme-100 text-xs "
            onClick={handleAdd}
          >
            새 할일 추가
          </button>
        )}
      </div>
      {/* Add New Card UI */}
      {apearNewCard && <SetNewCard afterAdd={afterAdd} />}

      {/* Cards */}
      <div className="flex flex-col-reverse">
        {searchResult.map(
          ({
            cardId,
            title,
            description,
            user,
            createdAt,
            checked,
            apearCardDetail,
            lastSubTodoKey,
            subTodo,
            lastTagKey,
            tag,
          }) => {
            return (
              <Card
                cardId={cardId}
                title={title}
                description={description}
                user={user}
                createdAt={createdAt}
                subTodo={subTodo}
                checked={checked}
                apearCardDetail={apearCardDetail}
                lastSubTodoKey={lastSubTodoKey}
                lastTagKey={lastTagKey}
                tag={tag}
                key={cardId}
              />
            );
          }
        )}
      </div>
      {searchValue.length === 0 &&
      searchResult.length === 0 &&
      apearNewCard === false ? (
        <div className="text-sm text-black dark:text-white">
          아무 할일이 없어요! <b>새 할일 추가</b> 버튼을 눌러 만들어보세요
        </div>
      ) : null}
      {searchValue.length > 0 ? (
        <div className="text-sm text-black dark:text-white">
          {searchResult.length} 개 결과가 검색되었어요!
        </div>
      ) : null}
    </div>
  );
}

export default Body;
