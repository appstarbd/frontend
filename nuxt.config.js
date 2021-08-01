export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: { class: 'bg-gray-400 font-sans leading-normal tracking-normal' }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],
  // toast: {
  //   position: 'top-center',
  //   register: [ // Register custom toasts
  //     {
  //       name: 'my-error',
  //       message: 'Oops...Something went wrong',
  //       options: {
  //         type: 'error'
  //       }
  //     }
  //   ]
  // },
  auth: {
    // Options
    // plugins: ['~/plugins/auth.js'],
    // strategies: {
    //   local: {
    //     endpoints: {
    //       login: { url: 'login', method: 'post', propertyName: 'data.token' },
    //       user: { url: 'me', method: 'get', propertyName: 'data' },
    //       logout: false
    //     }
    //   }
    // },
    // redirect: {
    //   login: '/login',
    //   logout: '/',
    //   callback: '/login',
    //   home: '/'
    // },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://127.0.0.1:80',
        endpoints: {
          login: {
            url: '/login'
          }
          // logout: {
          //   url: '/api/logout'
          // },
          // user: {
          //   url: '/api/user'
          // }
        }
      },
      // local: {
      //   endpoints: {
      //     login: {
      //       url: '/login',
      //       method: 'post',
      //       withCredentials: true,
      //       headers: {
      //         'X-Requested-With': 'XMLHttpRequest',
      //         'Content-Type': 'application/json'
      //       }
      //     },
      //     user: {
      //       url: '/api/user',
      //       method: 'get',
      //       propertyName: false,
      //       withCredentials: true,
      //       headers: {
      //         'X-Requested-With': 'XMLHttpRequest',
      //         'Content-Type': 'application/json'
      //       }
      //     }
      //   },
      //   tokenRequired: false,
      //   tokenType: false
      // },
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: false },
          user: { url: '/api/user', method: 'get', propertyName: false }
        },
        tokenRequired: false,
        tokenType: false
      }
    },
    // plugins: [{ src: '~/plugins/axios', ssr: true }, '~/plugins/auth.js']
    plugins: []
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true,
    baseURL: 'http://127.0.0.1:80/api',
    credentials: true
  },
  // proxy: {
  //   '/backend': {
  //     target: 'http://backend.test',
  //     pathRewrite: { '^/backend': '/' }
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
