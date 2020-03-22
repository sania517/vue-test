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
          type="email"
          placeholder="Enter email"
          v-model="user.email"
        >
      </label>
      <label>number phone:
        <input
          type="tel"
          title="38(ХХХ)XXX-XX-XX"
          placeholder="38(ХХХ)XXX-XX-XX"
          v-model="user.phone"
          pattern="38\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        >
      </label>
      <div class='button-container'>
        <button class="btn button" type="submit">{{isEdit ? 'Save' : 'Add'}}</button>
        <router-link tag="button" class="btn button" to="/">Return</router-link>
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
      if (this.user.name && this.user.surname && this.user.phone) {
        if (!this.isEdit) {
          this.user.id = +localStorage.getItem('nextId')
          this.users.push(this.user)
          localStorage.setItem('nextId', this.user.id + 1)
          localStorage.setItem('users', JSON.stringify(this.users))
          this.user = { name: '', surname: '', email: '', phone: '', id: 0 }
        } else {
          localStorage.setItem('users', JSON.stringify(this.users))
        }
      }
    }
  },
  mounted () {
    let user = null
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

.button,
.button:focus {
  background-color: lightsalmon;
}

.button-container {
  margin: 10px 10% 20px;
  display: flex;
  justify-content: space-around;
}

.title {
  font-size: 30px;
  margin: 20px auto;
  width: fit-content;
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
  padding-bottom: 10px;;
  width: 350px;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
}

</style>
