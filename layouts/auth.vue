<template>
  <div>
    <nav-bar :links="links" />
    <div class="bg-white h-screen">
      <div class="container mx-auto pt-24 md:pt-16 px-6">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  middleware: 'auth',
  data: () => ({
    links: [
      {
        name: 'Home',
        icon: null,
        url: '/'
      },
      {
        name: 'Products',
        icon: null,
        url: '/admin/product'
      },
      // {
      //   name: 'New Products',
      //   icon: null,
      //   url: '/admin/product/create'
      // },
      {
        name: 'Logout',
        icon: null,
        url: '/logout'
      }
    ]
  })
}
</script>

<style scoped>

</style>
