<template>
  <form class="import-form" @submit.prevent="onLoadClick">
    <label class="label-json">
      Type your JSON Object for Users<br>
      <p class="note">Note: Fields name, surname and phone are obligatory.</p>
      <textarea
        class="textarea-json"
        placeholder='[{"name":"","surname":"","email":"","phone":""}]'
        rows="10"
        cols="60"
        v-model.trim="inputText"
      >
      </textarea>
    </label>
    <p class="error">{{isSuccess}}<p/>
    <p class="error">{{error}}<p/>
    <button type="submit" class="button button-json">Load</button>
  </form>
</template>

<script>

export default {
  name: 'ImportForm',
  methods: {
    onLoadClick () {
      this.error = ''
      this.isSuccess = ''
      let users = null
      if (this.inputText.length) {
        try {
          users = JSON.parse(this.inputText)
        } catch (e) {
          this.error = 'Error parsing JSON'
        }
      }
      console.log(users)
      if (users) {
        if (typeof users === 'object') {
          if (!Array.isArray(users)) {
            users = [users]
          }
          const validUsers = []
          const errorUsers = []
          users.forEach(user => {
            const isValid = ('name' in user &&
              typeof user.name === 'string' &&
              user.name.length &&
              'surname' in user &&
              typeof user.surname === 'string' &&
              user.surname.length &&
              'phone' in user &&
              typeof user.phone === 'string' &&
              user.phone.length
            )
            if (isValid) {
              validUsers.push(user)
            } else {
              errorUsers.push(user)
            }
          })
          console.log(validUsers)
          console.log(errorUsers)
          if (validUsers.length) {
            const usersFromStorage = JSON.parse(localStorage.getItem('users'))
            let nextId = +localStorage.getItem('nextId')
            validUsers.forEach(user => {
              const newUser = {
                id: nextId++,
                name: user.name,
                surname: user.surname,
                phone: user.phone,
                email: user.email || ''
              }
              console.log('newUser', newUser)
              usersFromStorage.push(newUser)
            })
            console.log(usersFromStorage)
            localStorage.setItem('users', JSON.stringify(usersFromStorage))
            localStorage.setItem('nextId', nextId)
          }

          if (errorUsers.length) {
            this.inputText = JSON.stringify(errorUsers)
          }

          if (validUsers.length && errorUsers.length) {
            this.isSuccess = `Valid users was loaded.
              Some data was incorrect.
              Check the remaining data.`
          }

          if (validUsers.length && !errorUsers.length) {
            this.isSuccess = 'All Users was loaded'
            this.inputText = ''
          }

          if (!validUsers.length && errorUsers.length) {
            this.isSuccess = 'All Users was incorrect'
          }
        } else {
          this.isSuccess = 'Data can be Object or Array of Objects'
        }
      }
    }
  },
  data: () => ({
    inputText: '',
    error: '',
    isSuccess: ''
  })
}
</script>

<style>
.error {
  color: red;
}

.note {
  font-size: 12px;
}

.import-form {
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  margin: 20px auto;
  width: fit-content;
}

.label-json {
  margin: 0;
  width: fit-content;
}

.textarea-json {
  margin-top: 10px;
  display: block;
  resize: vertical;
}

.button-json {
  margin: 10px auto;
  display: block;
}

</style>
