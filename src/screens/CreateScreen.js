import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { state, addBlogpost, deleteBlogpost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogpost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default CreateScreen;
