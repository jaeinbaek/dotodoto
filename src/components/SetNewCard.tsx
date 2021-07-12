import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions";

function SetNewCard(props: any) {
  // Use redux
  const dispatch = useDispatch()

  // New card states
  const [newCardTitle, setNewCardTitle] = useState<string>('')
  const [newCardDescription, setNewCardDescription] = useState<string>('')

  // Handleing new card values
  const newCardTitleChange = (e:any):void => {
    setNewCardTitle(e.target.value)
  }
  const newCardDescriptionChange = (e:any):void => {
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

    dispatch(addTodo({ cardId: 0, title: newCardTitle, description: newCardDescription, user: '두투두투', checked: false, createdAt: createdAt, subTodoKey: 0}))
    // disapear new card UI
    props.afterAdd()
    resetNewCardStates()
  }

  const handleCancleAddNew = ():void => {
    props.afterAdd()
    resetNewCardStates()
  }
  
  return (
    <div className=" flex flex-col mb-2 rounded bg-white dark:bg-gray-700 shadow-lg transform">
      <div className="m-2">
        <div className="flex mb-4 text-lg font-bold text-black dark:text-white">
          새 항목 추가
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-sm text-black dark:text-white">제목</div>
          <input className="flex mb-2 border-b bg-transparent text-black dark:text-white" onChange={ newCardTitleChange } value={ newCardTitle }/>
          <div className="mb-1 text-sm text-black dark:text-white">내용</div>
          <input className="flex mb-4 border-b bg-transparent text-black dark:text-white" onChange={ newCardDescriptionChange } value={ newCardDescription }/>
          <div className="flex flex-row">
            <button className="h-6 overflow-hidden px-6 rounded-full text-sm bg-gray-100 dark:bg-gray-500 hover:bg-gray-200 dark:hover:bg-gray-400 text-gray-900 dark:text-white" onClick={ handleAddData }>추가</button>
            <button className="h-6 overflow-hidden ml-2 px-6 rounded-full bg-gray-100 dark:bg-gray-500 text-sm hover:bg-gray-200 dark:hover:bg-gray-400 text-gray-900 dark:text-white" onClick={ handleCancleAddNew } >취소</button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default SetNewCard; 
