import React, { useState, useEffect } from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import { FeedCard } from "../../components/molecules"
import { Typography, Colors, Spacing } from "../../styles"

const DATA = [
    {
        id: 1,
        title: "Vendo porco",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        author: "Gustavo Sabino",
        contact: "130009997",
        price: 666.09,
        imageUrl: "https://reactnative.dev/img/tiny_logo.png"
    },
    {
        id: 2,
        title: "Serviço de limpeza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        author: "Seu madriga",
        contact: "4002-8922",
        price: 666.09,
        imageUrl: "https://reactnative.dev/img/tiny_logo.png"
    },
    {
        id: 3,
        title: "Faço seu imposto de renda",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        author: "Dona fulana",
        contact: "619990002223",
        price: 666.09,
        imageUrl: "https://reactnative.dev/img/tiny_logo.png"
    },
]

const FeedScreen = ({ navigation }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchApi = async () => {
        const response = await fetch("http://localhost:8000/")
        const data = await response.json()
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
            <View>
                <Text style={indexStyle.title}>Foram encontrados {data.length} itens no quadro</Text>
                <FlatList
                    data={DATA}
                    renderItem={(props) => <FeedCard {...props} />}
                    keyExtractor={item => item.id}
                />
            </View>
    )
}

const indexStyle = StyleSheet.create({
    title: {
        color: Colors.gray,
        marginVertical: Spacing.small,
        marginHorizontal: Spacing.medium,
    }
})

export default FeedScreen