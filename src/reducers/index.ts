import { CardProps } from './../types/types';
import { CardStates } from '../types/types';
import { DEL_TODO, ADD_TODO, CHECK_TODO, ADD_ALERT, DEL_ALERT, ADD_SUBTODO, DEL_SUBTODO } from './../actions/ActionTypes';
import { CardAction } from './../actions/index';

// Def init state
const initialState: CardStates = {
  lastCardId: 1,
  lastAlertId: 0,
  card: [
    {
    cardId: 1,
    title: '안녕하세요!', 
    description: '할 일을 추가해 보세요!', 
    user: '두투두투', 
    createdAt: '2021-06-26',
    checked: false,
    subTodoKey: 1,
    subTodo: 
      [
        {
          subTodoKey: 0,
          checked: false,
          value: '새 할일 추가 누르기'
        },
        {
          subTodoKey: 1,
          checked: false,
          value: '내용 채우기'
        }
      ]
    }
  ],
  alert: [
    
  ]
};

// Reducer
function cards(
    state: CardStates = initialState, 
    action: CardAction
): CardStates {
    switch(action.type){
        case ADD_TODO:
          action.payload.cardId = state.lastCardId + 1
          return {
            lastCardId: state.lastCardId + 1,
            lastAlertId: state.lastAlertId,
            card: [ ...state.card, action.payload ],
            alert: state.alert
          }
        case DEL_TODO:
          const delCardResult = state.card.filter(element => element.cardId != action.payload)
          return {
            lastCardId: state.lastCardId,
            lastAlertId: state.lastAlertId,
            card: [ ...delCardResult ],
            alert: state.alert
          }
        case CHECK_TODO:
          // 미완
          return {
            lastCardId: state.lastCardId,
            lastAlertId: state.lastAlertId,
            card: [ ],
            alert: state.alert
          }
        case ADD_SUBTODO:
          // 미완
          let {cardId, subTodoData} = action.payload
          return {
            lastCardId: state.lastCardId,
            lastAlertId: state.lastAlertId,
            card: state.card,
            alert: state.alert
          }
        case DEL_SUBTODO:
          // 미완
          return {
            lastCardId: state.lastCardId,
            lastAlertId: state.lastAlertId,
            card: state.card,
            alert: state.alert
          } 
        case ADD_ALERT:
          action.payload.alertId = state.lastAlertId + 1
          let copyOfAlert = state.alert
          // Keep number of alert 2
          if (copyOfAlert.length > 1) {
            copyOfAlert.shift()
          }
          return {
            lastCardId: state.lastCardId,
            lastAlertId: state.lastAlertId + 1,
            card: state.card,
            alert: [ ...copyOfAlert, action.payload ]
          }
        case DEL_ALERT:
          const delAlertResult = state.alert.filter(element => element.alertId != action.payload)
          return {
            lastCardId: state.lastCardId,
            lastAlertId: state.lastAlertId,
            card: state.card,
            alert: [ ...delAlertResult ]
          }
        default:
            return state
    }
}

export default cards;