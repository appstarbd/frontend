<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <product-card
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :description="product.description"
        :price="product.price"
      />
    </div>
    <pagination
      v-if="products.length > 0"
      :current-page="pagination.current_page"
      :to="pagination.to"
      :total="pagination.total"
    />
  </div>
</template>

<script>
import Pagination from '../components/Pagination'

export default {
  name: 'product',
  layout: 'app',
  components: {
    Pagination
    // ProductCard
    // NavBar,
    // Hero
  },
  data: () => ({
    posts: [],
    products: [],
    pagination: [],
    links: []
  }),
  // async fetch () {
  //   this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
  //     res.json()
  //   )
  // }
  mounted () {
    // const _this = this
    // this.$axios.get('user').then(function (res) {
    //   console.dir(res)
    // })
    this.loadProduct()
  },
  methods: {
    loadProduct (url = 'product') {
      const _this = this
      this.$axios.get(url).then(function (res) {
        _this.pagination = res.data
        _this.products = res.data.data
        _this.links = res.data.links
      })
    }
  }
}
</script>

<style scoped>

</style>
