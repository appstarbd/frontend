<template>
  <!--  <Tutorial />-->
  <!--  <div>-->
  <!--    <nav-bar />-->
  <!--    <hero />-->
  <!--    <div class="bg-white h-screen">-->
  <!--      <div class="container mx-auto pt-24 md:pt-16 px-6">-->
  <!--        <p class="py-4"><i class="em em-wave"></i> <i class="em em-world_map"></i></p>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div>
    <nav-bar />
    <hero />
    <div class="bg-white">
      <div class="container mx-auto px-6">
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
    </div>
  </div>
</template>

<script>
// import NavBar from '../components/NavBar'
// import Hero from '../components/Hero'

// import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'

export default {
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
