<template>
  <v-app>
    <app-bar
      :links="links"
    ></app-bar>
    <v-content>
      
        <router-view></router-view>
      
    </v-content>
    <app-footer
      :links="links"
    ></app-footer>
  </v-app>
</template>

<script>
import AppBar from './components/dashboard/AppBar'
import AppFooter from './components/dashboard/AppFooter'

export default {
  name: 'App',
  components: {
    AppBar,
    AppFooter
  },
  data () {
    return {
      links: [
        {
          label: 'home',
          url: '/'
        },
        {
          label: 'login',
          url: '/login'
        },
        {
          label: 'about',
          url: '/about'
        },
        {
          label: 'dashboard',
          url: '/dashboard'
        }
      ]
    }
  }
};
</script>
