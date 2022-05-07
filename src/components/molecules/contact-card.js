import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Typography, Colors, Spacing } from "../../styles"
import { heightPixels2Percentage, widthPixels2Percentage } from "../../styles/screen"

const ContactCard = ({contactPhone, author}) => {
    return (
        <View style={styles.moreInfoContainer}>
            <Image
                source={{ uri: "https://i.pinimg.com/564x/98/c8/28/98c828953930ca387b6c89c17c7df2c0.jpg" }}
                style={styles.contactImage}
            />
            <View style={styles.contactInfo}>
                <Text style={[styles.description]}>{contactPhone}</Text>
                <Text style={[styles.description]}>{author}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    moreInfoContainer: {
        flexDirection: "row",
        backgroundColor: Colors.white,
        marginVertical: Spacing.medium,
        borderRadius: Spacing.medium,
        padding: Spacing.medium,
        minHeight: heightPixels2Percentage(88),
        maxHeight: heightPixels2Percentage(138),
    },
    contactImage: {
        height: heightPixels2Percentage(35),
        width: widthPixels2Percentage(35),
        borderRadius: Spacing.small
    },
    contactInfo: {
        flexDirection: "column"
    },
    description: {
        ...Typography.descriptionFont,
        ...Spacing.description,
        color: Colors.gray,
    },
})

export default ContactCard