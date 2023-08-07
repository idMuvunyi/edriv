import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import React from 'react';

interface ButtonProps extends PressableProps {
  title: string;
  bgColor?: string;
  color?: string;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? 'rgb(210, 230, 255)'
            : 'rgb(210, 220, 255)',
        },
        styles.buttonContainer,
      ]}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 15,
    borderRadius: 5,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
  },
});
