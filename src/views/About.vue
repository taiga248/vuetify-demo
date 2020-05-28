<template>
  <div class="about">
    <v-container>
      <h1>About</h1>
      <h2 class="text-center my-1">Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia magni sapiente sunt inventore voluptatibus explicabo eligendi eveniet sed veniam facilis, eaque fuga nemo corrupti dolore, fugiat doloribus culpa dolor?
        Adipisci beatae rerum aspernatur officiis eum? Quisquam ut fuga odio, alias ipsam eius possimus eum quaerat aliquid cum pariatur, placeat nihil recusandae perferendis magni ratione similique ad incidunt voluptatibus accusamus.
        Id incidunt modi odit magni voluptate earum facilis dolorum animi quidem minus sapiente, sunt eaque rerum cupiditate voluptatem qui consequatur illum accusamus? Cupiditate nihil expedita eius ex dolorum animi! Hic.
      </p>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 class="pa-5">
          <h2 class="text-center my-1">1</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi at, accusamus repellat sunt omnis? Adipisci facere autem minus culpa veniam nostrum eius sunt unde illo. Voluptates aperiam iusto non?</p>
        </v-flex>
        <v-flex xs12 sm6 md4 class="pa-5">
          <h2 class="text-center my-1">2</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi at, accusamus repellat sunt omnis? Adipisci facere autem minus culpa veniam nostrum eius sunt unde illo. Voluptates aperiam iusto non?</p>
        </v-flex>
        <v-flex xs12 sm6 md4 class="pa-5">
          <h2 class="text-center my-1">3</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi at, accusamus repellat sunt omnis? Adipisci facere autem minus culpa veniam nostrum eius sunt unde illo. Voluptates aperiam iusto non?</p>
        </v-flex>
      </v-layout>

      <v-divider class="my-10"></v-divider>

      <v-layout row>
        <v-flex xs12 md3>
          <v-responsive align="center" class="my-4">
            <v-avatar size="20vh">
              <v-img outlined src="https://picsum.photos/200" alt="avatar" />
            </v-avatar>
          </v-responsive>
        </v-flex>
        <v-flex xs12 md9>
          <h2 class="text-center">Lorem</h2>
          <p warp>
            <span class="display-2">R</span>
            ccusantium facere, at consequuntur iure et labore inventore sapiente qui officia laborum perferendis eius nemo necessitatibus deserunt adipisci itaque vero, vitae id molestiae tempora dignissimos rerum! Beatae sequi suscipit eligendi?
            Est at enim id inventore unde fuga, et incidunt perspiciatis aliquam, iste reprehenderit rerum. Necessitatibus, adipisci dolore et nesciunt vel expedita earum quos dolores explicabo ullam eligendi, porro suscipit! Accusamus.
          </p>
        </v-flex>
      </v-layout>

      <v-divider class="my-10"></v-divider>

      <template>
        <v-layout row wrap>
          <v-flex sm12>
            <h1 class="text-center my-4">Lazy loading</h1>
          </v-flex>
          <v-flex xs12 sm6 md4 v-for="index in 9" :key="index">
            <v-lazy :options="{ threshold: .7 }" min-height="200" transition="fade-transition">
              <v-card class="mx-3 my-4" min-width="200">
                <v-card-title>Card title</v-card-title>
                <v-card-text>
                  Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.
                  In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus hendrerit tortor. Ut varius tincidunt libero.
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-flex>
        </v-layout>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      isActive: false
    };
  }
};
</script>
