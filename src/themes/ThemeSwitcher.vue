<template>
  <theme :class="css" :type="theme">
    <thx-select v-model="theme" :options="themeOptions"/>
    <slot/>
  </theme>
</template>

<script lang="ts">
import Vue from 'vue';
import Theme from './Theme.vue';
import ThxSelect from '../components/Select.vue';
import { Component } from 'vue-property-decorator';
import { ThemeTypeOptions } from './options';

const darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
const defaultTheme = ThemeTypeOptions[darkMode ? 0 : 1];

@Component({
  components: { Theme, ThxSelect }
})
export default class ThemeSwitcher extends Vue {
  css = 'thx-theme-switcher'
  themeOptions = ThemeTypeOptions
  theme = defaultTheme

  onColorSchemeChange(e: { matches: boolean }) {
    const darkMode = !!e.matches;
    this.theme = ThemeTypeOptions[darkMode ? 0 : 1];
  }

  created() {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.onColorSchemeChange);
  }

  destroyed() {
    window.matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this.onColorSchemeChange);
  }
}
</script>

<style lang="scss" scoped>
.thx-theme-switcher {
  padding: 20px;
  border-radius: 2px;

  > .thx-select:first-child { margin-bottom: 40px; }
}
</style>
