import React from "react"
import {View, Text, FlatList} from "react-native"
import { FeedCard } from "../../components/molecules"

const DATA = [
    {
        id: 1,
        title: "Vendo porco",
        author: "Gustavo Sabino",
        contact: "130009997",
    },
    {
        id: 2,
        title: "Serviço de limpeza",
        author: "Seu madriga",
        contact: "4002-8922",
    },
    {
        id: 3,
        title: "Faço seu imposto de renda",
        author: "Dona fulana",
        contact: "619990002223",
    },
]

const FeedScreen = () => {
    return (
        <View>
            <Text>Condominio Park Style</Text>
            <FlatList
                data={DATA}
                renderItem={FeedCard}
                keyExtractor={item => item.id}
            />                   
        </View>
    )
}


export default FeedScreen