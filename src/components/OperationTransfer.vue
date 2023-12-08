<template>
     <div class="operation operation--transfer">
        <h2>Transfer money</h2>
        <form class="form form--transfer" @submit.prevent >
          <input type="text" class="form__input form__input--to" v-model="form.userAccount" />
          <input type="number" class="form__input form__input--amount" v-model="form.amount" />
          <button class="form__btn form__btn--transfer" @click="addAmount">&rarr;</button>
          <label class="form__label">Transfer to</label>
          <label class="form__label">Amount</label>
        </form>
      </div>
</template>

<script setup>
import {reactive} from 'vue'
import { useTransationStore } from '@/store/transations';

const store = useTransationStore()

const form = reactive({
  userAccount: '',
  amount: ''
})


const addAmount = () => {
  store.add(form)
}

</script>

<style  scoped>

</style>