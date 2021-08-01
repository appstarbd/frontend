<template>
  <div>
    <!--    <nav-bar />-->
    <!--    <hero />-->
    <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <div>
        <h3 class="font-bold text-2xl">
          Welcome to Startup
        </h3>
        <p class="text-gray-600 pt-2">
          Sign up to your account.
        </p>
      </div>

      <div class="mt-10">
        <form class="flex flex-col" method="POST" action="#" @submit.prevent="register">
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="name">Name</label>
            <input id="name" type="text" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
          </div>
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
            <input id="email" type="text" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
          </div>
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
            <input id="password" type="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
          </div>
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
          </div>
          <div class="flex justify-end">
            Already have an account?
            <nuxt-link to="login" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6 p-0.5">
              Click Now
            </nuxt-link>
          </div>
          <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'guest',
  middleware: 'guest',
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }),
  methods: {
    async register () {
      await this.$axios.post('register', this.form).then((response) => {
        if (response.status === 200) {
          this.$toast.show('Registration successful').goAway(1000)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
