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
      <v-layout row wrap>
        <v-flex xs6>
          <h1>DashBoard</h1>
        </v-flex>

        <v-flex class="my-auto">
          <div class="text-center">
            <v-dialog v-model="formDrawer" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on">プロジェクト追加</v-btn>
              </template>

              <v-card>
                <v-card-title primary-title>Add new project</v-card-title>
                <v-card-text>
                  <v-form class="px-3">
                    <v-text-field label="Project title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                    <v-select
                      :items="teams"
                      v-model="team"
                      label="Team"
                      prepend-icon="mdi-account-check"
                    ></v-select>
                    <v-text-field label="place" v-model="place" prepend-icon="mdi-map-marker"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="submit">Add</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
      </v-layout>

      <v-card class="my-4 px-4 py-3" v-for="(project, index) in projects" :key="index">
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
      formDrawer: false,
      title: "",
      team: [],
      place: "",
      teams: ["A", "B", "C"],
      project_status: ["done", "WIP", "new"],

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
          team: "C",
          place: "Tokyo",
          date: "2020",
          status: "WIP"
        },
        {
          title: "Project-3",
          team: "A",
          place: "Osaka",
          date: "2020",
          status: "new"
        }
      ]
    };
  },
  methods: {
    submit() {
      this.formDrawer = !this.formDrawer;
      let now = new Date();
      let year = now.getFullYear();

      const newTask = {
        title: this.title,
        team: this.team,
        place: this.place,
        date: year,
        status: "new"
      };

      this.projects.push(newTask);

      this.title = "";
      this.place = "";
    },
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
