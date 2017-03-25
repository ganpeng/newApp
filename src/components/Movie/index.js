import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
import { View, Text, StyleSheet, Image } from 'react-native';

import styleUtil from '../../utils/styleUtil';

const { dw } = styleUtil;

const movieWidth = (dw - 20 * 2 - 10) / 2 ;

const imageHeight = (movieWidth * 297) / 200;

const img = 'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg'

class Movie extends Component {
  render() {
    const { style } = this.props;
    return (
      	<View style={[styles.container, style]}>
			<Image
				style={styles.movieImage}
				source={{uri: img}}
			/>
			<Text style={styles.movieTitle}>Movie</Text>
      <View style={styles.starRatingWrapper}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={3.5}
          starSize={15}
          starColor="#f5a623"
        />
        <Text style={styles.ratingText}>8.9</Text>
      </View>
		</View>
    );
  }
}

export default Movie;

const styles = StyleSheet.create({
	container: {
		width: movieWidth,
		marginBottom: 10
	},
	movieImage: {
		width:movieWidth,
		height: imageHeight
  },
  movieTitle: {
    color: "#494949",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center"
  },
  starRatingWrapper: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5
  }
});
