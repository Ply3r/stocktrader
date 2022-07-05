<template>
  <Menu />
  <div class="page">
    <div class="acoes-container">
      <Acao
        v-for="acao in getAcoes"
        :key="'acao - ' + acao.name"
        :acao="acao"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store';
import Menu from '@/components/Menu.vue';
import Acao from '@/components/Acao.vue';

export default {
  name: 'AcoesView',
  components: {
    Menu,
    Acao,
  },
  computed: {
    getAcoes() {
      return store.getters.acoes;
    },
  },
};
</script>

<style scoped>
.page {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.acoes-container {
  margin-top: 5vh;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
</style>
