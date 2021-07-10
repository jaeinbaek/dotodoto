// Type alias for card data
export type CardProps = {
    cardId?: number;
    title: string;
    description?: string;
    user: string;
    createdAt: string;
    subTodoKey: number;
    subTodo?: any[];
}

export type CardStates = {
    card: CardProps[]
}