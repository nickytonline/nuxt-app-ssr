// https://nuxt.com/docs/api/configuration/nuxt-config
const yo = defineNuxtConfig({
    nitro: {
    routeRules: {
      '/hello': { swr: true },
    },
    // prerender: {
    //   routes: ['/**'],
    // },
  },
})

console.dir(yo)

export default yo
