import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';

import styleUtil from '../../utils/styleUtil';
import Movie from '../Movie/';

const { mainColor } = styleUtil;


class MovieCategoryList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const { title } = this.props;

    const movies = [];

    for (let i = 0; i < 10; i++) {
      if (i === 9) {
        movies.push(<Movie key={i} />);
      } else {
        movies.push(<Movie key={i} style={styles.movieItem} />);
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleMore}>
          <Text style={styles.title}>{title}</Text>
          <TouchableHighlight style={styles.moreWrapper}>
            <Text style={styles.more}>更多</Text>
          </TouchableHighlight>
        </View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movies}
					</ScrollView>
      </View>
    );
  }
}

export default MovieCategoryList;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
  },
  titleMore: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 16,
    color: "#111"
  },
  moreWrapper: {

  },
  more: {
    color: mainColor,
    fontSize: 14
  },
  movieItem: {
    marginRight: 10
  }
})

