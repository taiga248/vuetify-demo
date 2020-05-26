<template>
  <div class="grid">
    <v-container class="my-5">
      <h1>Grid</h1>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn block>1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block>2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block>3</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block>4</v-btn>
        </v-flex>
      </v-layout>
      <br>
      <v-layout row wrap>
        <v-flex xs6 md4>
          <v-btn block>1</v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn block>2</v-btn>
        </v-flex>
        <v-flex xs12 md4>
          <v-btn block>3</v-btn>
        </v-flex>
      </v-layout>
      <br>
      <v-layout row wrap justify-space-around>
        <v-flex xs4 md6>
          <v-btn block>1</v-btn>
        </v-flex>
        <v-flex xs4 md6>
          <v-btn block>2</v-btn>
        </v-flex>
      </v-layout>
      <br>
      <v-card class="ma-3 pa-3">
        <v-layout raw wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <p>index</p>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Assigned Team</div>
            <p>3-A</p>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Place</div>
            <p>Kanagawa</p>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Date</div>
            <p>{{ this.year }}</p>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card class="ma-3 pa-3">
        <v-layout raw wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <p>index</p>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Assigned Team</div>
            <p>3-A</p>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Place</div>
            <p>Kanagawa</p>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Date</div>
            <p>{{ this.year }}</p>
          </v-flex>
        </v-layout>
      </v-card>
 
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
}
</script>
