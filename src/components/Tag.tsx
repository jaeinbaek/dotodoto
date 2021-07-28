import { useDispatch } from "react-redux";
import { delTag } from "../actions";
import { tagProps } from "../types/types";

function Tag({ cardId, tagKey, value }: tagProps) {
  // Use redux
  const dispatch = useDispatch();

  // Handle delete button
  const handleTagDelete = (): void => {
    dispatch(delTag(cardId, tagKey));
  };

  return (
    <div className="max-w-xs overflow-hidden my-2 mr-2 px-3 rounded-full text-sm bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
      <button className="max-w-xs overflow-hidden">{value}</button>
    </div>
  );
}

export default Tag;
