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
import {
    connect
} from 'react-redux';

import Movie from '../Movie/';
import ProgressBar from '../ProgressBar/';

import styleUtil from '../../utils/styleUtil';
const {
    dw
} = styleUtil;

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: false
        }
    }

    retrieveNextPage() {
        const {
            type,
            nextPage,
        } = this.props;
        const { start, total } = this.props[type];
        const nextStart = start + 10;
        if (!this.state.isloading && nextStart < total) {
            nextPage(nextStart, () => {
                this.setState({
                    isloading: true
                });
            }, () => {
                this.setState({
                    isloading: false
                });
            });
        }
    }
    render() {
        const {
            type,
            nextPage,
            navigator
        } = this.props;
        const { movies } = this.props[type]
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        const dataSource = ds.cloneWithRows(movies);
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    onEndReached={this.retrieveNextPage.bind(this)}
                    onEndReachedThreshold={1200}
                    contentContainerStyle={styles.movieList}
                    dataSource={dataSource}
                    renderRow={(rowData) => <Movie movie={rowData} navigator={navigator} type={type} />}
                    pageSize={10}
                    renderFooter={() => <View style={styles.progressBar}><ProgressBar /></View>}
                />
            </View>
        );
    }
}


function mapStateToProps(state) {
    const {
        top250,
        coming_soon,
        in_theaters
    } = state.movie;
    return {
        top250,
        coming_soon,
        in_theaters
    };
}



export default connect(mapStateToProps, {})(MovieList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    movieList: {
        padding: 20,
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    progressBar: {
        width: dw - 20 * 2,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
});
