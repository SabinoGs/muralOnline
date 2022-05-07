import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Typography, Colors, Spacing } from "../../styles"
import { heightPixels2Percentage } from "../../styles/screen"

const ImageCard = ({title, price, description, imageUrl}) => {
    return (
        <View style={styles.adContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.description}>{description}</Text>
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
        borderRadius: Spacing.medium,
        resizeMode: 'stretch',
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