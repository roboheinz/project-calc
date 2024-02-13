import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, Image, ScrollView, Modal, StyleSheet } from 'react-native';

const Dashboard = () => {
  const [openDatar, setOpenDatar] = React.useState(true);
  const [openRuang, setOpenRuang] = React.useState(true);
  // const [isModal, setIsModal] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const bangunData = [
    {
      datar: [
        {
          source: require(`../../assets/icon.png`),
          name: 'Persegi',
        },
      ],

      ruang: ['Kubus', 'Balok', 'Prisma Segitiga', 'Kerucut', 'Limas Segitiga', 'Limas Segiempat', 'Bola', 'Tabung'],
    },
  ];

  return (
    <SafeAreaView className="mt-14 items-center flex-1">
      <Text>Logo</Text>

      <TouchableOpacity onPress={() => setOpenDatar(!openDatar)} className="mt-14">
        <Text>Bangun Datar</Text>
      </TouchableOpacity>

      {/* POP UP */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center mt-6">
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* POP UP */}

      {bangunData[0].datar.map((items, index) => (
        <TouchableOpacity key={index} className={openDatar ? 'hidden' : 'block bg-lime-300 p-4'} onPress={() => setModalVisible(true)}>
          {/* <Image></Image> */}
          {/* <Image source={items.source} /> */}
          <Text>{items.name}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={() => setOpenRuang(!openRuang)} className="mt-14">
        <Text>Bangun Ruang</Text>
      </TouchableOpacity>
      {bangunData[0].ruang.map((items, index) => (
        <View key={index} className={openRuang ? 'hidden' : 'block'}>
          <Text>{items}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
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

export default Dashboard;
