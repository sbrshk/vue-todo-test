<script setup lang="ts">
import {withDefaults, defineProps, defineEmits} from "vue";

interface Props {
  modelValue: string;
  kind?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

interface Emits {
  (e: 'update:modelValue', event: Event): void;
  (e: 'onEnter'): void;
  (e: 'onFocus'): void;
}

const props = withDefaults(defineProps<Props>(), {
  kind: 'primary',
  size: 'medium',
  type: 'text',
});

const emit = defineEmits<Emits>()
</script>

<template>
<input
  :value="props.modelValue"
  :class="['input', `input-${props.kind}`, `input-${props.size}`]"
  :disabled="props.disabled"
  :type="props.type"
  :placeholder="props.placeholder"
  @input="emit('update:modelValue', $event.target.value)"
  @keydown.enter="emit('onEnter')"
  @focus="emit('onFocus')"
/>
</template>

<style scoped lang="scss">
.input {
  border-radius: 4px;

  &-large {
    padding: 12px 16px;
  }

  &-medium {
    padding: 8px 12px;
  }

  &-small {
    padding: 4px 8px;
  }

  &-primary {
    background: #2c3e50;
    color: #f8f8f8;
    border: none;
  }

  &-ghost {
    background: transparent;
    color: hsla(160, 100%, 37%, 1);
    border: 1px solid hsla(160, 100%, 37%, 1);
  }

  &:focus {
    outline: none;
  }
}
</style>
