import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import SignUpForm from '../../components/SignUpForm/';

class SignUpPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SignUpForm/>
            </View>
        );
    }
}

export default SignUpPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    }
})
