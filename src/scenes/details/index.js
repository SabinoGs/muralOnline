import React from "react"
import { View, Text, Image, StyleSheet, ScrollView } from "react-native"


const DetailsScreen = ({ route, navigation }) => {
    const { id } = route.params
    return (
        <View style={styles.basicContainer}>
            <ScrollView>
                <View style={styles.adContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://reactjs.org/logo-og.png' }}
                            style={styles.image}
                        />
                    </View>
                    <Text style={[styles.textProperties, styles.title]}>Título do Anúncio</Text>
                    <Text style={[styles.textProperties, styles.price]}>R$ 900,00</Text>
                    <Text style={[styles.textProperties, styles.description]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </View>

                <View style={styles.moreInfoContainer}>
                    <Text style={[styles.textProperties, styles.title]}>Informações adicionais</Text>
                    <View style={styles.moreInfoImageContainer}>
                        <Image
                            source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F851813717013870287%2F&psig=AOvVaw2amkgqJhQKNCpTPQtOBHII&ust=1651800633093000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIicjY2bx_cCFQAAAAAdAAAAABAO" }}
                            style={styles.contactImage}
                        />
                        <Text style={[styles.textProperties, styles.description]}>(49) 4002-8922</Text>
                        <Text style={[styles.textProperties, styles.description]}>Falar com Yudi</Text>
                    </View>
                </View>
            </ScrollView>
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
    title: {
        fontWeight: "bold",
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },
    price: {
        marginHorizontal: 16,
        color: "#00C608",
        fontWeight: "bold",
        marginBottom: 16,
    },
    description: {
        color: "#666666",
        fontWeight: "400",
        marginHorizontal: 16,
    },
    moreInfoContainer: {
        backgroundColor: "#FFFFFF",
        marginVertical: 16,
        borderRadius: 16,
    },
    contactImage: {
        maxHeight: "10%",
        maxWidth: "10%",
    },
    moreInfoImageContainer: {
        height: "100%",
        width: "100%",
        borderRadius: 16
    },
    adContainer: {
        maxHeight: "70%",
        backgroundColor: "#FFFFFF",
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 8,
        borderRadius: 16,
    },
    imageContainer: {
        maxHeight: "56%",
    },
    basicContainer: {
        backgroundColor: "#F5F5FA",
        // height: "100%",
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 16
    }
})


export default DetailsScreen