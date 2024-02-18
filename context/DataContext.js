import { createContext, useContext } from 'react';

const BangunContext = createContext();

const data = {
  datar: [
    {
      id: 1,
      source: require(`../assets/icon.png`),
      name: 'Persegi',
      countInput: {
        luas: {
          Sisi: 0,
        },
        keliling: {
          Sisi: 0,
        },
      },
    },
    {
      id: 2,
      source: require(`../assets/icon.png`),
      name: 'Persegi Panjang',
      countInput: {
        luas: {
          Panjang: 0,
          Lebar: 0,
        },
        keliling: {
          Panjang: 0,
          Lebar: 0,
        },
      },
    },
    {
      id: 3,
      source: require(`../assets/icon.png`),
      name: 'Segitiga',
      countInput: {
        luas: {
          'Sisi Pertama': 0,
          Tinggi: 0,
        },
        keliling: {
          'Sisi Pertama': 0,
          'Sisi Kedua': 0,
          'Sisi Ketiga': 0,
        },
      },
    },
    {
      id: 4,
      source: require(`../assets/icon.png`),
      name: 'Lingkaran',
      countInput: {
        luas: {
          Rusuk: 0,
        },
        keliling: {
          Rusuk: 0,
        },
      },
    },
    {
      id: 5,
      source: require(`../assets/icon.png`),
      name: 'Trapesium',
      countInput: {
        luas: {
          'Sisi Pertama': 0,
          'Sisi Kedua': 0,
          Tinggi: 0,
        },
        keliling: {
          'Sisi Pertama': 0,
          'Sisi Kedua': 0,
          'Sisi Ketiga': 0,
          'Sisi Keempat': 0,
        },
      },
    },
    {
      id: 6,
      source: require(`../assets/icon.png`),
      name: 'Jajar Genjang',
      countInput: {
        luas: {
          'Sisi Pertama': 0,
          Tinggi: 0,
        },
        keliling: {
          'Sisi Pertama': 0,
          'Sisi Kedua': 0,
        },
      },
    },
    {
      id: 7,
      source: require(`../assets/icon.png`),
      name: 'Layang Layang',
      countInput: {
        luas: {
          'Diagonal Pertama': 0,
          'Diagonal Kedua': 0,
        },
        keliling: {
          'Sisi Atas': 0,
          'Sisi Bawah': 0,
        },
      },
    },
    {
      id: 8,
      source: require(`../assets/icon.png`),
      name: 'Belah Ketupat',
      countInput: {
        luas: {
          'Diagonal Pertama': 0,
          'Diagonal Kedua': 0,
        },
        keliling: {
          Sisi: 0,
        },
      },
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
      return { ...state, active: { ...datas } };
    case 'REMOVE_TOUCH':
      delete state.active;
      return { ...state };
    default:
      return state;
  }
};

export default BangunContext;
