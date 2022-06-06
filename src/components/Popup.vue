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
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>