<template>
  <div>
    子组件{{childObject}}
  </div>
</template>

<script>
export default {
  props: ['childObject'],
  data: () => ({
  }),
  created () {
    console.log(this.childObject) // 空值
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
