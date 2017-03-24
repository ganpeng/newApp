import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import styleUtil from '../../utils/styleUtil';

const { dw } = styleUtil;

const movieWidth = (dw - 20 * 2 - 10) / 2 ;

const img = 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg'

class Movie extends Component {
  render() {
    return (
      	<View style={styles.container}>
			<Image
				style={styles.movieImage}
				source={{uri: img}}
			/>
			<Text>Movie</Text>
		</View>
    );
  }
}

export default Movie;

const styles = StyleSheet.create({
	container: {
		width: movieWidth,
		height: 200,
		backgroundColor: "yellow",
		marginBottom: 10
	},
	movieImage: {
		width:movieWidth,
		height: 150
	}
});
