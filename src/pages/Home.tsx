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
          λ©λͺ¨μ₯π
        </div>
        {/* Categorys */}
        <div className="mb-6">
          {/* μΆνμ μ»΄ν¬λνΈν μμ  */}
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            λ©λͺ¨μ₯π
          </button>
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            νμ¬
          </button>
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            μ₯λ³΄κΈ°
          </button>
          <button className="max-w-xs overflow-hidden mb-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
            λν΄λ¬Όκ³Όλ°±λμ°μ΄λ§λ₯΄κ³ 
          </button>
        </div>
      </div>
      {/* Search */}
      <div className="my-2 flex flex-row justify-between">
        <div className="flex flex-row items-center h-6 w-1/2">
          <input
            className="h-6 px-2 border-b border-none rounded-full bg-transparent border border-transparent text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-theme-100 focus:border-transparent"
            placeholder="π μ λͺ© κ²μ"
            onChange={searchValueChange}
            value={searchValue}
          />
          <button
            className="h-6 ml-1 px-2 text-sm text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-theme-100 "
            onClick={handleClearSearch}
          >
            μ΄κΈ°ν
          </button>
        </div>

        {apearNewCard ? null : (
          <button
            className="h-6 px-2 rounded-full text-white bg-gradient-to-r from-theme-100 via-theme-200 via-theme-300 via-theme-400 to-theme-500 hover:ring-1 hover:ring-theme-100 text-xs "
            onClick={handleAdd}
          >
            μ ν μΌ μΆκ°
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
          μλ¬΄ ν μΌμ΄ μμ΄μ! <b>μ ν μΌ μΆκ°</b> λ²νΌμ λλ¬ λ§λ€μ΄λ³΄μΈμ
        </div>
      ) : null}
      {searchValue.length > 0 ? (
        <div className="text-sm text-black dark:text-white">
          {searchResult.length} κ° κ²°κ³Όκ° κ²μλμμ΄μ!
        </div>
      ) : null}
    </div>
  );
}

export default Body;
