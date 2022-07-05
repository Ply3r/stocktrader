export const getItem = (key) => {
  const result = localStorage.getItem(key);

  return JSON.parse(result);
};

export const saveItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getState = () => {
  const balance = getItem('balance');
  const portifolio = getItem('portifolio');
  const acoes = getItem('acoes');

  if (!balance || !portifolio || !acoes) {
    return null;
  }

  return { balance, portifolio, acoes };
};

export const saveState = (state) => {
  saveItem('balance', state.balance);
  saveItem('portifolio', state.portifolio);
  saveItem('acoes', state.acoes);
};
