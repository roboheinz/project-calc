import { createContext, useContext } from 'react';

const BangunContext = createContext();

const data = {
  datar: [
    {
      id: 1,
      source: require(`../assets/persegi-polosan.png`),
      sourceSecondary: require(`../assets/persegi-keliling.png`),
      sourceThird: require(`../assets/persegi-luas.png`),
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
      source: require(`../assets/persegiPanjang-polosan.png`),
      sourceSecondary: require(`../assets/persegiPanjang-keliling.png`),
      sourceThird: require(`../assets/persegiPanjang-luas.png`),
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
      source: require(`../assets/segitiga-polosan.png`),
      sourceSecondary: require(`../assets/segitiga-keliling.png`),
      sourceThird: require(`../assets/segitiga-luas.png`),
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
      source: require(`../assets/lingkaran-polosan.png`),
      sourceSecondary: require(`../assets/lingkaran-keliling.png`),
      sourceThird: require(`../assets/lingkaran-luas.png`),
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
      source: require(`../assets/trapesium-polosan.png`),
      sourceSecondary: require(`../assets/trapesium-keliling.png`),
      sourceThird: require(`../assets/trapesium-luas.png`),
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
      source: require(`../assets/jajarGenjang-polosan.png`),
      sourceSecondary: require(`../assets/jajarGenjang-keliling.png`),
      sourceThird: require(`../assets/jajarGenjang-luas.png`),
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
      source: require(`../assets/layangLayang-polosan.png`),
      sourceSecondary: require(`../assets/layangLayang-keliling.png`),
      sourceThird: require(`../assets/layangLayang-luas.png`),
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
      source: require(`../assets/belahKetupat-polosan.png`),
      sourceSecondary: require(`../assets/belahKetupat-keliling.png`),
      sourceThird: require(`../assets/belahKetupat-luas.png`),
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
      name: 'Kubus',
      countInput: {
        volume: {
          Rusuk: 0,
        },
        luasPermukaan: {
          Rusuk: 0,
        },
      },
    },
    {
      id: 2,
      source: require(`../assets/icon.png`),
      name: 'Balok',
      countInput: {
        volume: {
          Panjang: 0,
          Lebar: 0,
          Tinggi: 0,
        },
        luasPermukaan: {
          Panjang: 0,
          Lebar: 0,
          Tinggi: 0,
        },
      },
    },
    {
      id: 3,
      source: require(`../assets/icon.png`),
      name: 'Prisma Segitiga',
      countInput: {
        volume: {
          'Luas Alas': 0,
          Tinggi: 0,
        },
        luasPermukaan: {
          'Luas Alas': 0,
          'Keliling Alas': 0,
          Tinggi: 0,
        },
      },
    },
    {
      id: 4,
      source: require(`../assets/icon.png`),
      name: 'Kerucut',
      countInput: {
        volume: {
          Rusuk: 0,
          Tinggi: 0,
        },
        luasPermukaan: {
          Rusuk: 0,
          'Garis Pelukis': 0,
        },
      },
    },
    {
      id: 5,
      source: require(`../assets/icon.png`),
      name: 'Limas Segitiga',
      countInput: {
        volume: {
          'Luas Alas': 0,
          Tinggi: 0,
        },
        luasPermukaan: {
          'Luas Alas': 0,
          'Total Luas Sisi Miring': 0,
        },
      },
    },
    {
      id: 6,
      source: require(`../assets/icon.png`),
      name: 'Bola',
      countInput: {
        volume: {
          Rusuk: 0,
        },
        luasPermukaan: {
          Rusuk: 0,
        },
      },
    },
    {
      id: 7,
      source: require(`../assets/icon.png`),
      name: 'Tabung',
      countInput: {
        volume: {
          Rusuk: 0,
          Tinggi: 0,
        },
        luasPermukaan: {
          Rusuk: 0,
          Tinggi: 0,
        },
      },
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
      return { ...state, active: { ...datas, category: action.payload.jenis } };
    case 'REMOVE_TOUCH':
      delete state.active;
      return { ...state };
    default:
      return state;
  }
};

export default BangunContext;
