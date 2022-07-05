<template>
  <Menu />
  <div class="page">
    <div class="portifolio-container">
      <Portifolio
        v-for="portifolio in getPortifolio"
        :key="'acao - ' + portifolio.name"
        :portifolio="portifolio"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store';
import Menu from '@/components/Menu.vue';
import Portifolio from '@/components/Portifolio.vue';

export default {
  name: 'PortifolioView',
  components: {
    Menu,
    Portifolio,
  },
  computed: {
    getPortifolio() {
      return store.getters.portifolio;
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

.portifolio-container {
  margin-top: 5vh;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
</style>
