<template>
<v-container>
  <v-row

  >
    <v-carousel
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(color, index) in colors"
        :key="index"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              Slide {{ index + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-row>

</v-container>

</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ]
    }
  }
}
</script>

<style>

</style>
