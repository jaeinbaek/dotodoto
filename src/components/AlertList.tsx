import { useDispatch, useSelector } from "react-redux";
import { alertType, CardStates } from "../types/types";
import Alert from "./Alert";

function AlertList() {

    const alerts = useSelector((state: CardStates) => state.alert)
    const dispatch = useDispatch()

    return (
          // <div className="fixed bottom-0 flex-none w-full h-20 bg-gradient-to-t from-gray-800 to-transparent"/>
          <div className="w-full max-w-xl mx-7 flex flex-col justify-center">
              { alerts.map(({ type, value, callback }) => { return <Alert type={type} value={value} callback={callback} /> })}
          </div>
    );
  }
  
  export default AlertList; 
  