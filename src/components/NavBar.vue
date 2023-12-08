<template>
   <nav>
      <p class="welcome" v-if="!store.isLogged">Log in to get started  </p>
      <p class="welcome" v-else>Welcome back, {{ name }} </p>

      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <div class="login" >
        <input
          type="text"
          placeholder="user"
          class="login__input login__input--user"
          v-model="form.username"
        />
       
        <input
          type="password"
          placeholder="PIN"
          maxlength="4"
          class="login__input login__input--pin"
          v-model="form.pin"
        />
        <button class="login__btn" @click="add" >&rarr;</button>
      </div>
    </nav>
</template>

<script setup>
import { reactive,ref} from 'vue'
import { useTransationStore } from '@/store/transations';

const store = useTransationStore()

const form = reactive({
  username: '',
  pin: ''
})

const add = () => {
  store.login(form)
  name.value = store.currentAccount.owner?.split(' ')[0]

}



let  name = ref()

</script>

<style  scoped>

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
    /* padding: 0 2rem; */
}

.welcome {
  font-size: 1.2rem;
  font-weight: 500;
}

.logo {
  height: 3rem;
}

.login {
  display: flex;
}

.login__input {
  border: none;
  width: 8rem;
  padding: .5rem .3rem;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
  border-radius: 10rem;
  margin-right: 1rem;
  color: inherit;
  border: 1px solid #fff;
  transition: all 0.3s;
}

.login__input:focus {
  outline: none;
  border: 1px solid #ccc;
}

input::placeholder {
  color: #ccc;
}

.login__btn {
  border: none;
  background: none;
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;
}

.login__btn:hover,
.login__btn:focus,
.btn--sort:hover,
.btn--sort:focus {
  outline: none;
  color: #777;
}

</style>