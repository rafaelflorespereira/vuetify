<template>
  <div>
    <app-bar></app-bar>
    <my-login></my-login>
  </div>
</template>

<script>
import AppBar from '@/components/dashboard/AppBar'
import Login from '@/components/dashboard/Login'

export default {
    components: {
        AppBar,
        MyLogin: Login
    }
}
</script>

<style>

</style>