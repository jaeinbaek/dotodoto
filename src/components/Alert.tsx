import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delAlert, delTodo } from "../actions";
import { alertType, CardStates } from "../types/types";


function Alert({alertId, type, value, cardId}:alertType) {

    const alerts = useSelector((state: CardStates) => state.alert)
    const dispatch = useDispatch()

    const [alertType, setAlertType] = useState<string>('')

    useEffect(() => {
        switch (type) {
            case 'delete':
                setAlertType('check')
                break
            case 'notice':
                setAlertType('notice')
                break
            default:
                setAlertType('notice')
                break
        }
    })

    const handleCheck = ():void => {
        if (cardId) {
            dispatch(delTodo(cardId))
        }
        dispatch(delAlert(alertId))
    }

    const handleCancel = ():void => {
        dispatch(delAlert(alertId))
    }

    return (
          // <div className="fixed bottom-0 flex-none w-full h-20 bg-gradient-to-t from-gray-800 to-transparent"/>
          <div className="w-full max-w-xl h-12 mb-2 flex items-center bg-white dark:bg-gray-700 rounded shadow-xl transform hover:bg-gray-100 dark:hover:bg-gray-600">
              <div className="w-4/5 ml-4 text-sm font-bold text-black dark:text-white">
                {value}
              </div>
              <div className="w-1/5">
                { alertType == 'check' ? 
                    <div className="flex justify-end">
                        <button 
                            className="h-6 mr-2 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm rounded-full"
                            onClick={handleCancel}
                        >
                            취소
                        </button>
                        <button 
                            className="h-6 mr-4 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-rose-500 text-sm rounded-full"
                            onClick={handleCheck}
                        >
                            확인
                        </button>
                    </div>
                    :
                    <div className="flex justify-end">
                        <button 
                            className="h-6 mr-4 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm rounded-full"
                            onClick={handleCancel}
                        >
                            확인
                        </button>
                    </div>
                }
              </div>
          </div>
    );
  }
  
  export default Alert; 
  