<template>
    <nav>
        <v-app-bar flat app class="black">
            <v-btn text class="teal--text" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon></v-btn>
            <v-toolbar-title class="text-uppercase teal--text">
                <span class="font-weight-light">Todo</span>
                <span class="font-weight-bold">Sophia</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn text color="teal accent-4">
                <span>Sign Out</span>
                <v-icon right>mdi-logout</v-icon>

            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="teal lighten-2">
             <v-sheet
        color="teal lighten-2"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div class="white--text">Sophia S</div>
        </v-sheet>
        <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                     <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>


                </v-list-item>
                
            </v-list>

        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-home', text: 'Home', route: '/'},
                {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
                {icon: 'mdi-account-group', text: 'Team', route: '/team'},

            ]
        }
    }

};
</script>