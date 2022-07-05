<template>
  <div class="container">
    <div class="header">
      <h2>{{ portifolio.name }}</h2>
      <h3>(Preco: R${{ portifolio.price.toFixed(2) }})</h3>
    </div>
    <div class="content">
      <p>Quantidade</p>
      <label :for="'quantity input - ' + portifolio.name">
        <input
          :id="'quantity input - ' + portifolio.name"
          type="number"
          v-model="quantity"
        />
      </label>
      <button
        @click="vender"
        :disabled="isDisabled"
      >
        Vender
      </button>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'portifolioComponent',
  props: {
    portifolio: Object,
  },
  data() {
    return {
      quantity: 0,
      isDisabled: true,
    };
  },
  watch: {
    quantity(newQuantity) {
      if (newQuantity > 0 && newQuantity <= this.portifolio.quantity) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
  methods: {
    vender() {
      const saldo = store.getters.balance;
      const totalPrice = this.portifolio.price * this.quantity;

      if (this.quantity === this.portifolio.quantity) {
        const newPortifolio = [...store.getters.portifolio]
          .filter((portifolio) => portifolio.name !== this.portifolio.name);

        store.commit('setPortifolio', newPortifolio);
      } else {
        const hold = [...store.getters.portifolio];
        const portifolioIndex = hold
          .findIndex((portifolio) => portifolio.name === this.portifolio.name);

        hold[portifolioIndex].quantity -= this.quantity;

        store.commit('setPortifolio', hold);
      }

      store.commit('setBalance', saldo + totalPrice);
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid rgba(0, 0, 0, 0.062);
  border-radius: 3px;
  width: 450px;
  height: 150px;
  margin: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.178);
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: #3e517a;
  padding: 15px;
  color: white;
}

.header h2 {
  margin-right: 10px;
}

.content {
  padding: 15px;
}

.content p {
  font-size: .8em;
}

.content input {
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.479);
  padding: 5px;
  margin-right: 5px;
}

button {
  background-color: #487A3E;
  border: none;
  padding: 8px;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #5d8a55;
  color: rgb(167, 167, 167);
  cursor: auto;
}
</style>
