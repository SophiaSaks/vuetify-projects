<template>
   <v-dialog v-model="dialog" max-width="600">
       <template v-slot:activator="{ on, attrs }">
        <v-btn depressed
          color="teal accent-5"
          v-bind="attrs"
          v-on="on"
        >Add new project</v-btn>
      </template>
      <v-card>
          <v-card-title>
              <h2>Add a new project</h2>
          </v-card-title>
          
      </v-card>


   </v-dialog>
</template>


<script>
export default {

}
</script>
