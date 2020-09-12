<template>
  <v-app>
    <app-bar></app-bar>
    <login></login>
  </v-app>
</template>

<script>
import AppBar from './components/dashboard/AppBar'
import Login from './components/dashboard/Login'
export default {
  name: 'App',

  components: {
    AppBar,
    Login
  },

  data: () => ({
    //
  }),
};
</script>
