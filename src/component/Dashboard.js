import React from 'react';
import { TouchableOpacity, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import PopupModal from './PopupModal';
import { UseBangun } from '../../context/DataContext';

const Dashboard = () => {
  const [openDatar, setOpenDatar] = React.useState(false);
  const [openRuang, setOpenRuang] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const { state, dispatch } = UseBangun();

  const touchablePress = (modal, item, jenis) => {
    setModalVisible(modal);
    if (modal) {
      dispatch({ type: 'ACTIVE_TOUCH', payload: { ...item, jenis } });
    } else {
      dispatch({ type: 'REMOVE_TOUCH' });
    }
  };

  return (
    <ScrollView className="min-w-full flex-1 py-12" horizontal={false} nestedScrollEnabled={true} alwaysBounceVertical={false} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text className="bg-red-500 p-4 my-4">Logo</Text>

      <TouchableOpacity onPress={() => setOpenDatar(!openDatar)} className="mt-14 mb-4 bg-green-400 py-4 px-6 rounded-md">
        <Text className="font-medium">Bangun Datar</Text>
      </TouchableOpacity>

      <FlatList
        data={state.datar}
        renderItem={({ item }) => (
          <TouchableOpacity className={openDatar ? 'block bg-lime-300 p-4 mb-4' : 'hidden'} onPress={() => touchablePress(true, item, 'datar')}>
            {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
            {/* <Image alt={items.name} className="block h-5 max-w-full" /> */}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        className={openDatar ? 'block min-w-full' : 'hidden'}
      />

      <TouchableOpacity onPress={() => setOpenRuang(!openRuang)} className="mt-14 mb-4 bg-green-400 py-4 px-6 rounded-md">
        <Text>Bangun Ruang</Text>
      </TouchableOpacity>

      <FlatList
        data={state.ruang}
        renderItem={({ item }) => (
          <TouchableOpacity className={openRuang ? 'block bg-lime-300 p-4 mb-4' : 'hidden'} onPress={() => touchablePress(true, item, 'ruang')}>
            {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
            {/* <Image alt={items.name} className="block h-5 max-w-full" /> */}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        className={openRuang ? 'block min-w-full mb-40' : 'hidden'}
      />

      <PopupModal modalVisible={modalVisible} setModalVisible={setModalVisible} touchablePress={touchablePress} />
    </ScrollView>
  );
};

export default Dashboard;
