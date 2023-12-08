<template>
    <div class="summary">
        <p class="summary__label">In</p>
        <p class="summary__value summary__value--in">{{ store.income }} €</p>
        <p class="summary__label">Out</p>
        <p class="summary__value summary__value--out">{{ store.expense }} €</p>
        <p class="summary__label">Interest</p>
        <p class="summary__value summary__value--interest">0000 €</p>
        <button class="btn--sort">&downarrow; SORT</button>
    </div>

</template>

<script setup>
import { useTransationStore } from '@/store/transations';

const store = useTransationStore()


</script>

<style  scoped>
    .summary {
  grid-row: 5 / 6;
  display: flex;
  align-items: baseline;
  padding: 0 0.3rem;
  margin-top: .1rem;
}

.summary__label {
  font-size: .7rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 0.8rem;
}

.summary__value {
  font-size: 1rem;
  margin-right: 2rem;
}

.summary__value--in,
.summary__value--interest {
  color: #66c873;
}

.summary__value--out {
  color: #f5465d;
}

.btn--sort {
  margin-left: auto;
  border: none;
  background: none;
  font-size: .8rem;
  font-weight: 500;
  cursor: pointer;
}
</style>