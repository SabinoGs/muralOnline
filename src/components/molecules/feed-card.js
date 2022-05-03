import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"

const FeedCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.child}>
                <Text style={styles.textProperties}>{item.title}</Text>
                <View style={styles.priceInfoContainer}>
                    <Text style={[styles.textProperties, styles.highlights]}>{item.price}</Text>
                    <Text style={styles.textProperties}>{item.author}</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#E1E1E5",
        borderRadius: 16,
        height: 88,
    },
    child: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: 16,
        marginTop: 16,
        marginLeft: 16,
        maxWidth: "75%",
    },
    priceInfoContainer: {
        display: "flex",
        flexDirection: "row",
        marginRight: 16,
        justifyContent: "space-between",
    },
    highlights: {
        color: "#00C608",
        fontWeight: "bold",
    }, 
    textProperties: {
        fontFamily: "Noto Sans",
        color: "#023047",
        lineHeight: 16,
        fontSize: 16,
    },
    value: {
        marginTop: 16,
    },
    imageContainer: {
        flex: 1,
        fontFamily: "Noto Sans",
        maxWidth: "25%"
    },
    image: {
        height: 88,
        width: 88,
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
    },
})


export default FeedCard
