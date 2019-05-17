<template>
  <div>

    <h1> Tabs Page </h1>
    <ul>
      <li>
        <a
          href="http://localhost:8080/#/"
          target="_blank"
        >
          Home
        </a>
      </li>
    </ul>

    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="row in rows"
        :key="row"
        ripple
      >
        Item {{ row.id }}

      </v-tab>


      <v-tab-item
        v-for="row in rows"
        :key="row"
      >
        <v-card flat>
          <v-card-text>{{ row.name + '\n' + row.phone + "\n" + row.profession }}</v-card-text>
        </v-card>
      </v-tab-item>

<!-- Start of code for the 'TABLE' tab */ -->
       <v-tab ripple>
        Table


      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>


  </v-card-text>
        </v-card>
      </v-tab-item>
    <!-- End of code for the 'TABLE' tab */ -->

    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click="next">next tab</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      rows: [
        { id: 1, name: 'Chandler Bing', phone: '305-917-1301', profession: 'IT Manager' },
        { id: 2, name: 'Ross Geller', phone: '210-684-8953', profession: 'Paleontologist' },
        { id: 3, name: 'Rachel Green', phone: '765-338-0312', profession: 'Waitress' },
        { id: 4, name: 'Monica Geller', phone: '714-541-3336', profession: 'Head Chef' },
        { id: 5, name: 'Joey Tribbiani', phone: '972-297-6037', profession: 'Actor' },
        { id: 6, name: 'Phoebe Buffay', phone: '760-318-8376', profession: 'Masseuse' },
      ],


      /* From here until closing comment is data for the 'TABLE' tab */
      pagination: {
        sortBy: 'name',
      },
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],

    /* End of code for the 'TABLE' tab */

    };
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = (active < 6 ? active + 1 : 0);
    },

    /* From here until closing comment is data for the 'TABLE' tab */
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.desserts.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    /* End of code for the 'TABLE' tab */
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
