<template>
  <div class="container">
    <BookForm :createData="addBook" />
    <BookList :listBook="books" :deleteData="deleteBook" />
  </div>
</template>

<script>
import BookForm from '@/components/BookForm.vue'
import BookList from '@/components/BookList.vue'

export default {
  name: "Books",
  data() {
    return {
      books: [],
    };
  },
  methods: {
    addBook(title, writer) {
      this.books.push({ title: title, writer: writer });
      this.saveBooks();
    },
    deleteBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsedData = JSON.stringify(this.books);
      localStorage.setItem("myBooks", parsedData);
    },
  },
  components: {
    BookForm,
    BookList
  },
};
</script>