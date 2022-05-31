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
            <v-form class="px-3">
              <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
              <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>

                        
                      <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="computedDateFormatted"
                      label="Date"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                            <v-date-picker
                              v-model="date"
                              no-title
                              @input="menu2 = false"
                            ></v-date-picker>
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
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  },
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  


}
</script>
