import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import MovieCategoryList from '../../components/MovieCategoryList/index.js';


class MoviePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <MovieCategoryList title="Top250" />
          <MovieCategoryList title="即将上映" />
          <MovieCategoryList title="正在上映" />
        </ScrollView>
      </View>
    );
  }
}

export default MoviePage;


const styles = StyleSheet.create({
  container: {}
});

