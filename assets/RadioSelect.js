import RadioForm from 'react-native-simple-radio-button';
import { useState } from 'react';
import { View,Text,onPress } from 'react-native';

export default function RadioSelect() {
  const [chosenOption, setChosenOption] = useState(''); //will store our current user options
  const options = [
    { label: 'Salaried', value: '' },
    { label: 'Business', value: '' },
    { label: 'Other', value: '' },
  ]; //create our options for radio group
  return (
    <View>
      <Text> {chosenOption}</Text>
      <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />
    </View>
  );
}