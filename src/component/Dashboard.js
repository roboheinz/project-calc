import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, Image, FlatList, ScrollView } from 'react-native';
import PopupModal from './PopupModal';

const Dashboard = () => {
  const [openDatar, setOpenDatar] = React.useState(false);
  const [openRuang, setOpenRuang] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('');

  const bangunData = [
    {
      datar: [
        {
          id: 1,
          source: require(`../../assets/icon.png`),
          name: 'Persegi',
        },
        {
          id: 2,
          source: require(`../../assets/icon.png`),
          name: 'AKOWDA',
        },
        {
          id: 3,
          source: require(`../../assets/icon.png`),
          name: 'ACKNASC',
        },
        {
          id: 4,
          source: require(`../../assets/icon.png`),
          name: 'askncasjo',
        },
        {
          id: 5,
          source: require(`../../assets/icon.png`),
          name: 'askncasjo',
        },
        {
          id: 6,
          source: require(`../../assets/icon.png`),
          name: 'askncasjo',
        },
        {
          id: 7,
          source: require(`../../assets/icon.png`),
          name: 'askncasjo',
        },
      ],

      ruang: [
        {
          id: 1,
          source: require(`../../assets/icon.png`),
          name: 'afsasdas',
        },
        {
          id: 2,
          source: require(`../../assets/icon.png`),
          name: 'afsasdas',
        },
        {
          id: 3,
          source: require(`../../assets/icon.png`),
          name: 'afsasdas',
        },
      ],
    },
  ];

  const touchablePress = (modal, items) => {
    setModalVisible(modal);
    setActiveItem(items);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="min-w-full mt-10" contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Text>Logo</Text>

        <TouchableOpacity onPress={() => setOpenDatar(!openDatar)} className="mt-14">
          <Text>Bangun Datar</Text>
        </TouchableOpacity>

        <FlatList
          data={bangunData[0].datar}
          renderItem={({ item }) => (
            <TouchableOpacity className={openDatar ? 'block bg-lime-300 p-4 mb-4' : 'hidden'} onPress={() => touchablePress(true, item)}>
              {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
              <Image alt={item.name} className="block h-5 max-w-full" />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          className={openDatar ? 'block min-w-full bg-red-700 max-h-60 flex-grow' : 'hidden'}
        />

        <PopupModal modalVisible={modalVisible} setModalVisible={setModalVisible} touchablePress={touchablePress} activeItem={activeItem} />

        <TouchableOpacity onPress={() => setOpenRuang(!openRuang)} className="mt-14">
          <Text>Bangun Ruang</Text>
        </TouchableOpacity>

        <FlatList
          data={bangunData[0].ruang}
          renderItem={({ item }) => (
            <TouchableOpacity className={openRuang ? 'block bg-lime-300 p-4 mb-4' : 'hidden'} onPress={() => touchablePress(true, item)}>
              {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
              <Image alt={item.name} className="block h-5 max-w-full" />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          className={openRuang ? 'block min-w-full bg-red-700 max-h-60 flex-grow' : 'hidden'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
