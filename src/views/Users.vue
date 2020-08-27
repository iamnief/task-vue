<template>
  <div class="container">
    <h4 class="row text-left mb-3">Users</h4>
    <div class="row text-left mb-2">
      <div class="col-3 input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="sortby">Sort by</label>
        </div>
        <select class="custom-select" id="sortby" v-model="sortChoice">
          <option selected value="1">ID - ascending</option>
          <option value="2">ID - descending</option>
          <option value="3">First Name - ascending</option>
          <option value="4">First Name - descending</option>
          <option value="5">Last Name - ascending</option>
          <option value="6">Last Name - descending</option>
          <option value="7">Email - ascending</option>
          <option value="8">Email - descending</option>
        </select>
      </div>
      <button class="mybutton mybtn-1 col-1" @click="sortUsers">Sort</button>
      <div class="col-3"></div>
      <div class="col-3 input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="showrows">Show</label>
        </div>
        <select class="custom-select" id="showrows" v-model="showing">
          <option selected :value="{rows: users.length, pages: 1, start: 0}">all rows</option>
          <option :value="{rows: 3, pages: Math.ceil(users.length/3), start: 0}">3 rows</option>
          <option :value="{rows: 5, pages: Math.ceil(users.length/5), start: 0}">5 rows</option>
          <option :value="{rows: 10, pages: Math.ceil(users.length/10), start: 0}">10 rows</option>
        </select>
      </div>
      <!-- <button class="mybutton mybtn-1 col-1" @click="showRows">Show</button> -->
      <div class="col-2 input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="page">Page</label>
        </div>
        <select class="custom-select" id="page" v-model="showing">
          <option
            v-for="i in showing.pages"
            :key="i"
            :value="{rows: showing.rows,  pages: showing.pages, start: (i-1)*showing.rows}"
          >{{i}}</option>
        </select>
      </div>
    </div>
    <div v-if="responseError" class="row text-center">
      <h4>Sorry, we failed to reach the data</h4>
    </div>
    <div v-else class="row">
      <table v-if="!responseLoading" class="table col-12 text-left">
        <thead class="thead-light">
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in showing.rows" :key="i">
            <th v-if="i-1+showing.start<users.length">{{users[i-1+showing.start].id}}</th>
            <td v-if="i-1+showing.start<users.length">{{users[i-1+showing.start].email}}</td>
            <td v-if="i-1+showing.start<users.length">{{users[i-1+showing.start].first_name}}</td>
            <td v-if="i-1+showing.start<users.length">{{users[i-1+showing.start].last_name}}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="col-12 text-center">
        <h4>Please wait, We're loading the data</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      responseError: false,
      responseLoading: true,
      showing: { rows: null, pages: 1, start: 0 },
      sortChoice: 1,
      users: [],
    };
  },
  mounted() {
    Axios.get("https://reqres.in/api/users?page=1")
      .then((response) => {
        this.responseLoading = true;
        this.users = this.users.concat(response.data.data);
        this.showing.rows = this.users.length;
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        this.responseError = true;
      })
      .finally(() => {
        this.responseLoading = false;
      });

    Axios.get("https://reqres.in/api/users?page=2")
      .then((response) => {
        this.responseLoading = true;
        this.users = this.users.concat(response.data.data);
        this.showing.rows = this.users.length;
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        this.responseError = true;
      })
      .finally(() => {
        this.responseLoading = false;
        this.sortUsers();
      });
  },
  methods: {
    showRows() {
      if (this.showing == this.users.length) this.pages = 1;
      else this.pages = Math.ceil(this.users.length / this.showing);
      // console.log(this.pages);
    },
    sortUsers() {
      // console.log("run");
      if (this.sortChoice != null) {
        // console.log("run 2");
        switch (this.sortChoice) {
          case "1":
            this.users.sort((a, b) => {
              return a.id - b.id;
            });
            console.log(this.sortChoice == 1);
            break;

          case "2":
            this.users.sort((a, b) => {
              return b.id - a.id;
            });
            break;

          case "3":
            this.users.sort((a, b) => {
              if (a.first_name < b.first_name) return -1;
            });
            break;
          case "4":
            this.users.sort((a, b) => {
              if (b.first_name < a.first_name) return -1;
            });
            break;
          case "5":
            this.users.sort((a, b) => {
              if (a.last_name < b.last_name) return -1;
            });
            break;
          case "6":
            this.users.sort((a, b) => {
              if (b.last_name < a.last_name) return -1;
            });
            break;
          case "7":
            this.users.sort((a, b) => {
              if (a.email < b.email) return -1;
            });
            break;
          case "8":
            this.users.sort((a, b) => {
              if (b.email < a.email) return -1;
            });
            break;
          default:
            // console.log('no');
            break;
        }
      }
    },
  },
};
</script>