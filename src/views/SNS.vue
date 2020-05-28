<template>
  <div class="sns">
    <v-container>
      <h1>SNS</h1>
      <v-layout>
        <v-row class="text-center">
          <v-col :href="link.url" v-for="(link, index) in links" :key="index">
            <a class="icon" :href="link.url" target="__blank">
              <v-icon class="display-2">{{ link.icon }}</v-icon>
            </a>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SNS",
  data() {
    return {
      links: [
        { icon: "mdi-twitter", url: "https://twitter.com/ez_taiga" },
        { icon: "mdi-github", url: "https://github.com/taiga248" },
        { icon: "mdi-instagram", url: "https://www.instagram.com/tg_____n/" },
        { icon: "mdi-gmail", url: "https://google.com" },
        { icon: "mdi-facebook", url: "https://www.facebook.com/itotai358" }
      ]
    };
  }
};
</script>

<style scoped>
.icon {
  text-decoration: none;
}
</style>
