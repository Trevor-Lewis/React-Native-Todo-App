import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.input}
                onChangeText = {(todoInput) => props.textChange(todoInput)} 
                value = {props.todoInput}
            />
            <TouchableOpacity style = {styles.addButton} onPress={props.addNewTodo}>
                <Text style = {styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 8 },
        shadowColor: '#c1c1c1',
        shadowOpacity: 0.1
    },
    input: {
        backgroundColor: '#ddd',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    addButtonText: {
        color: '#afafaf',
        fontSize: 18,
        fontWeight: "700"
    }
})

export default InputBar;