<template>
  <div class="max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
    <div>
      <h3 class="font-bold text-2xl">
        Forgot password
      </h3>
      <p class="text-gray-600 pt-2">
        Recover your account.
      </p>
    </div>

    <div class="mt-10">
      <form class="flex flex-col" method="POST" action="#">
        <div class="mb-6 pt-3 rounded bg-gray-200">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
          <input
            id="email"
            type="text"
            class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-pink-600 transition duration-500 px-3 pb-3"
          >
        </div>
        <button
          class="bg-purple-600 hover:bg-pink-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
        >
          Send Email
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  layout: 'auth',
  middleware: 'guest'
}
</script>

<style scoped>

</style>
