import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import StarRating from 'react-native-star-rating';

import resolveAssetSource from 'resolveAssetSource';


import styleUtil from '../../utils/styleUtil';

const {
    dw
} = styleUtil;

const imageWidth = (dw - 20 * 2 - 10) / 3;

const imageHeight = (imageWidth * 297) / 200;


class MovieDetailCard extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const { movie } = this.props;
        const genres = movie.genres.join(' / ');
        const directors = movie.directors.map((director) =>  director.name).join(' / ');
        const casts = movie.casts.map((cast) => cast.name).join(' / ');
        const countries = movie.countries.join(' , ');
        return (
            movie ?
            <View style={styles.container}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.infoWrapper}>
                    <View style={styles.basicInfo}>
                        <View style={styles.ratingComments}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={movie.rating.average * 5 / 10}
                                starSize={15}
                                starColor="#f5a623"
                            />
                            <Text style={styles.ratingNum}>{movie.rating.average}</Text>
                            <Text style={styles.commentsNum}>{movie.ratings_count}人评价</Text>
                        </View>
                        <Text style={styles.textInfo}>
                            {genres} / {directors} / {casts}
                        </Text>
                        <Text style={[styles.textInfo, {marginTop: 10}]}>
                            {movie.year} ( {countries} )
                        </Text>
                    </View>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image} source={{uri: movie.images.medium}} />
                    </View>
                </View>
                <View style={styles.summary}>
                    <Text style={styles.secondTitle}>
                        {movie.title}的剧情简介
                    </Text>
                    <Text style={styles.summaryDetail}>
                        {movie.summary}
                    </Text>
                </View>
            </View> : null
        );
    }
}

export default MovieDetailCard;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        color: "#111"
    },
    infoWrapper: {
        flexDirection: "row"
    },
    basicInfo: {
        flex: 1,
        marginRight: 10
    },
    ratingComments: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 10
    },
    ratingNum: {
        paddingLeft: 4,
        paddingRight: 10,
        color: "#494949"
    },
    commentsNum: {
        color: "#aaa",
        fontSize: 12
    },
    textInfo: {
        color: "#494949",
        fontSize: 12
    },
    imageWrapper: {
        width: imageWidth,
        height: imageHeight,
    },
    image: {
        width: imageWidth,
        height: imageHeight,
    },
    secondTitle: {
        paddingVertical: 10,
        color: "#aaa",
        fontSize: 15
    },
    summaryDetail: {
        color: "#494949",
        fontSize: 12
    }
});
