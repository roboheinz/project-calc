import { createContext, useContext } from 'react';

const BangunContext = createContext();

const data = {
  datar: [
    {
      id: 1,
      source: require(`../assets/icon.png`),
      name: 'Persegi',
      rumus: ['Luas', 'Keliling'],
    },
    {
      id: 2,
      source: require(`../assets/icon.png`),
      name: 'AKOWDA',
    },
    {
      id: 3,
      source: require(`../assets/icon.png`),
      name: 'ACKNASC',
    },
  ],

  ruang: [
    {
      id: 1,
      source: require(`../assets/icon.png`),
      name: 'afsasdas',
    },
    {
      id: 2,
      source: require(`../assets/icon.png`),
      name: 'afsasdas',
    },
    {
      id: 3,
      source: require(`../assets/icon.png`),
      name: 'afsasdas',
    },
  ],
};

export const initialState = {
  ...data,
};

export const UseBangun = () => {
  return useContext(BangunContext);
};

export const bangunReducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVE_TOUCH':
      const datas = state[action.payload.jenis][action.payload.id - 1];
      return { ...state, active: datas };
    case 'REMOVE_TOUCH':
      delete state.active;
      return { ...state };
    default:
      return state;
  }
};

export default BangunContext;
