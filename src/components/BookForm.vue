<template>
  <div class="row">
    <h4>Book Input</h4>
  </div>
  <div class="row form-group">
    <input class="form-control book-form" id placeholder="Book Title" v-model="newTitle" />
    <input class="form-control book-form" placeholder="Book Writer" v-model="newWriter" />
    <button class="mybutton mybtn-1" id="add-book-btn" @click="addBook">Add Book</button>
  </div>
</template>

<script>
export default {
  name: "BookForm",
  data() {
    return {
      newTitle: null,
      newWriter: null,
    };
  },
  props: {
    createData: Function,
  },
  methods: {
    addBook() {
      if (!this.newTitle || !this.newWriter) {
        return;
      }
      this.createData(this.newTitle, this.newWriter);
      this.newTitle = "";
      this.newWriter = "";
    },
  },
};
</script>

<style scoped>
.book-form {
  margin: 5px 5px 5px 0px;
  width: 35%;
}
#add-book-btn {
  width: 29%;
}
</style>