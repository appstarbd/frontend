<template>
  <div class="max-w-lg mx-auto p-8 md:p-12 mb-10 rounded-lg shadow-2xl">
    <div>
      <h3 class="font-bold text-2xl">
        New Product
      </h3>
      <p class="text-gray-600 pt-2">
        Add new product.
      </p>
    </div>

    <div class="mt-10">
      <form class="flex flex-col" method="POST" action="#" @submit.prevent="saveProduct">
        <div class="mb-6 pt-3 rounded bg-gray-200">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="title">Title</label>
          <input
            id="title"
            v-model="form.title"
            type="text"
            class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-pink-600 transition duration-500 px-3 pb-3"
          >
        </div>
        <div class="mb-6 pt-3 rounded bg-gray-200">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="price">Price</label>
          <input
            id="price"
            v-model="form.price"
            type="number"
            class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-pink-600 transition duration-500 px-3 pb-3"
          >
        </div>
        <div class="mb-6 pt-3 rounded bg-gray-200">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="description">Description</label>
          <textarea
            id="description"
            v-model="form.description"
            type="text"
            class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-pink-600 transition duration-500 px-3 pb-3"
          />
        </div>
        <div class="mb-6 pt-3 rounded bg-gray-200">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="image">Image</label>
          <input
            id="image"
            ref="image"
            type="file"
            class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-pink-600 transition duration-500 px-3 pb-3"
            @change="productImage"
          >
        </div>
        <button
          class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  layout: 'app',
  data: () => ({
    form: {
      title: '',
      price: 0.0,
      description: '',
      image: ''
    }
  }),
  methods: {
    productImage () {
      this.form.image = this.$refs.image
    },
    async saveProduct () {
      await this.$axios.post('product', this.form).then((response) => {
        if (response.status === 200) {
          this.$toast.show('Product save successful').goAway(1000)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
