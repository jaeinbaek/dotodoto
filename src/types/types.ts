// Type alias for card data
export type CardProps = {
  cardId: number;
  title: string;
  description?: string;
  user: string;
  createdAt: string;
  checked: boolean;
  apearCardDetail: boolean;
  lastSubTodoKey: number;
  subTodo: any[];
  lastTagKey: number;
  tag: any[];
};

export type subTodoProps = {
  cardId: number;
  subTodoKey: number;
  value: string;
  checked: boolean;
};

export type tagProps = {
  cardId: number;
  tagKey: number;
  value: string;
};

export type alertType = {
  alertId: number;
  value: string;
  cardId?: number;
  type: string;
};

export type CardStates = {
  lastCardId: number;
  lastAlertId: number;
  card: CardProps[];
  alert: alertType[];
};
