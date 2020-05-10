<template>
  <div :class="css" :style="cssVars">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import themes from '../themes/themes';
import { Prop, Component } from 'vue-property-decorator';

@Component
export default class Theme extends Vue {
  @Prop({ required: true })
  type!: string;

  css = 'thx-theme'

  get theme() {
    return themes[this.type];
  }

  get cssVars() {
    return Object.keys(this.theme).reduce((acc, key) => {
      acc[`--${key}`] = '#' + this.theme[key]?.hex;
      return acc;
    }, {} as { [key: string]: string });
  }
};
</script>

<style lang="scss">
.thx-theme {
  transition: all .1s ease-out;
  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>
