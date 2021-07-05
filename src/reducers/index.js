import { type } from 'os';
import { Switch } from 'react-router-dom';
import { FlowFlags } from 'typescript';
import * as types from '../actions/ActionTypes';
import { CardProps } from '../components/Card';

const initialState = {
    card: {
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
    },

};

function cards(state = initialState, action){
    switch (action.type){
        case type.ADD_TODO:
            return {
                state: {...state, ...action.card} 
            };
        case type.DEL_TODO:
            return {
                // add
            };
    };
};

export default cards;