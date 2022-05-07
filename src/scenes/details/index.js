import React from "react"
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native"
import { ContactCard, ImageCard } from "../../components/molecules";
import { Typography, Colors, Spacing } from "../../styles";

const windowHeight = Dimensions.get('window').height;

const DetailsScreen = ({ route, navigation }) => {
    const { id } = route.params
    return (
        <View style={styles.basicContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <ImageCard/>
                <Text style={[styles.title]}>Informações adicionais</Text>
               <ContactCard/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    basicContainer: {
        backgroundColor: Colors.lightGray,
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
    scrollViewContainer: {
        flexGrow: 1,
        marginHorizontal: Spacing.medium,
        height: windowHeight,
    },
})


export default DetailsScreen