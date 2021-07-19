import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlert, addTodo } from "../actions";

function SetNewCard(props: any) {
  // Use redux
  const dispatch = useDispatch()

  // New card states
  const [newCardTitle, setNewCardTitle] = useState<string>('')
  const [newCardDescription, setNewCardDescription] = useState<string>('설명을 입력해보세요!')

  // Handleing new card values
  const changeNewnewCardTitle = (e:any):void => {
    setNewCardTitle(e.target.value)
  }
  const changeNewCardDescription = (e:any):void => {
    setNewCardDescription(e.target.value)
  };

  // Reset new card states
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

    dispatch(addTodo({ cardId: 0, title: newCardTitle, description: newCardDescription, user: '두투두투', checked: false, apearCardDetail: false, createdAt: createdAt, lastSubTodoKey: 0, subTodo: []}))
    // disapear new card UI
    props.afterAdd()
    dispatch(addAlert('notice', '할 일이 추가되었어요!'))
    resetNewCardStates()
  }

  const handleAddEnter = (e:any):void => {
    if (e.key == 'Enter') {
      handleAddData()
    }
  }

  const handleCancleAddNew = ():void => {
    props.afterAdd()
    resetNewCardStates()
  }
  
  return (
    <div className="flex flex-row bg-white dark:bg-gray-700 mb-3 rounded shadow-lg transform hover:bg-gray-100 dark:hover:bg-gray-600">
    {/* CheckBox Area */}
    <div className="w-1/12 flex justify-center items-center">
      <input 
        type="checkbox" 
        className="checked:bg-red-600 checked:border-transparent"
        disabled
      />
    </div>
    {/* Data Area */}
    <div 
      className="w-3/4 flex flex-col my-2 py-1" 
    >
      {/* Create date & delete button */}
      <div className="flex flex-row justify-between text-xs text-gray-500 dark:text-gray-200">
        <div className="text-xs text-gray-500 dark:text-gray-200">
          새 항목 추가
        </div>
      </div>
      <div className=" font-bold text-black dark:text-white">
        <input
          value={newCardTitle}
          onChange={changeNewnewCardTitle}
          onKeyPress={ handleAddEnter }
          className="w-2/3 px-1 border-b border-none rounded bg-transparent border border-transparent text-black font-bold dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
          type="text"
          placeholder="제목을 입력하세요"  
        />
      </div>
    </div>
    {/* Detail Button */}
    <div 
      className="w-1/6 flex justify-center items-center"
    >
      <button 
          className="h-6 mr-2 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-rose-500 text-sm rounded-full"
          onClick={handleCancleAddNew}
      >
          취소
      </button>
      <button 
        className="h-6 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm rounded-full"
        onClick={handleAddData}
      >
        확인
      </button>
    </div>
  </div> 
  );
}

export default SetNewCard; 
