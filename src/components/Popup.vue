<template>
  <div class="text-center">
    <v-dialog
      width="600"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            class="success"
            v-bind="attrs"
            v-on="on"
            >
            Add new project
            </v-btn>
        </template>

        <v-card>
        <v-card-title>
            <h2>Add a New Project</h2>
        </v-card-title>

        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="due"
                        label="Due date"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="due"
                    @input="menu2 = false"
                    ></v-date-picker>
                </v-menu>
                <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            content: '',
            due: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu2: false,
            modal: false,
        }
    },
    methods: {
        submit(){
            console.log(this.title, this.content);
        }
    }
}
</script>