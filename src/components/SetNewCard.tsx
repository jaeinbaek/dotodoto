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

    dispatch(addTodo({ title: newCardTitle, description: newCardDescription, user: '두투두투', createdAt: createdAt}))
    // disapear new card UI
    props.setApearNewCard(false)
    resetNewCardStates()
  }
  
  return (
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
  );
}

export default SetNewCard; 
