import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import styleUtil from '../../utils/styleUtil';
import Movie from '../Movie/';

const {
    mainColor
} = styleUtil;


class MovieCategoryList extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    showMovieList() {
        const {
            movies,
            title,
            type,
            nextPage
        } = this.props;
        this.props.navigator.showModal({
            screen: 'Ninja.MovieList',
            title,
            passProps: {
                type,
                nextPage
            },
            animationType: 'slide-up'
        })
    }


    render() {

        const {
            title,
            movieList
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.titleMore}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableHighlight style={styles.moreWrapper} onPress={this.showMovieList.bind(this)}>
                        <Text style={styles.more}>更多</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        movieList.map((movie, index) => {
                            if (index === 9) {
                                return <Movie key={index} movie={movie} />;
                            } else {
                                return <Movie key={index} style={styles.movieItem} movie={movie} />;
                            }
                        })
                    }
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
