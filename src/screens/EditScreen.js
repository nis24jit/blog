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

const EditScreen = ({ navigation }) => {
  const { state, editBlogpost } = useContext(Context);
  const id = navigation.getParam('id');

  const blogPost = state.find((blogPost) => {
    return blogPost.id === navigation.getParam('id');
  });

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogpost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
export default EditScreen;
