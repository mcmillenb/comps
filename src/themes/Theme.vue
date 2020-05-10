<template>
  <div :class="css" :style="cssVars">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import themes from '../themes/themes';
import { Prop, Component } from 'vue-property-decorator';
import { ThemeOption, ThemeTypeOption } from '../themes/types';

@Component
export default class Theme extends Vue {
  @Prop({ required: true })
  type!: ThemeTypeOption;

  css = 'thx-theme'

  get theme() {
    return themes[this.type];
  }

  get cssVars() {
    return Object.keys(this.theme).reduce((acc, key) => {
      acc[`--${key}`] = '#' + this.theme[key as ThemeOption]?.hex;
      for (let i = 1; i < 11; i++) {
        const alphaHex = (25 * i).toString(16);
        acc[`--${key}-a${i}`] = acc[`--${key}`] + alphaHex;
      }
      console.log({ acc });
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
