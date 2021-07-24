import { alertType, CardProps } from '../types/types';
import * as types from './ActionTypes';

export type CardAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof delTodo>
  | ReturnType<typeof checkTodo>
  | ReturnType<typeof addSubTodo>
  | ReturnType<typeof delSubTodo>
  | ReturnType<typeof checkSubTodo>
  | ReturnType<typeof addTag>
  | ReturnType<typeof delTag>
  | ReturnType<typeof addAlert>
  | ReturnType<typeof delAlert>
  | ReturnType<typeof switchApearDetail>


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

export const addSubTodo = (cardId: number, subTodoValue: any) => ({
  type: types.ADD_SUBTODO,
  payload: {cardId, subTodoValue}
});

export const delSubTodo = (cardId: number, subTodoId: number) => ({
  type: types.DEL_SUBTODO,
  payload: {cardId, subTodoId}
});

export const addTag = (cardId: number, tagValue: any) => ({
  type: types.ADD_TAG,
  payload: {cardId, tagValue}
});

export const delTag = (cardId: number, tagId: number) => ({
  type: types.DEL_TAG,
  payload: {cardId, tagId}
});

export const checkSubTodo = (cardId: number, subTodoKey: number) => ({
  type: types.CHECK_SUBTODO,
  payload: {cardId, subTodoKey}
})

export const addAlert = (type:string, value:string, cardId?:number) => ({
  type: types.ADD_ALERT,
  payload: {type, value, cardId}
});

export const delAlert = (alertId: number) => ({
  type: types.DEL_ALERT,
  payload: alertId
})

export const switchApearDetail = (cardId: number) => ({
  type: types.SWITCH_APEARDETAIL,
  payload: cardId
})