<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropdown menu -->
            <div class="text-center">
                <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="btn-border-none"
                        outlined
                    >
                    <v-icon left>mdi-chevron-down</v-icon>
                    <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(link, index) in links"
                    :key="index" router :to="link.route"
                    >
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            <!-- End dropdown menu -->
            <v-btn outlined color="grey" class="btn-border-none">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subtitle-1 mt-1">
                        The Net Ninja
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup />
                </v-flex>
            </v-layout>
            <v-list
                nav
                dense
            >
                <v-list-item-group
                >
                    <v-list-item
                        v-for="(link, i) in links" :key="i"
                        router :to="link.route"
                    >
                        <v-list-item-icon>
                            <v-icon class="white--text" v-text="link.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
    components:{Popup},
    data(){
        return {
            drawer: false,
            links: [
                {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
                {icon: 'mdi-account', text: 'Team', route: '/team'},
            ]
        }
    }
}
</script>

<style>

</style>