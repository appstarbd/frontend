<template>
  <div>
    <div class="max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <div>
        <h3 class="font-bold text-2xl">
          Welcome to Startup
        </h3>
        <p class="text-gray-600 pt-2">
          Sign in to your account.
        </p>
      </div>
      <div class="mt-10">
        <form class="flex flex-col" method="POST">
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="text"
              class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-pink-600 transition duration-500 px-3 pb-3"
            >
          </div>
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-pink-600 transition duration-500 px-3 pb-3"
            >
          </div>
          <div class="flex justify-end">
            <nuxt-link
              to="forgot-password"
              class="text-sm text-pink-600 hover:text-pink-700 hover:underline mb-6"
            >
              Forgot your password?
            </nuxt-link>
          </div>
          <button
            type="button"
            class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            @click="login"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'guest',
  middleware: 'guest',
  // async fetch () {
  //   this.posts = await fetch('http://localhost/sanctum/csrf-cookie').then(res =>
  //     res.json()
  //   )
  // },
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  mounted () {
    // await this.$axios.get('http://localhost:80/sanctum/csrf-cookie').then((res) => {
    //   console.log(res)
    // })
  },
  methods: {
    // async login () {
    //   await this.$axios.get('http://localhost:80/sanctum/csrf-cookie').then(function (response) {
    //     // this.$axios.post('https://api/login', {
    //     this.$axios.post('http://localhost:80/login', {
    //       email: this.form.email,
    //       password: this.form.password
    //     })
    //   }.bind(this))
    // }
    async login () {
      // console.dir('login')
      // await this.$axios.$get('http://localhost:80/sanctum/csrf-cookie')
      await this.$auth.loginWith('laravelSanctum', this.form).then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
