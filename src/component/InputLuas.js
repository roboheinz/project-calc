import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UseBangun } from '../../context/DataContext';
import { useState } from 'react';

const InputLuas = ({ valueDropdown, name }) => {
  const { state } = UseBangun();
  const { luas } = state.active.countInput;
  const [result, setResult] = useState(0);
  const [isLuas, setIsLuas] = useState(luas);

  const countResult = (text, key) => {
    setIsLuas({ ...isLuas, [key]: text });
  };

  const seeResult = () => {
    let count;
    switch (name.toLowerCase()) {
      case 'persegi':
        count = isLuas.Sisi ** 2;
        setResult(count);
        break;
      case 'persegi panjang':
        count = isLuas.Panjang * isLuas.Lebar;
        setResult(count);
        break;
      case 'segitiga':
        count = (isLuas['Sisi Pertama'] * isLuas.Tinggi) / 2;
        setResult(count);
        break;
      case 'lingkaran':
        count = 3.14 * isLuas.Rusuk ** 2;
        setResult(count);
        break;
      case 'trapesium':
        count = ((isLuas['Sisi Pertama'] + isLuas['Sisi Kedua']) * isLuas.Tinggi) / 2;
        setResult(count);
        break;
      case 'jajar genjang':
        count = isLuas['Sisi Pertama'] * isLuas.Tinggi;
        setResult(count);
        break;
      case 'layang layang':
        count = isLuas['Diagonal Pertama'] * isLuas['Diagonal Kedua'];
        setResult(count);
        break;
      case 'belah ketupat':
        count = (isLuas['Diagonal Pertama'] * isLuas['Diagonal Kedua']) / 2;
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
        ? Object.entries(luas).map(([key], index) => (
            <TextInput key={index} value={luas.key} keyboardType="number-pad" placeholder={`Masukkan ${key}`} className="border-b my-2 py-1 border-b-[#392467] text-base px-2" onChangeText={(text) => countResult(Number(text), key)} />
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

export default InputLuas;
