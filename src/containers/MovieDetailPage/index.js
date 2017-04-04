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


class MovieDetail extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={styles.container}>
                    <MovieDetailCard />
                    <CommentList />
                </View>
            </ScrollView>
        );
    }
}


function mapStateToProps(state) {
    const { top250, in_theaters, coming_soon } = state;
    return { top250, in_theaters, coming_soon };
}


export default connect(mapStateToProps, {})(MovieDetail);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    }
});
