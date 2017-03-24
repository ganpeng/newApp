import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styleUtil from '../../utils/styleUtil';

const { dw } = styleUtil;

const movieWidth = (dw - 20 * 2 - 10) / 2 ;

class Movie extends Component {
  render() {
    return (
      	<View style={styles.container}>
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
	}
});
