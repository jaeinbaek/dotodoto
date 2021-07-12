import { CardProps } from './../types/types';
import { CardStates } from '../types/types';
import { DEL_TODO, ADD_TODO, CHECK_TODO } from './../actions/ActionTypes';
import { CardAction } from './../actions/index';

// Def init state
const initialState: CardStates = {
  lastCardId: 1,
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
            card: [ ...state.card, action.payload ]
          }
        case DEL_TODO:
          const del_result = state.card.filter(element => element.cardId != action.payload)
          return {
            lastCardId: state.lastCardId,
            card: [ ...del_result ]
          }
        case CHECK_TODO:
          return {
            lastCardId: state.lastCardId,
            card: [ ]
          }
        default:
            return state
    }
}

export default cards;