import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { delTag } from "../actions";
import { tagProps } from "../types/types";

function Tag({ cardId, tagKey, value }: tagProps) {
  // Use redux
  const dispatch = useDispatch();

  const [apearDelete, setApearDelete] = useState<boolean>(false);

  const toggleApearDeleteTrue = ():void  => {
    setApearDelete(true)
  }
  const toggleApearDeleteFalse = ():void  => {
    setApearDelete(false)
  }

  // Handle delete button
  const handleTagDelete = ():void => {
    dispatch(delTag(cardId, tagKey));
  };

  return (
    <div
      className="flex items-center mr-2 px-2 h-5 min-w-max overflow-hidden rounded-full bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200"
    >
      <div 
        className="max-w-xs overflow-hidden"
        onMouseOver={ toggleApearDeleteTrue }
        onMouseLeave={ toggleApearDeleteFalse }
      >
      <div>
        {value} { apearDelete ? <button className="text-xs my-1" onClick={handleTagDelete}>삭제</button> : '' }</div>
      </div>
    </div>
  );
}

export default Tag;
