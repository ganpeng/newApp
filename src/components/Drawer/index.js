import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import styleUtil from '../../utils/styleUtil';

const {
    mainColor
} = styleUtil;

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
                        <Text>我的消息</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text>我的收藏</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text>我的资料</Text>
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
        marginTop: 10
    },
    menuList: {

    }
})
