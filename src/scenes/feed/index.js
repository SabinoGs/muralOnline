import React from "react"
import {View, Text, FlatList, StyleSheet} from "react-native"
import { FeedCard } from "../../components/molecules"

const DATA = [
    {
        id: 1,
        title: "Vendo porco",
        author: "Gustavo Sabino",
        contact: "130009997",
        price: 666.09,
        imageUrl: "'https://reactnative.dev/img/tiny_logo.png'"
    },
    {
        id: 2,
        title: "Serviço de limpeza",
        author: "Seu madriga",
        contact: "4002-8922",
        price: 666.09,
        imageUrl: "'https://reactnative.dev/img/tiny_logo.png'"
    },
    {
        id: 3,
        title: "Faço seu imposto de renda",
        author: "Dona fulana",
        contact: "619990002223",
        price: 666.09,
        imageUrl: "'https://reactnative.dev/img/tiny_logo.png'"
    },
]



const FeedScreen = ({navigation}) => {

    return (
        <View>
            <Text style={indexStyle.title}>Foram encontrados {DATA.length} itens no quadro</Text>
            <FlatList
                data={DATA}
                renderItem={(props)=> <FeedCard {...props} />}
                keyExtractor={item => item.id}
            />                   
        </View>
    )
}

const indexStyle = StyleSheet.create({
    title: {
        color: "#929DA5",
        marginVertical: 8,
        marginHorizontal: 24,
    }
})

export default FeedScreen