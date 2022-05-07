import React from "react"
import { Dimensions, View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { Typography, Colors, Spacing } from "../../styles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailsScreen = ({ route, navigation }) => {
    const { id } = route.params
    return (
        <View style={styles.basicContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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

                <Text style={[styles.title]}>Informações adicionais</Text>
                <View style={styles.moreInfoContainer}>
                    <View style={styles.moreInfoImageContainer}>
                        <Image
                            source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F851813717013870287%2F&psig=AOvVaw2amkgqJhQKNCpTPQtOBHII&ust=1651800633093000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIicjY2bx_cCFQAAAAAdAAAAABAO" }}
                            style={styles.contactImage}
                        />
                        <Text style={[styles.description, styles.moreInfoDescription]}>(49) 4002-8922</Text>
                        <Text style={[styles.description, styles.moreInfoDescription]}>Falar com Yudi</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
    moreInfoContainer: {
        backgroundColor: Colors.white,
        marginVertical: Spacing.medium,
        borderRadius: Spacing.medium,
        maxHeight: "20%",
    },
    contactImage: {
        maxHeight: "10%",
        maxWidth: "10%",
    },
    moreInfoImageContainer: {
        height: "100%",
        width: "100%",
        borderRadius: Spacing.medium,
    },
    moreInfoDescription: {
        margin: Spacing.medium,
    },
    scrollViewContainer: {
        flexGrow: 1,
        marginHorizontal: Spacing.medium,
        height: windowHeight,
    },
    adContainer: {
        maxHeight: "70%",
        backgroundColor: Colors.white,
        marginTop: 24,
        marginBottom: 8,
        borderRadius: Spacing.medium,
    },
    imageContainer: {
        maxHeight: "56%",
    },
    basicContainer: {
        backgroundColor: Colors.lightGray,
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: Spacing.medium
    }
})


export default DetailsScreen