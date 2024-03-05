import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UseBangun } from '../../context/DataContext';
import { useState } from 'react';

const InputKeliling = ({ valueDropdown, name }) => {
  const { state } = UseBangun();
  const { keliling } = state.active.countInput;
  const [result, setResult] = useState(0);
  const [isKeliling, setIsKeliling] = useState(keliling);

  const countResult = (text, key) => {
    setIsKeliling({ ...isKeliling, [key]: text });
  };

  const seeResult = () => {
    let count;
    switch (name.toLowerCase()) {
      case 'persegi':
        count = isKeliling.Sisi * 4;
        setResult(count);
        break;
      case 'persegi panjang':
        count = (isKeliling.Panjang + isKeliling.Lebar) * 2;
        setResult(count);
        break;
      case 'segitiga':
        count = isKeliling['Sisi Pertama'] + isKeliling['Sisi Kedua'] + isKeliling['Sisi Ketiga'];
        setResult(count);
        break;
      case 'lingkaran':
        count = 2 * isKeliling['Jari Jari'] * 3.14;
        setResult(count);
        break;
      case 'trapesium':
        count = isKeliling['Sisi Pertama'] + isKeliling['Sisi Kedua'] + isKeliling['Sisi Ketiga'] + isKeliling['Sisi Keempat'];
        setResult(count);
        break;
      case 'jajar genjang':
        count = 2 * (isKeliling['Sisi Pertama'] + isKeliling['Sisi Kedua']);
        setResult(count);
        break;
      case 'layang layang':
        count = (isKeliling['Sisi Atas'] + isKeliling['Sisi Bawah']) * 2;
        setResult(count);
        break;
      case 'belah ketupat':
        count = isKeliling.Sisi * 4;
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
        ? Object.entries(keliling).map(([key], index) => (
            <TextInput
              key={index}
              // className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              value={keliling.key}
              keyboardType="number-pad"
              placeholder={`Masukkan ${key}`}
              onChangeText={(text) => countResult(Number(text), key)}
              className="border-b my-2 py-1 border-b-[#392467] text-base px-2"
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

export default InputKeliling;
