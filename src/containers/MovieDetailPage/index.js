import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import MovieDetailCard from '../../components/MovieDetailCard/';


class MovieDetail extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <MovieDetailCard />
        </View>
      </ScrollView>
    );
  }
}

export default MovieDetail;


const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20
    flex: 1,
    padding: 20
  }
});

