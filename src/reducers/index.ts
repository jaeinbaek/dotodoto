import { DEL_TODO, ADD_TODO } from './../actions/ActionTypes';
import { CardAction } from './../actions/index';
import { CardProps } from '../components/Card';

export type CardStates = {
    card: CardProps[]
}

const initialState: CardStates = {
    card: [
            {
            title: '안녕하세요!', 
            description: '할 일을 추가해 보세요!', 
            user: '두투두투', 
            createdAt: '2021-06-26', 
            subTodo: 
            [
              {
                checked: false,
                value: '새 할일 추가 누르기'
              },
              {
                checked: false,
                value: '내용 채우기'
              }
            ]
       }
    ]

};

function cards(
    state: CardStates = initialState, 
    action: CardAction
): CardStates {
    switch(action.type){
        case ADD_TODO:
            return {
                card: [ ...state.card, action.payload ]
            }
        // case DEL_TODO:
        //     return {
                
        //     }
        default:
            return state
    }
}

export default cards;