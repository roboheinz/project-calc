import React from 'react';
import { TouchableOpacity, Text, FlatList, View } from 'react-native';
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
    <ScrollView className="min-w-full flex-1" horizontal={false} nestedScrollEnabled={true} alwaysBounceVertical={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Text className="bg-red-500 p-4 text-white text-center">Logo</Text>

      <TouchableOpacity onPress={() => setOpenDatar(!openDatar)} className="my-2 bg-green-400 py-4 px-6 rounded-md">
        <Text className="font-medium text-center">Bangun Datar</Text>
      </TouchableOpacity>

      {openDatar && (
        <View>
          <FlatList
            data={state.datar}
            renderItem={({ item }) => (
              <TouchableOpacity className={'block bg-lime-300 p-4 my-2'} onPress={() => touchablePress(true, item, 'datar')}>
                {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
                {/* <Image alt={items.name} className="block h-5 max-w-full" /> */}
                <Text className="text-center">{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            className={'min-w-full'}
          />
        </View>
      )}

      <TouchableOpacity onPress={() => setOpenRuang(!openRuang)} className="mb-2 bg-green-400 py-4 px-6 rounded-md">
        <Text className="font-medium text-center ">Bangun Ruang</Text>
      </TouchableOpacity>

      {openRuang && (
        <View>
          <FlatList
            data={state.ruang}
            renderItem={({ item }) => (
              <TouchableOpacity className={'block bg-lime-300 p-4 my-2'} onPress={() => touchablePress(true, item, 'ruang')}>
                {/* <Image alt={item.name} source={item.source} className="block h-5 max-w-full" /> */}
                {/* <Image alt={items.name} className="block h-5 max-w-full" /> */}
                <Text className="text-center">{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            className={'block min-w-full'}
          />
        </View>
      )}

      {modalVisible && <PopupModal modalVisible={modalVisible} setModalVisible={setModalVisible} />}
    </ScrollView>
  );
};

export default Dashboard;
