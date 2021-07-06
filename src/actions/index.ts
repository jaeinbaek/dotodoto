import { CardProps } from '../components/Card';
import * as types from './ActionTypes';

export type CardAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof delTodo>

export const addTodo = (cardData: CardProps) => ({
    type: types.ADD_TODO,
    payload: cardData
});

export const delTodo = () => ({
    type: types.DEL_TODO
});