import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropdownCheck from './DropdownCheck';
import { UseBangun } from '../../context/DataContext';

const PopupModal = ({ modalVisible, setModalVisible, touchablePress }) => {
  const { state } = UseBangun();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center mt-6 bg-[#303030]">
          <View style={styles.modalView}>
            <Image alt="Persegi" width={50} height={50} className="bg-red-500" />
            <Text style={styles.modalText}>{state.active?.name}</Text>
            <DropdownCheck name={state?.active?.name} />
            <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => touchablePress(false, '')}>
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
