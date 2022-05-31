<template>
  <div class="projects">
  <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">

       <v-expansion-panels>
    <v-expansion-panel v-for="project in myProjects" :key="project.title"
      
    >
      <v-expansion-panel-header>
        {{ project.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="px-4 grey--text" >
        <div class="font-weight-bold">due by {{ project.due }}</div>
        <div> {{ project.content }}</div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

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
          { title: 'Fix the background for website', person: 'Mia', due: '17 May 2022', status: 'overdue', content: 'lorem ipsum'},
        ],

      }
    },
    computed: {
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'Sophia'
        })

      }
    }

  }
</script>