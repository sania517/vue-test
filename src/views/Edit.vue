<template>
  <div>
    <h1 class="title" v-if="isEdit">Edit User Data</h1>
    <h1 class="title" v-else>Add new User</h1>
    <form @submit.prevent="onSubmit">
      <label>name:
        <input
          type="text"
          placeholder="Enter name"
          v-model="user.name"
          required
        >
      </label>
      <label>surname:
        <input
          type="text"
          placeholder="Enter Surname"
          v-model="user.surname"
          required
        >
      </label>
      <label>email:
        <input
          type="text"
          placeholder="Enter email"
          v-model="user.email"
        >
      </label>
      <label>number phone:
        <input
        type="text"
        placeholder="Enter phone number"
        v-model="user.phone"
        required
      >
      </label>
      <div class='button-container'>
        <button class="button" type="submit">{{isEdit ? 'Save' : 'Add'}}</button>
        <router-link class="button" to="/">Return</router-link>
      </div>
    </form>
    <ImportForm />
  </div>
</template>

<script>
import ImportForm from '../components/ImportForm'
export default {
  name: 'Edit',
  components: { ImportForm },
  data: () => ({
    users: [],
    isEdit: false,
    user: { name: '', surname: '', email: '', phone: '', id: 0 }
  }),
  methods: {
    onSubmit () {
      console.log(this.users)
      if (this.user.name && this.user.surname && this.user.phone) {
        if (!this.isEdit) {
          this.user.id = +localStorage.getItem('nextId')
          this.users.push(this.user)
          localStorage.setItem('nextId', this.user.id + 1)
          localStorage.setItem('users', JSON.stringify(this.users))
          this.user = { name: '', surname: '', email: '', phone: '', id: 0 }
        } else {
          console.log('innn', this.user)
          console.log('innn', this.users)
          console.log('innn', this.user)
          localStorage.setItem('users', JSON.stringify(this.users))
        }
      }
    }
  },
  mounted () {
    let user

    if (localStorage.getItem('users')) {
      try {
        this.users = JSON.parse(localStorage.getItem('users'))
      } catch (e) {
        localStorage.removeItem('users')
      }
    }

    if (this.users.length && this.$route.params.id) {
      user = this.users.find(user => user.id === +this.$route.params.id)
    }

    if (user) {
      this.user = user
      this.isEdit = true
    }
  }
}
</script>

<style lang="scss">

.button {
  padding: 5px 10px;
  width: 30%;
  text-decoration: none;
  background-color: lightgray;
  color: black;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 10px;
  text-align: center;
  line-height: 25px;
}

.button-container {
  margin: 10px 10% 20px;
  display: flex;
  justify-content: space-around;
}

.title {
  margin: 20px auto;
  width: fit-content;
}

.table {
  border-collapse: collapse;
  margin: 30px auto;
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
  color: blueviolet
}

label,
input {
  display: block;
  padding: 10px;
  width: 90%;
  border-radius: 10px;
  border-color: grey;
  border-width: 1px solid black;
}

label {
  margin: 0 auto;
}

form {
  width: 350px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 20px;
}

</style>
