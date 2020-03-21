<template>
  <div>
    <router-link to='/edit' class="add">Add new user</router-link>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>name:</th>
          <th>surname:</th>
          <th>phone:</th>
          <th>email:</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="users.length === 0">
          <td colspan="7">Not Users yet. Add Users</td>
        </tr>
        <tr v-for="(user, index) in users" v-bind:key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td><router-link class="edit-button" :to="'edit/' + user.id">Edit</router-link></td>
          <td><button class="delete-button" type="button" @click="onDeleteClick(index)">X</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    onDeleteClick (index) {
      this.users = this.users.filter((item, i) => i !== index)
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  },
  data: () => ({
    users: []
  }),
  mounted () {
    if (localStorage.getItem('users')) {
      let maxId
      try {
        this.users = JSON.parse(localStorage.getItem('users'))
        maxId = this.users.reduce((acc, item) => {
          return acc >= item.id ? acc : item.id
        }, 1)
        localStorage.setItem('nextId', maxId + 1)
      } catch (e) {
        localStorage.removeItem('users')
        localStorage.setItem('nextId', 1)
      }
    }
  }
}
</script>

<style lang="scss">
.table {
  border-collapse: collapse;
  margin: 30px auto;
}

th {
    background-color: lightgrey;
    border: 1px solid black;
    padding: 5px 10px;
}

td {
    border: 1px solid black;
    background-color: lightcyan;
    padding: 5px 10px;
    text-align: center;
    padding: 10px;
}

.add {
  display: block;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  margin: 10px auto 30px;
  text-decoration: none;
  color: black;
  background-color: lightsalmon;
}

.delete-button {
  border-radius: 50%;
  background-color: red;
  border: none;
  color: white;
}

.edit-button {
  text-decoration: none;
  padding: 5px;
  border: 1px solid gray;
  margin: 5px;
  color: black;
  border-radius: 10px;
  background-color: lightsalmon;
}

</style>
