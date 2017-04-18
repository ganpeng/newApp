import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styleUtil from '../../utils/styleUtil';

const {
    mainColor
} = styleUtil;

const MessageIcon = (<Icon name="commenting" size={20} color={mainColor} />);
const StarIcon = (<Icon name="star" size={20} color={mainColor} />);
const InfoIcon = (<Icon name="address-card" size={20} color={mainColor} />);
const AngleRightIcon = (<Icon name="angle-right" size={20} color={mainColor} />);


class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarWrapper}>
                    <View>
                        <Image style={styles.avatar} resizeMode="contain" source={require("../../../img/avatar.jpeg")} />
                        <Text style={styles.username}>LouisGan</Text>
                    </View>
                </View>
                <View style={styles.menuList}>
                    <View style={styles.menuItem}>
                        {MessageIcon}
                        <Text style={styles.menuItemText}>我的消息</Text>
                    </View>
                    <View style={styles.menuItem}>
                        {StarIcon}
                        <Text style={styles.menuItemText}>我的收藏</Text>
                    </View>
                    <View style={styles.menuItem}>
                        {InfoIcon}
                        <Text style={styles.menuItemText}>我的资料</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Drawer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    avatarWrapper: {
        height: 160,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:mainColor
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80
    },
    username: {
        textAlign: "center",
        marginTop: 10,
        color: "#fff"
    },
    menuList: {
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        height: 40,
        backgroundColor: "#f2f2f2",
        marginBottom: 5
    },
    menuItemText: {
        marginLeft: 20
    }
})
