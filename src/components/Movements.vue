<template>
    <div class="movements" >
        <div class="movements__row" v-for="(mov, i) in store.currentAccount.move"  >
          
          <li   class="movements__type"
               :class="mov > 0 ? 'movements__type--deposit' : 'movements__type--withdrawal'"   >{{ i + 1 }} {{ mov > 0 ? "deposit" : "whithdrawal" }} 
          </li>
          <div class="movements__date"></div>
          <div class="movements__value"> {{mov}} €</div> 

          
        </div>
      
    </div>


</template>

<script setup>
import { useTransationStore } from '@/store/transations';

const store = useTransationStore()

console.log(store.currentAccount)

</script>

<style  scoped>
.movements {
  grid-row: 2 / span 3;
  background-color: #fff;
  border-radius: 1rem;
  overflow: scroll;
}

.movements__row {
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.movements__type {
  font-size: .6rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  padding: 0.3rem .5rem;
  border-radius: 10rem;
  margin-right: 2rem;
}

.movements__date {
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #666;
}

.movements__type--deposit {
  background-image: linear-gradient(to top left, #39b385, #9be15d);
}

.movements__type--withdrawal {
  background-image: linear-gradient(to top left, #e52a5a, #ff585f);
}

.movements__value {
  font-size: 1rem;
  margin-left: auto;
}


</style>