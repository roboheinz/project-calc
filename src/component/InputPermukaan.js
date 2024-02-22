import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UseBangun } from '../../context/DataContext';
import { useState } from 'react';

const InputPermukaan = ({ valueDropdown, name }) => {
  const { state } = UseBangun();
  const { luasPermukaan } = state.active.countInput;
  const [result, setResult] = useState(0);
  const [isLuasPermukaan, setIsLuasPermukaan] = useState(luasPermukaan);

  const countResult = (text, key) => {
    setIsLuasPermukaan({ ...isLuasPermukaan, [key]: text });
  };

  const seeResult = () => {
    let count;
    switch (name.toLowerCase()) {
      case 'kubus':
        count = 6 * isLuasPermukaan.Rusuk ** 2;
        setResult(count);
        break;
      case 'balok':
        count = 2 * (isLuasPermukaan.Panjang * isLuasPermukaan.Lebar + isLuasPermukaan.Panjang * isLuasPermukaan.Tinggi + isLuasPermukaan.Lebar * isLuasPermukaan.Tinggi);
        setResult(count);
        break;
      case 'prisma segitiga':
        count = 2 * isLuasPermukaan['Luas Alas'] + isLuasPermukaan['Keliling Alas'] * isLuasPermukaan.Tinggi;
        setResult(count);
        break;
      case 'kerucut':
        count = 3.14 * isLuasPermukaan.Rusuk * (isLuasPermukaan.Rusuk + isLuasPermukaan['Garis Pelukis']);
        setResult(count);
        break;
      case 'limas segitiga':
        count = isLuasPermukaan['Luas Alas'] + isLuasPermukaan['Total Luas Sisi Miring'];
        setResult(count);
        break;
      case 'bola':
        count = 4 * 3.14 * isLuasPermukaan.Rusuk ** 2;
        setResult(count);
        break;
      case 'tabung':
        count = 2 * 3.14 * isLuasPermukaan.Rusuk * (isLuasPermukaan.Tinggi + isLuasPermukaan.Rusuk);
        setResult(count);
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <View className="min-w-full">
      {valueDropdown == 2
        ? Object.entries(luasPermukaan).map(([key], index) => <TextInput key={index} value={luasPermukaan.key} keyboardType="number-pad" placeholder={`Masukkan ${key}`} onChangeText={(text) => countResult(Number(text), key)} />)
        : ''}

      <TouchableOpacity onPress={seeResult} title="Lihat Hasil" className="px-6 py-4 w-[200px] bg-[#392467]">
        <Text className='text-white'>Lihat Hasil</Text>
      </TouchableOpacity>

      <Text>Result : <Text className="font-bold">{result}</Text></Text>
    </View>
  );
};

export default InputPermukaan;
