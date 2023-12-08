<template>
  <NavBar  />

 
  <main class="app" :class="{ show: store.isLogged }"   >   
      <Balance />
      <Movements />
      <Summary/>
      <OperationTransfer/>
      <OperationLoan/>
      <OperationClose/>
      <Timer/>  
  </main>




</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Balance from './components/Balance.vue';
import Movements from './components/Movements.vue';
import Summary from './components/Summary.vue';
import OperationTransfer from './components/OperationTransfer.vue';
import OperationLoan from './components/OperationLoan.vue';
import OperationClose from './components/OperationClose.vue';
import Timer from './components/Timer.vue';

import { useTransationStore } from '@/store/transations';

const store = useTransationStore()




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
  opacity: 0;
  transition: all 2s;
         
}


.show {
  opacity: 100;
  transition: all 1s;
}
</style>