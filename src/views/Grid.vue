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
      <br />
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
      <br />
      <v-layout row wrap justify-space-around>
        <v-flex xs4 md6>
          <v-btn block>1</v-btn>
        </v-flex>
        <v-flex xs4 md6>
          <v-btn block>2</v-btn>
        </v-flex>
      </v-layout>
      <br />

      <v-divider class="pa-3"></v-divider>

      <h1>DashBoard</h1>
      <v-card class="my-4 px-4 py-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap>
          <v-flex xs12 md5 class="pl-4">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs3 md2 class="pl-4">
            <div class="caption grey--text">Team</div>
            <div>{{ project.team }}</div>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Place</div>
            <div>{{ project.place }}</div>
          </v-flex>
          <v-flex xs3 md2>
            <div class="caption grey--text">Date</div>
            <div>{{ project.date }}</div>
          </v-flex>
          <v-flex xs2 md1>
            <div>
              <v-chip
                :color="statusColor(project.status)"
                text-color="white"
                class="caption px-2 my-2"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Grid",
  data() {
    return {
      projects: [
        {
          title: "Project-1",
          team: "B",
          place: "Kanagawa",
          date: "2019",
          status: "done"
        },
        {
          title: "Project-2",
          team: "A",
          place: "Chiba",
          date: "2020",
          status: "done"
        },
        {
          title: "Project-3",
          team: "C",
          place: "Tokyo",
          date: "2020",
          status: "WIP"
        },
        {
          title: "Project-4",
          team: "A",
          place: "Osaka",
          date: "2020",
          status: "new"
        }
      ]
    };
  },
  methods: {
    statusColor: function(status) {
      switch (status) {
        case "done":
          return "rgb(48, 209, 88)";
        case "WIP":
          return "rgb(10, 132, 255)";
        case "new":
          return "rgb(255, 55, 95)";
        default:
          break;
      }
    }
  }
};
</script>
