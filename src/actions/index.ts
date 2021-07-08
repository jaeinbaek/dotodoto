import { CardProps } from '../types/types';
import * as types from './ActionTypes';

export type CardAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof delTodo>


// Action creator
export const addTodo = (cardData: CardProps) => ({
    type: types.ADD_TODO,
    payload: cardData
});

export const delTodo = () => ({
    type: types.DEL_TODO
});