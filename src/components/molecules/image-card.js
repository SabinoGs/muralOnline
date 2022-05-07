import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Typography, Colors, Spacing } from "../../styles"
import { heightPixels2Percentage } from "../../styles/screen"

const ImageCard = () => {
    return (
        <View style={styles.adContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title}>Título do Anúncio</Text>
            <Text style={styles.price}>R$ 900,00</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    adContainer: {
        minHeight: heightPixels2Percentage(400),
        backgroundColor: Colors.white,
        marginTop: 24,
        marginBottom: 8,
        borderRadius: Spacing.medium,
    },
    imageContainer: {
        maxHeight: heightPixels2Percentage(256),
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: Spacing.medium
    },
    title: {
        ...Typography.titleFont,
        lineHeight: Spacing.medium,
        fontSize: Spacing.medium,
        color: Colors.blue,
        marginHorizontal: Spacing.medium,
        marginTop: Spacing.medium,
        marginBottom: 8,
    },
    price: {
        ...Typography.hightLightText,
        marginHorizontal: Spacing.medium,
        color: Colors.green,
        fontWeight: "bold",
        marginBottom: Spacing.medium,
    },
    description: {
        ...Typography.descriptionFont,
        ...Spacing.description,
        color: Colors.gray,
    },

})

export default ImageCard