<template>
    <div class="balance">
        <div>
          <p class="balance__label">Current balance</p>
          <p class="balance__date">
            As of <span class="date">05/03/2037</span>
          </p>
        </div>
        <p class="balance__value">0000 PLN</p>
      </div>
</template>

<script setup>

</script>

<style  scoped>
    .balance {
  grid-column: 1 / span 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.balance__label {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.balance__date {
  font-size: 1rem;
  color: #888;
}

.balance__value {
  font-size: 2.6rem;
  font-weight: 400;
}
</style>