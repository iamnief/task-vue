<template>
  <div class="container">
    <h4 class="row text-left mb-3">Users</h4>
    <div class="row text-left mb-2">
      <div class="col-4 input-group mb-3">
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
      <div class="col-2"></div>
      <div class="col-4 input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="showrows">Show</label>
        </div>
        <select class="custom-select" id="showrows" v-model="nRows">
          <option :value="users.length" selected>all rows</option>
          <option value="3">3 rows</option>
          <option value="5">5 rows</option>
          <option value="10">10 rows</option>
        </select>
      </div>
      <button class="mybutton mybtn-1 col-1" @click="showRows">Show</button>
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
          <tr v-for="user in showed" :key="user.id">
            <th>{{user.id}}</th>
            <td>{{user.email}}</td>
            <td>{{user.first_name}}</td>
            <td>{{user.last_name}}</td>
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
      nRows: null,
      sortChoice: 1,
      pages: 1,
      users: [],
      showed: [],
    };
  },
  mounted() {
    Axios.get("https://reqres.in/api/users?page=1")
      .then((response) => {
        this.responseLoading = true;
        this.users = this.users.concat(response.data.data);
        // this.nRows = this.users.length;
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
        this.nRows = this.users.length;
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        this.responseError = true;
      })
      .finally(() => {
        this.responseLoading = false;
        this.sortUsers()
      });
  },
  methods: {
    showRows() {
      if (this.nRows == this.users.length) this.pages = 1;
      else this.pages = Math.ceil(this.users.length / this.nRows);
      console.log(this.pages);
    },
    sortUsers() {
      // console.log("run");
      if (this.sortChoice != null) {
        // console.log("run 2");
        switch (this.sortChoice) {
          case "1": {
            this.users.sort((a, b) => {
              return a.id - b.id;
            });
            console.log(this.sortChoice == 1);
            break;
          }
          case "2": {
            this.users.sort((a, b) => {
              return b.id - a.id;
            });
            break;
          }
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