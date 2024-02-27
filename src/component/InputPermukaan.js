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
        ? Object.entries(luasPermukaan).map(([key], index) => (
            <TextInput
              key={index}
              value={luasPermukaan.key}
              keyboardType="number-pad"
              placeholder={`Masukkan ${key}`}
              className="border-b my-2 py-1 border-b-[#392467] text-base px-2"
              onChangeText={(text) => countResult(Number(text), key)}
            />
          ))
        : ''}

      <TouchableOpacity onPress={seeResult} title="Lihat Hasil" activeOpacity={0.8} className="w-[200px] my-4 rounded-lg py-2.5 bg-[#392467]">
        <Text className="text-white text-center">Lihat Hasil</Text>
      </TouchableOpacity>

      <Text className="text-base p-2 mb-2">
        Result : <Text className="font-bold">{result}</Text>
      </Text>
    </View>
  );
};

export default InputPermukaan;
