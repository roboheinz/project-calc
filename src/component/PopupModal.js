import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropdownCheck from './DropdownCheck';
import { UseBangun } from '../../context/DataContext';
import { useState } from 'react';
import InputKeliling from './InputKeliling';
import InputLuas from './InputLuas';

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
        <View className="flex-1 justify-center mt-6 bg-[#303030]">
          <View style={styles.modalView}>
            <Image alt="Persegi" width={50} height={50} className="bg-red-500" />
            <Text style={styles.modalText}>{state.active.name}</Text>
            <DropdownCheck name={state.active.name} value={value} setValue={setValue} />
            {value == 1 ? <InputKeliling valueDropdown={value} name={state.active.name} /> : value == 2 ? <InputLuas valueDropdown={value} name={state.active.name} /> : ''}
            {/* di bagian ini error terkena event polling */}
            <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
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
    backgroundColor: 'white',
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
