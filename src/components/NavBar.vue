<template>
   <nav>
      <p class="welcome">{{ isNoLogged ? 'Log in to get started' : 'Welcome Back Yanquiel'}}  </p>
      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <div class="login" >
        <input
          type="text"
          placeholder="user"
          class="login__input login__input--user"
        />
        <!-- In practice, use type="password" -->
        <input
          type="password"
          placeholder="PIN"
          maxlength="4"
          class="login__input login__input--pin"
        />
        <button class="login__btn" @click="$emit('@custom-toggle')">&rarr;</button>
      </div>
    </nav>
</template>

<script setup>
defineProps({
  isNoLogged: {
    type: Boolean,
    required: true
  }
 })
 defineEmits(['@custom-toggle'])

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