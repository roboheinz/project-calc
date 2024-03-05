import React, { useEffect } from 'react';
import { TouchableOpacity, Text, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import PopupModal from './PopupModal';
import { UseBangun } from '../../context/DataContext';
import Holofive from '../../assets/Holofive.svg';

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

  const selectedOpeningBangun = (type) => {
    if (type.toLowerCase() == 'datar') {
      setOpenDatar(!openDatar);
      setOpenRuang(false);
      return;
    }
    if (type.toLowerCase() == 'ruang') {
      setOpenRuang(!openRuang);
      setOpenDatar(false);
      return;
    }
  };

  return (
    <ScrollView
      className={modalVisible ? 'min-w-full flex-1 bg-[#303030]' : 'min-w-full flex-1 bg-[#FFD1E3]'}
      horizontal={false}
      nestedScrollEnabled={true}
      alwaysBounceVertical={false}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      {modalVisible && <PopupModal modalVisible={modalVisible} setModalVisible={setModalVisible} />}

      <View className={modalVisible ? 'hidden' : 'mx-auto block'}>
        <Holofive width="300" height="300" />
      </View>

      <TouchableOpacity activeOpacity={0.6} onPress={() => selectedOpeningBangun('datar')} className="w-11/12 mx-auto mt-10 mb-2 px-6 py-4 bg-[#392467] rounded-md">
        <Text className={modalVisible ? 'hidden' : 'font-medium text-xl text-center text-white'}>Bangun Datar</Text>
      </TouchableOpacity>

      {openDatar && (
        <View>
          <FlatList
            data={state.datar}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.8} className={'w-11/12 mx-auto my-2 p-4 bg-[#5D3587] rounded-md block'} onPress={() => touchablePress(true, item, 'datar')}>
                <Text className="text-center text-white text-base">{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            className={modalVisible ? 'hidden' : 'min-w-full'}
          />
        </View>
      )}

      <TouchableOpacity activeOpacity={0.6} onPress={() => selectedOpeningBangun('ruang')} className={modalVisible ? 'hidden' : 'w-11/12 mx-auto mt-10 mb-2 px-6 py-4 bg-[#392467] rounded-md block'}>
        <Text className="font-medium text-xl text-center text-white">Bangun Ruang</Text>
      </TouchableOpacity>

      {openRuang && (
        <View>
          <FlatList
            data={state.ruang}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.8} className={'w-11/12 mx-auto my-2 p-4 bg-[#5D3587] rounded-md block'} onPress={() => touchablePress(true, item, 'ruang')}>
                <Text className="text-center text-white text-base">{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            className={modalVisible ? 'hidden' : 'block min-w-full'}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Dashboard;
