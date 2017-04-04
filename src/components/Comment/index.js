import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';


const thumbsUp = (<Icon name="thumbs-up" size={16} color="#aaa" />)


const avatar = 'https://img3.doubanio.com/icon/up46116182-12.jpg';


class Comment extends Component {
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
                <View style={styles.headerIconWrapper}>
                    <Image
                        style={styles.headerIcon}
                        source={{uri: avatar}}
                    />
                </View>
                <View style={styles.commentInfo}>
                    <View style={styles.commentUser}>
                        <Text style={styles.username}>老斑鸠</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={3.5}
                            starSize={15}
                            starColor="#f5a623"
                        />
                    </View>
                    <Text style={styles.commentTime}>
                        2017-03-09 11:24:27
                    </Text>
                    <Text style={styles.commentContent}>
                         强烈建议我家大甜甜去各种好莱坞片子里出演，然后各种同步引进妥妥的。还有，杰克逊老师为啥一定要杀金刚？明明就你跟它脸型最像了。 强烈建议我家大甜甜去各种好莱坞片子里出演，然后各种同步引进妥妥的。还有，杰克逊老师为啥一定要杀金刚？明明就你跟它脸型最像了。
                    </Text>
                    <View style={styles.thumbsUp}>
                        {thumbsUp}
                        <Text style={styles.thumbsUpNum}>156</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Comment;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20
    },
    headerIconWrapper: {
        width: 36,
        height: 36,
        marginRight: 10,
    },
    headerIcon: {
        width: 36,
        height: 36,
        borderRadius: 36
    },
    commentInfo: {
        flex: 1
    },
    commentUser: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    username: {
        color: "#494949",
        fontSize: 14,
        marginRight: 5
    },
    commentTime: {
        color: "#aaa",
        fontSize: 10
    },
    commentContent: {
        color: "#494949",
        fontSize: 12
    },
    thumbsUp: {
        flexDirection: "row",
        marginTop: 5,
        paddingLeft: 4
    },
    thumbsUpNum: {
        marginLeft: 2,
        color: "#aaa",
        fontSize: 12
    }
})
