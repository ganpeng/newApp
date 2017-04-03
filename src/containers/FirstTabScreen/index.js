import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { requestTop250, requestComingSoon, requestInTheaters, requestMoviesData } from '../../actions/movie';
import ProgressBar from '../../components/ProgressBar/index';

class FirstTabScreen extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            isloading: true
        }
    }

    componentDidMount() {
        this.props.requestMoviesData()
            .catch((err) => {
                console.log(err);
                this.setState({isloading: false});
            })
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
    const {top250, in_theaters, coming_soon } = this.props;
    const { isloading } = this.state;
    return (
        <View>
            <Text>
                Hello
            </Text>
        </View>
        );
    }
}

function mapStateToProps(state) {
    const { top250, coming_soon, in_theaters } = state.movie;
    return { top250, coming_soon, in_theaters };
}



export default connect(mapStateToProps, { requestTop250, requestComingSoon, requestInTheaters, requestMoviesData })(FirstTabScreen);


const styles = StyleSheet.create({
    progressBar: {
        backgroundColor: "#0a0a0a",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
