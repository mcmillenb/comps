```vue
<template>
  <div>
    <h1>Button Example</h1>
    <thx-button @click="onClick">
      Click me
    </thx-button>
    <p>Click Count: {{ count }}</p>
    <hr>
    <h1>Disabled Button Example</h1>
    <thx-button disabled>
      Click me
    </thx-button>
  </div>
</template>

<script>
import ThxButton from './Button';

export default {
  components: { ThxButton },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onClick() {
      this.count++;
    }
  }
};
</script>
```
