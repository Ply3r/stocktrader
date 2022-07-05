<template>
  <div class="menu">
    <div>
      <div class="title-logo">
        <h1>STOCK<span>TRADER</span></h1>
      </div>
      <MenuNav
        @click="() => goToPage(route.path)"
        class="bot"
        v-for="route in getRoutes"
        :key="'nav ' + route.name"
        :route="route"
      />
    </div>
    <div>
      <button
        class="bot"
        @click="finalizarDia"
      >
        Finalizar o dia
      </button>
      <SalvarCarregar
        class="bot"
      />
      <div>
        Saldo: R${{ getBalance.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import router, { routes } from '@/router';
import MenuNav from './MenuNav.vue';
import SalvarCarregar from './Salvar&Carregar.vue';

export default {
  name: 'MenuComponent',
  components: {
    MenuNav,
    SalvarCarregar,
  },
  computed: {
    getRoutes() {
      return routes;
    },
    getBalance() {
      return store.getters.balance;
    },
  },
  methods: {
    goToPage(path) {
      router.push(path);
    },
    finalizarDia() {
      store.dispatch('randomizeAcoes');
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 8vh;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.274);
}

.title-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-logo span {
  font-weight: 400;
}

.menu > div {
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;
}

.menu > div > div {
  padding: 25px;
  display: grid;
  place-items: center;
}

.bot {
  width: 150px;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: .2s ease;
  font-size: .9em;
  font-weight: 600;
}

.menu > div > button:hover {
  background-color: rgba(0, 0, 0, 0.219);
}

.active {
  background-color: rgba(0, 0, 0, 0.219);
}
</style>
