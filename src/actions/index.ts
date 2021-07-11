import { CardProps } from '../types/types';
import * as types from './ActionTypes';

export type CardAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof delTodo>
  | ReturnType<typeof checkTodo>


// Action creator
export const addTodo = (cardData: CardProps) => ({
  type: types.ADD_TODO,
  payload: cardData,
});

export const delTodo = (cardId: number) => ({
  type: types.DEL_TODO,
  payload: cardId
});

export const checkTodo = (cardId: number) => ({
  type: types.CHECK_TODO,
  payload: cardId
});