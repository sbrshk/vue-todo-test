<script setup>
import AddTodo from "../components/AddTodo.vue";
import TodoItem from "../components/TodoItem.vue";

import {useTodoStore} from "../stores/todo";
import TasksCounter from "../components/TasksCounter.vue";
import Button from "../components/ui/Button.vue";

const todoStore = useTodoStore();
</script>

<template>
  <h1>ToDo list</h1>
  <TasksCounter />
  <AddTodo />
  <TodoItem
      v-for="todo in todoStore.todoList"
      :key="todo.id"
      :item="todo"
  />
  <Button
      v-if="!!todoStore.count"
      :title="'Remove all tasks'"
      :icon="'circle-xmark'"
      :kind="'secondary'"
      :size="'large'"
      @onClick="todoStore.clearTodoList"
  />
</template>

<style scoped>

</style>
