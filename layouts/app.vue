<template>
  <div>
    <nav-bar />
<!--    <hero />-->
    <div class="bg-white">
      <div class="container mx-auto px-6">
        <!--        <p class="py-4"><i class="em em-wave"></i> <i class="em em-world_map"></i></p>-->
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    // bg: () => ({
    //   type: String,
    //   required: false,
    //   default: 'bg-white'
    // })
  },
  created () {
    console.dir(this.$router.currentRoute.name)
  }
}
</script>

<style scoped>

</style>
