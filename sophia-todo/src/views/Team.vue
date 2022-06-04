<template>
  <div class="team">
  <h1 class="subheading white--text">Team</h1>

  <v-container class="my-5">

    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card flat class="text-xs-center ma-2">
          <v-responsive class="pt-4 ma-2">
            <v-avatar size="80">
              <img :src="person.avatar"> 
            </v-avatar>
         
            </v-responsive>
          <v-card-text>
            <div class="subheading"> {{ person.name }}</div>
            <div class="grey--text"> {{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn depressed color="teal" class="white--text">
              <v-icon small left>mdi-message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
          </v-card>
      </v-flex>


    </v-layout>

  </v-container>


  </div>
</template>

<script>

  export default {
    data () {
      return {
        team: [
          { name: 'Sophia S', role: 'UX-designer & frontend', avatar: '/profilbildrymden.jpg'},
          { name: 'Mia', role: 'kitty cat and emotional support', avatar: '/miasprofil.png'},
          { name: 'Example', role: 'example-role', avatar: '/persona.jpg'},
        ]
      }
    }

  }
</script>