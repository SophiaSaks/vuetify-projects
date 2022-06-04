<template>
  <v-app class="app">
    <Navbar />
 

    
    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },

  data: () => ({
    //
    
  }),
};
</script>

<style lang="scss">
.v-application--wrap {
  background-image: url('/Users/sophiasaks/Documents/GitHub/vuetify-projects/sophia-todo/public/tealbackground.jpg') ;
  background-size: cover; 
}
</style>