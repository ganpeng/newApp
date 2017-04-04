import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import MovieDetailCard from '../../components/MovieDetailCard/';
import CommentList from '../../components/CommentList/';
import ProgressBar from '../../components/ProgressBar/';

import { getMovieDetailRequest } from '../../actions/movie';

class MovieDetail extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            isloading : true
        }
    }

    componentDidMount() {
        const { id, getMovieDetailRequest }  = this.props;
        getMovieDetailRequest(id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movie) {
            this.setState({
                isloading: false
            })
        }
    }


    render() {
        const { movie, id } = this.props;
        return (
            this.state.isloading ? <View style={styles.progressBarContainer}><ProgressBar /></View>
            :<ScrollView showsVerticalScrollIndicator={true}>
                <View style={styles.container}>
                    <MovieDetailCard movie={movie} />
                    <CommentList />
                </View>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movie.movieDetail
    }
}



export default connect(mapStateToProps, { getMovieDetailRequest })(MovieDetail);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    progressBarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});
