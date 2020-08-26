<template>
  <div class="row">
    <h4>Book List</h4>
  </div>
  <div class="row book-list">
    <div v-for="(book, n) in listBook" v-bind:key="book.title" class="col-lg-12">
      <div class="row mb-2">
        <span class="book-item">
          <p>{{book.title}} - {{book.writer}}</p>
        </span>
        <button class="mybutton mybtn-2" id="del-book-btn" @click="deleteData(n)">Delete Book</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "BookList",
    props: {
        deleteData: Function,
        listBook: Array
    }
}
</script>

<style scoped>
#del-book-btn {
  width: 19%;
}
.book-item {
  margin: 1px 5px 1px 0px;
  padding: 10px;
  width: 80%;
  color: #000;
  border-radius: 5px;
  background: #dcdcdc;
  text-align: left;
}
.book-item p {
  margin: 0;
}
</style>