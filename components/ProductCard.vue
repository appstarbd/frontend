<template>
  <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
    <div class="px-4 py-2">
      <h1 class="text-gray-900 font-bold text-3xl uppercase">
        {{ title }}
      </h1>
      <p class="text-gray-600 text-sm mt-1">
<!--        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem-->
<!--        sequi illum facere recusandae voluptatibus-->
        {{ description }}
      </p>
    </div>
    <img
      class="h-56 w-full object-cover mt-2"
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="NIKE AIR"
    >
    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 class="text-gray-200 font-bold text-xl">
        ${{ price }}
      </h1>
      <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
        Add to card
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      required: true,
      type: String,
      default: () => 'Title'
    },
    description: {
      required: true,
      type: String,
      default: () => 'Description'
    },
    photo: {
      required: false,
      type: String,
      default: () => 'Title'
    },
    price: {
      required: true,
      type: Number,
      default: () => 0.0
    }
  }
}
</script>

<style scoped>

</style>
