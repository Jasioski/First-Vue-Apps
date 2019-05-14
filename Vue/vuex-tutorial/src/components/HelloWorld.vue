<template>
  <div class="hello">
    <h1>The count is: {{ fetchCount }}</h1>
	<button class="btn btn-primary" @click="increment">Increase number</button>
	<button class="btn btn-primary" @click="decrement">Decrease number</button> 
    <br />
	<br />
	<button class="btn btn-primary" @click="save">Save to database</button> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios';

export default {
  name: 'HelloWorld',
  computed: mapGetters([
    'fetchCount'
  ]),
  
  methods:
  
  mapActions([
    'increment',
    'decrement',
	'save',
  ]),
}
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
