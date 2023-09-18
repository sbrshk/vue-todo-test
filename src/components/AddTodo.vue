<script setup>
import {v4 as uuidv4} from 'uuid';
import {useTodoStore} from "../stores/todo";
import {ref} from "vue";
import AddCategories from "../components/AddCategories.vue";
import {Button, Input} from "./ui";

const {addTodo} = useTodoStore();

const todoTitle = ref('');
const categories = ref([]);

const addCategory = (category) => {

  if (!categories.value?.includes(category)) {
    categories.value.push(category);
  }
}

const removeCategory = (category) => {
  categories.value = categories.value.filter((item) => item !== category);
}

const clearCategories = () => {
  categories.value = [];
}

const addTodoItem = () => {
  if (!!todoTitle.value.length) {
    addTodo({
      id: uuidv4(),
      title: todoTitle.value,
      categories: categories.value
    })

    todoTitle.value = '';
    categories.value = [];
  }
}
</script>

<template>
  <div class="wrapper">
    <Input
      v-model="todoTitle"
      :placeholder="'New task...'"
      @onEnter="addTodoItem"
    />
    <Button
      :title="'Add new task'"
      :icon="'square-plus'"
      :size="'large'"
      :disabled="!todoTitle.length"
      @onClick="addTodoItem"
    />
  </div>
  <AddCategories
      v-show="todoTitle.length"
      :categories="categories"
      @addCategory="addCategory"
      @removeCategory="removeCategory"
      @clearCategories="clearCategories"
  />
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
}
</style>
