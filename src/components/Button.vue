<template>
  <button :class="css" v-on="$listeners" v-bind="$attrs">
    <!-- @slot content inside of the button -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  css = 'thx-button'
}
</script>

<style lang="scss" scoped>
.thx-button {
  background-color: var(--bg-color);
  border: .2rem solid var(--text-color, black);
  color: var(--text-color);
  min-width: 1rem;
  min-height: 1rem;
  padding: .5rem 1rem;
  transition: background-color .1s ease-out;

  &:hover, &:focus {
    cursor: pointer;
    outline: none;

    &:not([disabled]) {
      background-color: var(--link-color);
      color: var(--highlight-color);
    }

    &:active {
      background-color: var(--link-color-a8);
    }
  }

  &[disabled] {
    cursor: initial;
    color: var(--text-color-a5);
    border-color: var(--text-color-a5)
  }
}
</style>
