<template>
  <div class="hello">
    <h1>{{ fetchMain }}</h1>
    <h2>{{ msg }}</h2>
    <ul>
      <li>
        <a
          href="https://nrc.canada.ca/en/"
          target="_blank"
        >
          NRC Website
        </a>
      </li>
    </ul>

    <ul>
      <li>
        <a
          href="http://localhost:8080/#/tabs"
          target="_blank"
        >
          Tabs
        </a>

        <a
          href="http://localhost:8080/#/tables"
          target="_blank"
        >
          Tables
        </a>
      </li>
    </ul>

    <button class="btn btn-primary" @click="changeMain">Change Text</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters([
    'fetchMain',
  ]),

  methods: mapActions([
    'changeMain',
  ]),

  data() {
    return {
      msg: 'Welcome',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
