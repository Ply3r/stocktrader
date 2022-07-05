import { createStore } from 'vuex';
import { getState, saveState } from '@/utils/localStore';

const randomizePrices = (arr, price) => {
  const result = arr.map((value) => {
    const newAcao = value;
    newAcao.price += price;

    if (newAcao.price < 10) {
      newAcao.price = 10;
    }

    return newAcao;
  });
  return result;
};

export default createStore({
  state: {
    balance: 10000,
    acoes: [
      {
        name: 'BMW',
        price: 250,
      },
      {
        name: 'Google',
        price: 300,
      },
      {
        name: 'Itau',
        price: 50,
      },
      {
        name: 'Apple',
        price: 250,
      },
    ],
    portifolio: [],
  },
  getters: {
    balance(state) {
      return state.balance;
    },
    acoes(state) {
      return state.acoes;
    },
    portifolio(state) {
      return state.portifolio;
    },
  },
  mutations: {
    setBalance(state, balance) {
      state.balance = balance;
    },
    setAcoes(state, acoes) {
      state.acoes = acoes;
    },
    addAcao(state, acao) {
      state.acoes.push(acao);
    },
    setPortifolio(state, portifolio) {
      state.portifolio = portifolio;
    },
    addPortifolio(state, portifolio) {
      state.portifolio.push(portifolio);
    },
    randomizeAcoes(state) {
      const acoes = [...state.acoes];
      const portifolio = [...state.portifolio];

      const randomPrice = Math.floor(Math.random() * (25 - (-25) + 1)) + (-25);
      const newAcoes = randomizePrices(acoes, randomPrice);
      const newPortifolio = randomizePrices(portifolio, randomPrice);

      state.acoes = newAcoes;
      state.portifolio = newPortifolio;
    },
    saveState(state) {
      saveState(state);
    },
    loadState(state) {
      let data = getState();

      if (!data) {
        saveState(state);
        data = state;
      }

      state.balance = data.balance;
      state.portifolio = data.portifolio;
      state.acoes = data.acoes;
    },
  },
  actions: {
    setBalance(context, balance) {
      context.commit('setBalance', balance);
    },
    setAcoes(context, acoes) {
      context.commit('setAcoes', acoes);
    },
    addAcao(context, acao) {
      context.commit('addAcoes', acao);
    },
    setPortifolio(context, portifolio) {
      context.commit('setPortifolio', portifolio);
    },
    addPortifolio(context, portifolio) {
      context.commit('addPortifolio', portifolio);
    },
    randomizeAcoes(context) {
      context.commit('randomizeAcoes');
    },
    saveState(context) {
      context.commit('saveState');
    },
    loadState(context) {
      context.commit('loadState');
    },
  },
  modules: {
  },
});
