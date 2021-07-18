// Type alias for card data
export type CardProps = {
    cardId: number;
    title: string;
    description?: string;
    user: string;
    createdAt: string;
    checked: boolean,
    subTodoKey: number;
    subTodo?: any[];
}

export type alertType = {
    alertId: number;
    value: string;
    cardId?: number;
    type: string;
}

export type CardStates = {
    lastCardId: number,
    lastAlertId: number,
    card: CardProps[],
    alert: alertType[]
}
