<template>
  <NavBar @@custom-toggle="toggle" :isNoLogged="isNoLogged" />

 <!-- <TransitionGroup > -->
  <main class="app"  :class="{opacity : isNoLogged}"  >   
      <Balance/>
      <Movements :transations="transations"/>
      <Summary/>
      <OperationTransfer/>
      <OperationLoan/>
      <OperationClose/>
      <Timer/>  
  </main>
 <!-- </TransitionGroup> -->



</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Balance from './components/Balance.vue'
import Movements from './components/Movements.vue';
import Summary from './components/Summary.vue';
import OperationTransfer from './components/OperationTransfer.vue';
import OperationLoan from './components/OperationLoan.vue';
import OperationClose from './components/OperationClose.vue';
import Timer from './components/Timer.vue';
import { ref } from 'vue';


const transations = ref([
{
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
},
//  {
//   owner: 'Jessica Davis',
//   mov: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// },
// {
//   owner: 'Steven Thomas Williams',
//   mov: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// },
// {
//   owner: 'Sarah Smith',
//   mov: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// },
// {
//   owner: 'Sarah Smith',
//   mov: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// },
])



const isNoLogged = ref(true)


const toggle = () => {
  isNoLogged.value = !isNoLogged.value
  // console.log(isNoLogged.value)
}


</script>

<style  scoped>
  .app {
  position: relative;
  max-width: 900px;
  margin: 4rem auto 2rem;
  display: grid;
  grid-template-columns: 4fr 3fr ;
  grid-template-rows: auto repeat(3, 10rem) auto;
  gap: 1rem;
         
}

/* .v-enter-active,
.v-leave-active {
  transition: opacity .3s ease-out;
}

.v-enter-from,
.v-leave-to {
  transition: opacity .3s ease-out;
  opacity: 1;
} */

.opacity {
  opacity: 0;
  transition: all 1s;
}
</style>