<template>
  <div class="calculator container text-left">
    <h4 class="row">Calculator</h4>
    <div class="row form-group">
      <input
        class="form-control col-lg-2 mr-2"
        type="number"
        placeholder="Type a number"
        v-model="value1"
      />
      <select class="custom-select col-1 mr-2" v-model="operator">
        <option selected value="+">+</option>
        <option value="-">-</option>
        <option value="*">&times;</option>
        <option value="/">&divide;</option>
      </select>
      <input
        class="form-control col-lg-2 mr-2"
        type="number"
        placeholder="Type a number"
        v-model="value2"
      />
      <button class="mybutton mybtn-1 col-lg-1 mr-2" @click="calculate">Calculate</button>
      <p class="col-lg-3 result">
        Result:
        <span :class="{negative: result<0, positive: result>0}">{{result}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      value1: null,
      value2: null,
      operator: "+",
      result: null,
    };
  },
  methods: {
    calculate() {
      if (!this.value1 || !this.value2) this.result = null;
      if (this.operator == '+') this.result = this.value1+this.value2
      else if (this.operator == '-') this.result = this.value1-this.value2
      else if (this.operator == '*') this.result = this.value1*this.value2
      else if (this.operator == '/') this.result = this.value1/this.value2
    },
  },
};
</script>

<style scoped>
.result {
  padding: 5px;
}
.negative {
  color: red;
}
.positive {
  color: green;
}
</style>