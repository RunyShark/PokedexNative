import React, {useEffect, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebounce} from '../../hooks';
import {styles} from './SearchInputStyle';
interface SearchProps {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: SearchProps) => {
  const [input, setInput] = useState('');
  const debounceValue = useDebounce({input, time: 700});

  useEffect(() => {}, [debounceValue]);
  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Search Pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={input}
          onChangeText={setInput}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};
