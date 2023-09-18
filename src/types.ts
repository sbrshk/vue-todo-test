export type Id = number | string;

export enum Categories {
    work = 'work',
    personal = 'personal',
    other = 'other'
}

export type TodoItem = {
    id: Id;
    title: string;
    checked?: boolean;
    categories?: Categories[];
}

export type TodoList = TodoItem[];
