import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Movie from '../Movie/';

class MovieList extends Component {
  render() {
    return (
      	<View style={styles.container}>
			<Text>MovieList</Text>
			<View style={styles.movieList}>
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
			</View>
		</View>
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
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		backgroundColor: "green"
	}
});
