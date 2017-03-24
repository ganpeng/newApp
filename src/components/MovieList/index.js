import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Movie from '../Movie/';

class MovieList extends Component {
  render() {
    return (
     <ScrollView showsVerticalScrollIndicator={true}>
      	<View style={styles.container}>
          <View style={styles.movieList}>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </View>
	    </View>
    </ScrollView>
    );
  }
}

export default MovieList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	movieList: {
		flex: 1,
    alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	}
});
