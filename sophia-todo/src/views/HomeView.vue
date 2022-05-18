<template>
  <div class="home">
  <h1 class="subheading grey--text">Homepage</h1>

  <v-container class="my-5">
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
            <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>
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
          { title: 'Design a new website', person: 'Sophia', due: '18 May 2022', status: 'ongoing', content: 'lorem ipsum'},
          { title: 'learn vuetify', person: 'Sophia', due: '25 May 2022', status: 'complete', content: 'lorem ipsum'},
          { title: 'Fix the background for website', person: 'Sophia', due: '17 May 2022', status: 'overdue', content: 'lorem ipsum'},
        ],
      }
    }

  }
</script>

<style>

.project.complete {
  border-left: 4px solid #66DD8F;
}

.project.ongoing {
  border-left: 4px solid #44828F;
}

.project.overdue {
  border-left: 4px solid #DD6D66;
}


</style>

