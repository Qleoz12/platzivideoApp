import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/mainList-layout';

class MainList extends Component {
  render() {
    const list = [
      {
        title: 'titulo',
        key: '1'
      },
      {
        title: 'otro titulo',
        key: '2'
      }
    ]
    return (
      <Layout
        title="Recomendado para ti"
        >
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text> }
        />
      </Layout>
    )
  }
}

export default MainList