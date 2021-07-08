// Type alias for card data
export type CardProps = {
    cardId?: number;
    title: string;
    description?: string;
    user: string;
    createdAt: string; 
    subTodo?: any[];
}

export type CardStates = {
    card: CardProps[]
}