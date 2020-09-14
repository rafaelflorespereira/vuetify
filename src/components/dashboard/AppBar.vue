<template>
  <v-app-bar
    app
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    dark
    >
    <v-toolbar-title>Vue Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn 
            v-for="link in links" 
            :key="`${link.label}-header-link`"
            :to="`${link.url}`"
            text
            round
        >
        {{link.label}}
        </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>

export default {
  props: ['links']
}
</script>

<style>

</style>