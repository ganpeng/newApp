import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import take from 'lodash/take';

import MovieCategoryList from '../../components/MovieCategoryList/index.js';
import CategoryList from '../../components/CategoryList/index.js';
import { requestTop250, requestComingSoon, requestInTheaters, requestMoviesData } from '../../actions/movie';
import ProgressBar from '../../components/ProgressBar/index';


class MoviePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isloading: true
        }
    }

    componentDidmount() {
        console.log(this.props);
        this.props.requestMoviesData()
            .catch((err) => {
                console.log(err);
                this.setState({isloading: false});
            });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.top250 && nextProps.in_theaters && nextProps.coming_soon) {
            this.setState({isloading: false});
        }
    }

    _requestMovieData() {
        this.props.requestTop250();
        this.props.requestComingSoon();
        this.props.requestInTheaters();
    }

    render() {
        const { top250, in_theaters, coming_soon, navigator } = this.props;
        const { isloading } = this.state;

        const top250MovieList = take(top250.movies, 10);
        const comingSoonMovieList = take(coming_soon.movies, 10);
        const inTheatersMovieList = take(in_theaters.movies, 10);

        return (
            isloading ? <View style={styles.progressBar}><ProgressBar /></View> :
            <ScrollView>
                <View style={styles.container}>
                    <MovieCategoryList title="Top250" movieList={top250MovieList} navigator={navigator} movies={top250} />
                    <MovieCategoryList title="即将上映" movieList={comingSoonMovieList}  navigator={navigator} movies={in_theaters} />
                    <MovieCategoryList title="正在上映" movieList={inTheatersMovieList}  navigator={navigator} movies={coming_soon} />
                    <CategoryList />
                </View>
            </ScrollView>
        );
    }
}


function mapStateToProps(state) {
    const { top250, coming_soon, in_theaters, movies } = state.movie;
    return { top250, coming_soon, in_theaters, movies };
}



export default connect(mapStateToProps, { requestTop250, requestComingSoon, requestInTheaters, requestMoviesData })(MoviePage);


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    progressBar: {
        backgroundColor: "#0a0a0a",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
