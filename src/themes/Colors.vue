<template>
  <div :class="css" :style="{ backgroundColor }">
    <div
      :class="`${css}__color`"
      v-for="({ hex, name }, key) in colors"
      :key="key"
      :style="getStyle(hex)"
    >
      <span>{{ name }}</span>
      <span>#{{ hex.toUpperCase() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Palette, Color } from './types';
import { Component, Prop } from 'vue-property-decorator';
import { invertColor } from './utils';

@Component
export default class Colors extends Vue {
  @Prop()
  public colors!: Palette;

  css = 'thx-util-colors'

  getStyle(hex: string): object {
    const color = invertColor(hex, true);
    return { backgroundColor: `#${hex}`, color };
  }

  get backgroundColor(): string {
    const key = Object.keys(this.colors).find(key => key === 'background');
    if (key) {
      const color: Color = this.colors[key];
      return '#' + (color?.hex || 'ffffff');
    }
    return '';
  }
}
</script>

<style lang="scss" scoped>
.thx-util-colors {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 40px;
  border-radius: 2px;

  &__color {
    min-height: 80px;
    padding: 16px;
    display: flex;
    flex-direction: column;

    > span:last-child {
      opacity: .6;
    }
  }
}
</style>
