<template>
  <div class="hello">
    <h1>The count is: {{ fetchCount }}</h1>
	<button class="btn btn-primary" @click="increment">Increment number</button>
	<button class="btn btn-primary" @click="decrement">Decrement number</button> 
    <br />
	<br />
	<button class="btn btn-primary" @click="save">Set the counter</button> 
	<button class="btn btn-primary" @click="date">Get date and time</button> 
	<br />
	<br />
	<p1> {{ fetchStat }} </p1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios';


export default {
  name: 'HelloWorld',
  computed: mapGetters([
    'fetchCount',
	'fetchStat'
  ]),
  
  methods:
  
  mapActions([
    'increment',
    'decrement',
	'save',
	'date'
  ]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

p1 {
  font-weight: bold;
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
