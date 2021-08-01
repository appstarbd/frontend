<template>
  <div class="container ">
    <!--    <table class="table-auto">-->
    <!--      <thead>-->
    <!--        <tr>-->
    <!--          <th>#</th>-->
    <!--          <th>Title</th>-->
    <!--          <th>Price</th>-->
    <!--          <th>Description</th>-->
    <!--          <th>Image</th>-->
    <!--          <th>Action</th>-->
    <!--        </tr>-->
    <!--      </thead>-->
    <!--      <tbody>-->
    <!--        <tr>-->
    <!--          <td />-->
    <!--          <td />-->
    <!--          <td />-->
    <!--          <td />-->
    <!--          <td />-->
    <!--          <td />-->
    <!--        </tr>-->
    <!--      </tbody>-->
    <table class="w-full flex-flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead class="text-whitex">
        <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">
            #
          </th>
          <th class="p-3 text-left">
            Title
          </th>
          <th class="p-3 text-left">
            Price
          </th>
          <th class="p-3 text-left">
            Description
          </th>
          <th class="p-3 text-left">
            Image
          </th>
          <th class="p-3 text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <tr
          v-for="(product, index) in products"
          :key="index"
          class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
        >
          <td class="border-grey-light border hover:bg-gray-100 p-3">
            {{ index + 1 }}
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {{ product.title }}
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {{ product.price }}
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {{ product.description }}
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            image
          </td>
          <td
            class="border-grey-light border hover:bg-gray-100 p-3 hover:font-medium cursor-pointer"
          >
            <button class="text-green-400 hover:text-green-600" @click="editProduct(product)">
              Edit
            </button>
            <button class="text-red-400 hover:text-red-600" @click="deleteProduct(product)">
              Delete
            </button>
          </td>
        </tr>
      <!--        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">-->
      <!--          <td class="border-grey-light border hover:bg-gray-100 p-3">-->
      <!--            Michael Jackson-->
      <!--          </td>-->
      <!--          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">-->
      <!--            m_jackson@mail.com-->
      <!--          </td>-->
      <!--          <td-->
      <!--            class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"-->
      <!--          >-->
      <!--            Delete-->
      <!--          </td>-->
      <!--        </tr>-->
      <!--        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">-->
      <!--          <td class="border-grey-light border hover:bg-gray-100 p-3">-->
      <!--            Julia-->
      <!--          </td>-->
      <!--          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">-->
      <!--            julia@mail.com-->
      <!--          </td>-->
      <!--          <td-->
      <!--            class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"-->
      <!--          >-->
      <!--            Delete-->
      <!--          </td>-->
      <!--        </tr>-->
      <!--        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">-->
      <!--          <td class="border-grey-light border hover:bg-gray-100 p-3">-->
      <!--            Martin Madrazo-->
      <!--          </td>-->
      <!--          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">-->
      <!--            martin.madrazo@mail.com-->
      <!--          </td>-->
      <!--          <td-->
      <!--            class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"-->
      <!--          >-->
      <!--            Delete-->
      <!--          </td>-->
      <!--        </tr>-->
      </tbody>
    </table>
    <!--    </table>-->
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'auth',
  data () {
    return {
      pagination: [],
      products: [],
      links: []
    }
  },
  mounted () {
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
    },
    editProduct (product) {
      // console.dir(product)
      this.$toast.info('Editing product id: ' + product.id).goAway(1000)
    },
    deleteProduct (product) {
      // console.dir(product)
      this.$toast.error('Deleted product id: ' + product.id).goAway(1000)
    }
  }
}
</script>

<style scoped>

</style>
