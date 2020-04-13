import React, { useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => {
    return blogPost.id === navigation.getParam('id');
  });

  const id = navigation.getParam('id');
  return (
    <>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit', { id: navigation.getParam('id') });
        }}
      >
        <EvilIcons size={30} name="pencil" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  icon: {
    fontSize: 10,
  },
});
export default ShowScreen;
