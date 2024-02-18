import React from 'react';
import { TouchableOpacity, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import PopupModal from './PopupModal';
import { UseBangun } from '../../context/DataContext';

const Dashboard = () => {
  const [openDatar, setOpenDatar] = React.useState(false);
  const [openRuang, setOpenRuang] = React.useState(false);
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
      <Text className="bg-red-500 p-4 my-4 text-center">Logo</Text>

      <TouchableOpacity onPress={() => setOpenDatar(!openDatar)} className="mt-14 mb-4 bg-green-400 py-4 px-6 rounded-md">
        <Text className="font-medium text-center">Bangun Datar</Text>
      </TouchableOpacity>

      {openDatar ? (
        <FlatList
          data={state.datar}
          renderItem={({ item }) => (
            <TouchableOpacity className={'block bg-lime-300 p-4 mb-4'} onPress={() => touchablePress(true, item, 'datar')}>
              {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
              {/* <Image alt={items.name} className="block h-5 max-w-full" /> */}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          className={'block min-w-full'}
        />
      ) : (
        ''
      )}

      <TouchableOpacity onPress={() => setOpenRuang(!openRuang)} className="mt-14 mb-4 bg-green-400 py-4 px-6 rounded-md">
        <Text className="font-medium text-center">Bangun Ruang</Text>
      </TouchableOpacity>

      {openRuang ? (
        <FlatList
          data={state.ruang}
          renderItem={({ item }) => (
            <TouchableOpacity className={'block bg-lime-300 p-4 mb-4'} onPress={() => touchablePress(true, item, 'ruang')}>
              {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
              {/* <Image alt={items.name} className="block h-5 max-w-full" /> */}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          className={'block min-w-full mb-40'}
        />
      ) : (
        ''
      )}

      {modalVisible ? <PopupModal modalVisible={modalVisible} setModalVisible={setModalVisible} /> : ''}
    </ScrollView>
  );
};

export default Dashboard;
