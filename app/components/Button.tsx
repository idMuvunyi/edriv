import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import React from 'react';
import {appColor} from '../theme/colors';

interface ButtonProps extends PressableProps {
  title: string;
  bgColor?: string;
  bgOnPress?: string;
  color?: string;
  isDisabled?: boolean;
}

const Button = ({
  title,
  bgColor,
  bgOnPress,
  isDisabled,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? bgOnPress
            : isDisabled
            ? '#ced4da'
            : bgColor,
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
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
});
