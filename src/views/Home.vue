<template>
  <Menu />
  <div class="page">
    <div class="container">
      <h1>Negocie e Consulte suas Ações</h1>
      <div>
        <InfoDiv
          title="Você pode Salvar e Carregar os dados!"
          color="#6CBEED"
        />
        <InfoDiv
          title="Clique em 'Finalizar dia' para começar um novo dia!"
          color="#4EB63E"
        />
      </div>
      <h1>Saldo: R${{ getBalance.toFixed(2) }}</h1>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import InfoDiv from '@/components/InfoDiv.vue';
import store from '@/store';

export default {
  name: 'HomeView',
  components: {
    Menu,
    InfoDiv,
  },
  computed: {
    getBalance() {
      return store.getters.balance;
    },
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

.container {
  width: 70%;
  margin-top: 5vh;
}
</style>
