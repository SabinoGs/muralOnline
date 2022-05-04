import React from "react"
import { View, Text, StyleSheet } from "react-native"


const DetailsScreen = ({ route, navigation }) => {
    const { id } = route.params
    return (
        <View>
            <Text style={styles.textProperties}>{id}</Text>
            <Text style={styles.textProperties}>Gustavo Sabino {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textProperties: {
        fontFamily: "Noto Sans",
        color: "#023047",
        lineHeight: 16,
        fontSize: 16,
    },
})


export default DetailsScreen