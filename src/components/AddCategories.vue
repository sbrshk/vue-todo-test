<script setup lang="ts">
import {defineProps, defineEmits, ref, computed, nextTick} from "vue";
import {Categories} from "../types";
import {Button, Input, Tag} from "../components/ui";

interface Props {
  categories: any[];
}

interface Emits {
  addCategory: (event: any) => void;
  removeCategory: (category: Categories) => void;
  clearCategories: () => void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const availableCategories = computed(() => Object.values(Categories).filter((category) => !props.categories.includes(category)));
const showCustomCategoryInput = ref(false);
const customCategory = ref("");
const customCategoryInput = ref();

const addCategory = (category) => {
  emits("addCategory", category);
}

const clearCategories = () => {
  emits("clearCategories");
}

const addCustomCategory = () => {
  if (customCategory.value.length) {
    emits("addCategory", customCategory.value);
    customCategory.value = "";
    showCustomCategoryInput.value = false;
  }
}

const displayCustomCategoryInput = () => {
  showCustomCategoryInput.value = true;
  nextTick(() => {
    customCategoryInput.value?.focus();
  })
}
</script>

<template>
  <div>
  <div class="wrapper">
    <Tag
        v-for="category in props.categories"
        :key="category"
        :title="category"
        :kind="'ghost'"
        :size="'small'"
        :removable="true"
        :removeIcon="'trash-can'"
        @onRemove="$emit('removeCategory', category)"
    />
    <Tag
        v-for="category in availableCategories"
        :key="category"
        :title="category"
        :icon="'square-plus'"
        :kind="'secondary'"
        :size="'small'"
        @onClick="addCategory(category)"
    />
    <Button
        v-show="showCustomCategoryInput === false"
        :icon="'square-plus'"
        :kind="'primary'"
        :size="'medium'"
        @onClick="displayCustomCategoryInput"
    />
    <Input
        v-show="showCustomCategoryInput === true"
        v-model="customCategory"
        ref="customCategoryInput"
        :size="'small'"
        :placeholder="'New category...'"
        @onEnter="addCustomCategory"
    />
  </div>
  <div class="wrapper">

    <Button
        v-show="props.categories.length"
        :title="'Clear categories'"
        :icon="'circle-xmark'"
        :kind="'secondary'"
        @onClick="clearCategories"
    />
  </div>
  </div>
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
