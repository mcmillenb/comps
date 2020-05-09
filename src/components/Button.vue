<template>
  <button :class="css" v-on="$listeners" v-bind="$attrs">
    <!-- @slot content inside of the button -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Button extends Vue {
  css = 'thx-button'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/vars.scss';

.thx-button {
  background-color: $color-white;
  border: .2rem solid $color-black;
  min-width: 1rem;
  min-height: 1rem;
  padding: .5rem 1rem;
  transition: background-color .1s ease-out;

  &:hover, &:focus {
    cursor: pointer;
    outline: none;

    &:not([disabled]) {
      background-color: rgba(0,0,0,.05);
    }

    &:active {
      background-color: rgba(0,0,0,.1);
    }
  }

  &[disabled] {
    cursor: initial;
    border-color: $color-gray;
  }
}
</style>
