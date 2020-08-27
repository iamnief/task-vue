<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Books</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
export default {
  // name: "App"
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.mybutton {
  height: 45px;
  color: #fff;
  border-radius: 7px;
  border: none;
}
.mybtn-1 {
  background: #288f43;
}
.mybtn-1:hover {
  background: #2ea64e;
}
.mybtn-2 {
  background: #db3d21;
}
.mybtn-2:hover {
  background: #eb5d21;
}
</style>
