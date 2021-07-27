<template>
  <div class="container">
    <div style="display: flex; width: 800px;">
      <HelloWorld/>
    </div>
  </div>
</template>

<script>
import { HelloWorld } from '@test/sample-lib';

export default {
  name: 'Sample',
  props: {},
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100vh;
  width: 100%;
}
</style>
