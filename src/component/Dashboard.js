import React from "react"
import { SafeAreaView, TouchableOpacity, View, Text, Image, ScrollView } from "react-native";

const Dashboard = () => {

    const [openDatar, setOpenDatar] = React.useState(true);
    const [openRuang, setOpenRuang] = React.useState(true);

    const bangunData = [
        {
            "datar": [
                {
                    source: require(`../../assets/icon.png`),
                    name: "Persegi"
                },
            ],

            "ruang": [
                "kubus",
                "balok",
                "prisma segitiga",
                "kerucut",
                "limas segitiga",
                "limas segiempat",
                "bola",
                "tabung"
            ]
        }
    ]

    return (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
            <ScrollView>
                <Text>Logo</Text>

                <TouchableOpacity onPress={() => setOpenDatar(!openDatar)} style={{marginTop: 50}}>
                    <Text>Bangun Datar</Text>
                </TouchableOpacity>
                {
                    bangunData[0].datar.map((items, index) => (
                        <View key={index} style={openDatar ? {display: 'none'} : {display: 'block'}}>
                            {/* <Image></Image> */}
                            <Image source={items.source} style={{width: 100}}/>
                            <Text>{items.name}</Text>
                        </View>
                    ))
                }

                <TouchableOpacity onPress={() => setOpenRuang(!openRuang)} style={{marginTop: 50}}>
                    <Text>Bangun Ruang</Text>
                </TouchableOpacity>
                {
                    bangunData[0].ruang.map((items, index) => (
                        <View key={index} style={openRuang ? {display: 'none'} : {display: 'block'}}>
                            <Text>{items}</Text>
                        </View>
                    )) 
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard;