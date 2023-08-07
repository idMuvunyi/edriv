import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';

const InputText = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
}: TextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'rgb(210, 220, 220)',
    marginVertical: 10,
    paddingLeft: 5,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
