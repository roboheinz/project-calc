import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UseBangun } from '../../context/DataContext';
import { useState } from 'react';

const InputVolume = ({ valueDropdown, name }) => {
  const { state } = UseBangun();
  const { volume } = state.active.countInput;
  const [result, setResult] = useState(0);
  const [isVolume, setIsVolume] = useState(volume);

  const countResult = (text, key) => {
    setIsVolume({ ...isVolume, [key]: text });
  };

  const seeResult = () => {
    let count;
    switch (name.toLowerCase()) {
      case 'kubus':
        count = isVolume.Rusuk ** 3;
        setResult(count);
        break;
      case 'balok':
        count = isVolume.Panjang * isVolume.Lebar * isVolume.Tinggi;
        setResult(count);
        break;
      case 'prisma segitiga':
        count = isVolume['Luas Alas'] * isVolume.Tinggi;
        setResult(count);
        break;
      case 'kerucut':
        count = (3.14 * isVolume['Jari Jari'] ** 2 * isVolume.Tinggi) / 3;
        setResult(count);
        break;
      case 'limas segiempat':
        count = (isVolume['Luas Alas'] * isVolume.Tinggi) / 3;
        setResult(count);
        break;
      case 'bola':
        count = (4 / 3) * 3.14 * isVolume['Jari Jari'] ** 3;
        setResult(count);
        break;
      case 'tabung':
        count = 3.14 * isVolume['Jari Jari'] ** 2 * isVolume.Tinggi;
        setResult(count);
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <View className="min-w-full">
      {valueDropdown == 1
        ? Object.entries(volume).map(([key], index) => (
            <TextInput key={index} value={volume.key} keyboardType="number-pad" placeholder={`Masukkan ${key}`} className="border-b my-2 py-1 border-b-[#392467] text-base px-2" onChangeText={(text) => countResult(Number(text), key)} />
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

export default InputVolume;
