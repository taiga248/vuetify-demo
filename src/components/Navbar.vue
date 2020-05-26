<template>
  <nav>
    <v-app-bar app>
      <v-icon v-if="!drawer" left class="grey--text" @click="toggle">mdi-menu</v-icon>
      
      <v-toolbar-title>
        <span class="font-weight-light">Energy</span>
        <span>TG</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="grey--text" to="/sns">
        <span>contact</span>
        <v-icon right>mdi-email-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-list>
        <v-list-item>
          <v-list-item-title class="title white--text">EnergyTG</v-list-item-title>
          <v-icon class="white--text" @click="toggle">mdi-window-close</v-icon>
        </v-list-item>
        <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
          <v-list-item-action>
            <v-icon right class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
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
      links : [
        {icon: 'mdi-account', text: 'About', route: '/'},
        {icon: 'mdi-grease-pencil', text: 'Grid', route: '/Grid'},
        {icon: 'mdi-cellphone', text: 'SNS', route: '/sns'},
      ],
    }
  },
  methods: {
    toggle: function() {
      this.drawer = !this.drawer
    }
  }
}
</script>