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

export type CardStates = {
    lastCardId: number,
    card: CardProps[]
}