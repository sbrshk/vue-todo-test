import {defineStore} from "pinia";

import {Id, TodoList, TodoItem} from "../types";


export const useTodoStore = defineStore('todo', {
    state: (): { todoList: TodoList }  => ({ todoList: [] }),
    getters: {
        count: (state) => state.todoList.length,
        checkedCount: (state) => state.todoList.filter((todo: TodoItem) => todo.checked).length,
        uncheckedCount: (state) => state.todoList.filter((todo: TodoItem) => !todo.checked).length
    },
    actions: {
        addTodo(todo: TodoItem) {
            this.todoList.unshift(todo);
        },
        removeTodo(id: Id) {
            this.todoList = this.todoList.filter((todo: TodoItem) => todo.id !== id);
        },
        checkTodo(id: Id) {
            this.todoList = this.todoList.map((todo: TodoItem) => {
                if (todo.id === id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            });
        },
        clearTodoList() {
            this.todoList = [];
        }
    }
})
