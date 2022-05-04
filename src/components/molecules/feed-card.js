import React from "react"
import { Text, View, StyleSheet, Image, Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native'

const FeedCard = (props) => {
    const navigation = useNavigation()

    return (
        <Pressable
            style={styles.container}
            onPress={
                () => navigation.navigate('Details', {id: props.item.id})
            }
        >
            <View style={styles.child}>
                <Text style={styles.textProperties}>{props.item.title}</Text>
                <View style={styles.priceInfoContainer}>
                    <Text style={[styles.textProperties, styles.highlights]}>{props.item.price}</Text>
                    <Text style={styles.textProperties}>{props.item.author}</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.image}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        height: 88,
        borderColor: "#E1E1E5",
        borderWidth: 1,
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
        maxWidth: "25%",
    },
    image: {
        height: "100%",
        width: "100%",
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
    },
})


export default FeedCard
