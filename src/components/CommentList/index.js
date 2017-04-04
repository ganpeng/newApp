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

import Comment from '../Comment/';


class CommentList extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.commentsTitle}>
                    金刚：骷髅岛的短片(14168)
                </Text>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </View>
        );
    }
}

export default CommentList;

const styles = StyleSheet.create({
    container: {},
    commentsTitle: {
        paddingVertical: 10,
        color: "#aaa",
        fontSize: 15
    }
})
