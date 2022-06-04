<template>
  <div class="home">
  <h1 class="subheading grey--text">Homepage</h1>

  <v-container class="my-5">

    <v-layout row class="mb-10">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
              <v-btn small depressed color="grey mr-1" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
        </template>

      <span>Sort project by project name</span>
      </v-tooltip>
   
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
      <v-btn small depressed color="grey mr-1" @click="sortBy('person')" v-bind="attrs" v-on="on">
        <v-icon left small>mdi-account</v-icon>
        <span class="caption text-lowercase">by person</span>
        
      </v-btn>
      </template>
      <span>Sort project by person</span>
      </v-tooltip>

      </v-layout>
    

    <v-card flat v-for="project in projects" :key="project.title">
      
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div> {{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div> {{project.person}}</div>
          </v-flex>
             <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
             <v-flex xs2 sm4 md2>
               <div>
                 <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
               </div>
            
            
          </v-flex>

        </v-layout>
      </v-card>

  </v-container>


  </div>
</template>

<script>

  export default {
    data() {
      return {
        projects: [
          { title: 'Design a new website', person: 'Sophia', due: '2022-06-12', status: 'ongoing', content: 'lorem ipsum'},
          { title: 'learn vuetify', person: 'Sophia', due: '2022-06-02', status: 'complete', content: 'lorem ipsum'},
          { title: 'Fix the background for website', person: 'Mia', due: '2022-06-02', status: 'overdue', content: 'lorem ipsum'},
        ],
      }
    },
    methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }

    },

  }
</script>

<style>

.theme--light.v-chip.complete:not(.v-chip--active)  {
  background: #67E5A1;
}

.theme--light.v-chip.ongoing:not(.v-chip--active) {
  background: #009688;
}

.theme--light.v-chip.overdue:not(.v-chip--active) {
  background: #B35CC9;
}



.project.complete {
  border-left: 4px solid #67E5A1;
}

.project.ongoing {
  border-left: 4px solid #009688;
}

.project.overdue {
  border-left: 4px solid #B35CC9;
}



</style>

