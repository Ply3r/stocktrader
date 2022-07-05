<template>
  <button @click="active = !active">
    {{ 'Salvar & Carregar' }}
    <div
      v-if="active"
      class="bots-container"
    >
      <button
        @click="salvar"
      >
        Salvar
      </button>
      <button
        @click="carregar"
      >
        Carregar
      </button>
    </div>
  </button>
</template>

<script>
import store from '@/store';

export default {
  name: 'SalvarCarregar',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    salvar() {
      store.dispatch('saveState');
    },
    carregar() {
      store.dispatch('loadState');
    },
  },
};
</script>

<style scoped>
.bots-container {
  position: absolute;
  top: 8%;
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 150px;
}

.bots-container > button {
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.219);
  border-collapse: collapse;
  cursor: pointer;
  transition: .2s ease;
  font-size: .9em;
  font-weight: 600;
}

.bots-container > button:hover {
  background-color: rgb(212, 212, 212);
}
</style>
