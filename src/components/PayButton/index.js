import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native';

import {Btn, Label} from './styles';
// '00fc6c'

export default function PayButton({onPress, focused}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Btn
        colors={focused ? ['#fff', '#ccc'] : ['#0ecd10', '#00ac4a']}
        start={[1, 0.2]}>
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pay</Label>
      </Btn>
    </TouchableWithoutFeedback>
  );
}
