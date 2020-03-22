<template>
  <div class="table-container">
    <router-link tag="button" to='/edit' class="btn add">Add new user</router-link>
    <table class="centered highlight table">
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
          <td><router-link class="btn edit-button" :to="'edit/' + user.id">Edit</router-link></td>
          <td><button class="btn delete-button" type="button" @click="onDeleteClick(index)">X</button></td>
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
    } else {
      localStorage.setItem('nextId', 1)
    }
  }
}
</script>

<style lang="scss">

.table-container {
  padding: 0 10px;
}
.table {
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2);
}

.add,
.add:visited {
  text-decoration: none;
  display: block;
  width: 180px;
  margin: 10px auto 30px;
  background-color: lightsalmon;
}

.delete-button {
  border-radius: 50%;
  background-color: red;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 0;
}

.table td:last-child,
.table td:first-child {
  width: 60px;
}

.table td:nth-last-child(2) {
  width: 90px;
}

.edit-button {
  background-color: lightsalmon;
}
</style>
