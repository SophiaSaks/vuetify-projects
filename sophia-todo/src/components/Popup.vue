  <template>
   <v-dialog v-model="dialog" max-width="600">
       <template v-slot:activator="{ on, attrs }">
        <v-btn depressed
          color="teal accent-5 white--text"
          v-bind="attrs"
          v-on="on"
        >Add new project</v-btn>
      </template>
      <v-card>
          <v-card-title>
              <h2>Add a new project</h2>
          </v-card-title>
          <v-card-text>
            <v-form class="px-3"
               ref="form"
              v-model="valid"
              lazy-validation>
              <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules" required></v-text-field>
              <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                        
                        
               <v-menu v-model="menu2"
          :close-on-content-click="false"
          max-width="290">
                 <template v-slot:activator="{ on, attrs }">
                 <v-text-field label="Due date" :value="due"
                 v-bind="attrs"
                 v-on="on"
                 prepend-icon="mdi-calendar">
                  </v-text-field>
                 </template>
                 <v-date-picker v-model="due"></v-date-picker>

                
                 
               </v-menu>
                        

              <v-btn depressed class="mx-0 mt-3" color="teal accent-4" @click="submit">Add project</v-btn>
            </v-form>
          </v-card-text>
          
      </v-card>


   </v-dialog>
</template>


<script>


export default {
  data() {
    return {
      title: '',
      content: '',
      due: null
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  },
 

    
  


}
</script>
