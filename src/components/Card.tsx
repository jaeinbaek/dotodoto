import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delTodo,
  checkTodo,
  addAlert,
  addSubTodo,
  checkSubTodo,
  switchApearDetail,
  addTag,
} from "../actions";
import { CardProps, CardStates, subTodoProps, tagProps } from "../types/types";
import SubTodo from "./SubTodo";
import Tag from "./Tag";

function Card({
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
}: CardProps) {
  // Use redux
  const dispatch = useDispatch();

  // Handle detail button event
  const handleDetail = (): void => {
    dispatch(switchApearDetail(cardId));
  };

  // Subtodo
  const [sortedSubTodo, setSortedSubTodo] = useState<subTodoProps[]>([]);
  const [newSubTodo, setNewSubTodo] = useState<string>("");
  // Handle change newSubTodo value
  const changeNewSubTodo: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setNewSubTodo(e.target.value);
  };
  // Handle press enter on new subtodo input
  const handleAddNewSubTodo = (e: any): void => {
    if (e.key == "Enter") {
      dispatch(addSubTodo(cardId, newSubTodo));
    }
  };

  // Tag
  const [sortedTag, setSortedTag] = useState<tagProps[]>([]);
  const [newTag, setNewTag] = useState<string>("");
  // Handle change newTag value
  const changeNewTag = (e: any): void => {
    setNewTag(e.target.value);
  };
  // Handle press enter on new subtodo input
  const handleAddNewTag = (e: any): void => {
    if (e.key == "Enter") {
      dispatch(addTag(cardId, newTag));
    }
  };

  // Handle check button
  const handleCheck = (): void => {
    dispatch(checkTodo(cardId));
  };

  const handleDelete = (): void => {
    dispatch(addAlert("delete", "정말 삭제하시겠어요?", cardId));
  };

  // Searchresult update when cards change
  useEffect(() => {
    const sortSubTodo = subTodo.sort((a, b) => a.subTodoKey - b.subTodoKey);
    setSortedSubTodo(sortSubTodo);
  }, [subTodo]);

  useEffect(() => {
    const sortTag = tag.sort((a, b) => a.tagKey - b.tagKey);
    setSortedTag(sortTag);
  }, [tag]);

  return (
    <div className="flex flex-row bg-white dark:bg-gray-700 mb-3 rounded shadow-lg transform hover:bg-gray-100 dark:hover:bg-gray-600">
      {/* CheckBox Area */}
      <div className="w-1/12 flex justify-center items-center">
        <input
          type="checkbox"
          className="checked:bg-red-600 checked:border-transparent"
          checked={checked}
          onChange={handleCheck}
        />
      </div>
      {/* Data Area */}
      <div className="w-10/12 flex flex-col my-2 py-2">
        {/* Create date & delete button */}
        <div className="flex flex-row justify-between mb-1 text-xs text-gray-500 dark:text-gray-200">
          <div className="text-xs text-gray-500 dark:text-gray-200">
            {user}
            {apearCardDetail && ` create at ${createdAt}`}
          </div>
          {/* Delete Card Button */}
          <div>
            {apearCardDetail && (
              <button
                className="px-2 text-rose-500 rounded-full text-xs font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={handleDelete}
              >
                삭제
              </button>
            )}
          </div>
        </div>
        <div
          className={
            checked
              ? "font-bold text-black dark:text-white line-through"
              : "font-bold text-black dark:text-white"
          }
        >
          {title}
        </div>
        {apearCardDetail && (
          <div>
            <div className="ml-2 text-sm font-semibold text-black dark:text-white">
              {description}
            </div>
            {/* Subtodo hr */}
            <hr className="my-2" />
            {/* New Subtodo */}
            <div
              className="flex items-center h-5 text-sm text-black font-semibold dark:text-white"
              onClick={() => {}}
            >
              <input className="mr-2" type="checkbox" disabled />
              <input
                type="text"
                value={newSubTodo}
                placeholder="여길 눌러 입력하세요"
                onChange={changeNewSubTodo}
                onKeyPress={handleAddNewSubTodo}
                className="border-b border-none rounded bg-transparent border border-transparent text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              />
            </div>
            {sortedSubTodo.map(({ subTodoKey, value, checked }) => {
              return (
                <SubTodo
                  cardId={cardId}
                  subTodoKey={subTodoKey}
                  value={value}
                  checked={checked}
                  key={subTodoKey}
                />
              );
            })}
            {/* Tags hr */}
            <hr className="my-2" />
            <div className="flex flex-wrap text-sm">
              {/* New Tag */}
              <div className="px-2 w-1/6 mb-2 mr-2 overflow-hidden rounded-full bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
                <input
                  type="text"
                  placeholder="새 태그"
                  onChange={changeNewTag}
                  onKeyPress={handleAddNewTag}
                  className="bg-transparent focus:outline-none"
                ></input>
              </div>
              {sortedTag.map(({ tagKey, value }) => {
                return (
                  <Tag
                    cardId={cardId}
                    tagKey={tagKey}
                    value={value}
                    key={tagKey}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* Detail Button */}
      <div
        className={
          "w-1/12 flex justify-center items-center" +
          (apearCardDetail ? " transform rotate-180" : " transform rotate-0")
        }
        onClick={handleDetail}
      >
        <img className="h-2" src="detail.png" />
      </div>
    </div>
  );
}

export default Card;