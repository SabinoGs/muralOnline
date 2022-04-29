import React from "react"
import {Text, View, StyleSheet} from "react-native"

const FeedCard = ({item}) => {
    return (
        <View style={styles.item}>
            <Text>{item.title}</Text>                
            <Text>{item.author}</Text>                
            <Text>{item.contact}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 4,
    },
    item: {
        backgroundColor: "#D1D5DE",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
})


export default FeedCard