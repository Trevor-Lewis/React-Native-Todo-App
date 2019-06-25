import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style = {styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#000",
        height: 60,
        alignItems: "center",
        justifyContent: 'center'
    },
    title: {
        marginTop: 20,
        color: '#afafaf',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
})

export default Header;