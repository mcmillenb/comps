```vue
<template>
  <thx-theme :type="themeType" class="theme-md">
    <h1>UI Theme</h1>
    <p>This is some example paragraph text for the theme that has been selected</p>

    <div class="theme-md__ui-components">
      <thx-select label="Select Theme" v-model="themeType" :options="themeOptions"/>
      <thx-button>Click Me</thx-button>
    </div>
  </thx-theme>
</template>

<script>
import ThxTheme from './Theme.vue';
import ThxButton from './Button.vue';
import ThxSelect from './Select.vue';

export default {
  components: { ThxTheme, ThxButton, ThxSelect },
  data() {
    return {
      themeType: 'GruvboxDark',
      themeOptions: [
        { value: 'GruvboxDark', label: 'Gruvbox Dark' },
        { value: 'GruvboxLight', label: 'Gruvbox Light' }
      ]
    }
  }
}
</script>

<style lang="scss">
.theme-md {
  padding: 20px;
}

.theme-md__ui-components {
  display: grid;
  gap: 20px;
}
</style>
```
