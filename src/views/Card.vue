<template>
  <div class="card">
    <v-container class="my-5">
      <h1>Card</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(card, index) in cards" :key="index">
          <v-card class="ma-3 text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img :src="card.avatar" alt="avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ card.name }}</div>
              <div class="grey--text">{{ card.from }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey--text">
                <v-icon small left>mdi-message-outline</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      cards: [
        {name: 'Yuki', from: 'Japan', avatar: 'https://picsum.photos/195'},
        {name: 'Jake', from: 'USA', avatar: 'https://picsum.photos/196'},
        {name: 'Chim', from: 'Korea', avatar: 'https://picsum.photos/197'},
        {name: 'Jhon', from: 'USA', avatar: 'https://picsum.photos/198'},
        {name: 'Whon', from: 'Chine', avatar: 'https://picsum.photos/199'},
        {name: 'Taro', from: 'Japan', avatar: 'https://picsum.photos/200'},
      ]
    }
  }
}
</script>
