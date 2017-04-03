import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ListView
} from 'react-native';

import Movie from '../Movie/';

                    //{
                        //movies.map((movie, index) => <Movie key={index} movie={movie} />)
                    //}



class MovieList extends Component {
    render() {
        const { start, total, movies  } = this.props.movies;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(movies);
        return (
            <View style={styles.container}>
                <ListView
                    contentContainerStyle={styles.movieList}
                    dataSource={dataSource}
                    renderRow={(rowData) => <Movie movie={rowData} />}
                    pageSize={10}
                />
            </View>
        );
    }
}

export default MovieList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    movieList: {
        //flex: 1,
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    }
});
