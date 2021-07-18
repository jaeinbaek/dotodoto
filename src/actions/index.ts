import { alertType, CardProps } from '../types/types';
import * as types from './ActionTypes';

export type CardAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof delTodo>
  | ReturnType<typeof checkTodo>
  | ReturnType<typeof addSubTodo>
  | ReturnType<typeof delSubTodo>
  | ReturnType<typeof addAlert>
  | ReturnType<typeof delAlert>


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

export const addSubTodo = (cardId: number, subTodoData: any) => ({
  type: types.ADD_SUBTODO,
  payload: {cardId, subTodoData}
});

export const delSubTodo = (cardId: number, subTodoId: number) => ({
  type: types.DEL_SUBTODO,
  payload: {cardId, subTodoId}
});

export const addAlert = (alert: alertType) => ({
  type: types.ADD_ALERT,
  payload: alert
});

export const delAlert = (alertId: number) => ({
  type: types.DEL_ALERT,
  payload: alertId
})