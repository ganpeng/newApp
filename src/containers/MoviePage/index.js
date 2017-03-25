import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import MovieCategoryList from '../../components/MovieCategoryList/index.js';
import CategoryList from '../../components/CategoryList/index.js';


class MoviePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <MovieCategoryList title="Top250" />
            <MovieCategoryList title="即将上映" />
            <MovieCategoryList title="正在上映" />
            <CategoryList />
        </View>
      </ScrollView>
    );
  }
}

export default MoviePage;


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
});

