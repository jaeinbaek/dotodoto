import { CardProps } from '../components/Card';
import * as types from './ActionTypes';

export const addTodo = (cardData: CardProps):any => ({
    type: types.ADD_TODO,
    cardData
});

export const delTodo = () => ({
    type: types.DEL_TODO
});