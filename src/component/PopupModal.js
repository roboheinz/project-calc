import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropdownCheckDatar from './DropdownCheckDatar';
import { UseBangun } from '../../context/DataContext';
import { useState } from 'react';
import InputKeliling from './InputKeliling';
import InputVolume from './InputVolume';
import InputPermukaan from './InputPermukaan';
import InputLuas from './InputLuas';
import DropdownCheckRuang from './DropdownCheckRuang';

const PopupModal = ({ modalVisible, setModalVisible }) => {
  const { state } = UseBangun();
  const [value, setValue] = useState(0);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View className="flex-1 justify-center bg-[#303030]">
          <View style={styles.modalView}>
            {/* IMAGE */}
            {value == 1 ? (
              <Image alt={`${state.active.name}`} className="min-w-[200px]" source={state.active.sourceSecondary} />
            ) : value == 2 ? (
              <Image alt={`${state.active.name}`} className="min-w-[200px]" source={state.active.sourceThird} />
            ) : (
              <Image alt={`${state.active.name}`} className="min-w-[200px]" source={state.active.source} />
            )}
            {/* IMAGE */}

            {/* DropDown Category */}
            {state.active.category == 'datar' ? <DropdownCheckDatar name={state.active.name} value={value} setValue={setValue} /> : <DropdownCheckRuang name={state.active.name} value={value} setValue={setValue} />}
            {value == 1 && state.active.category == 'datar' ? (
              <InputKeliling valueDropdown={value} name={state.active.name} />
            ) : value == 2 && state.active.category == 'datar' ? (
              <InputLuas valueDropdown={value} name={state.active.name} />
            ) : (
              ''
            )}
            {value == 1 && state.active.category == 'ruang' ? (
              <InputVolume valueDropdown={value} name={state.active.name} />
            ) : value == 2 && state.active.category === 'ruang' ? (
              <InputPermukaan valueDropdown={value} name={state.active.name} />
            ) : (
              ''
            )}
            {/* DropDown Category */}

            <TouchableOpacity activeOpacity={0.5} style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: '#FFD1E3',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#5D3587',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PopupModal;
