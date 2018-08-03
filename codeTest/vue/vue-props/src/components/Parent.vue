<template>
  <div>
    父组件
    <child :child-object="asyncObject"></child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  data: () => ({
    asyncObject: '11'
  }),
  components: {
    Child
  },
  created () {
  }
}
</script>

<style scoped>
</style>
