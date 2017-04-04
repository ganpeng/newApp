import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import LoginForm from '../../components/LoginForm/';

class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginForm/>
            </View>
        );
    }
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    }
})
