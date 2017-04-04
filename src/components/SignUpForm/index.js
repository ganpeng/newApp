import React, {
    Component
} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native';

import TextInputField from '../TextInputField/';
import styleUtil from '../../utils/styleUtil';

const {
    mainColor
} = styleUtil;


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            password: "",
            confirmPassword: "",
            errors: {}
        }
        this.onPress = this.onPress.bind(this);
        this.onChangePhoneText = this.onChangePhoneText.bind(this);
        this.onChangePasswordText = this.onChangePasswordText.bind(this);
        this.onChangeConfirmPasswordText = this.onChangeConfirmPasswordText.bind(this);
    }

    onPress() {
        console.log(this.state);
    }

    onChangePhoneText(phone) {
        this.setState({
            phone
        });
    }

    onChangePasswordText(password) {
        this.setState({
            password
        });
    }

    onChangeConfirmPasswordText(confirmPassword) {
        this.setState({
            confirmPassword
        });
    }
    render() {
        const {
            phone,
            password,
            confirmPassword,
            errors
        } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInputField
                        placeholder="请输入手机号"
                        keyboardType="numeric"
                        value={phone}
                        error={errors.phone}
                        onChangeText={this.onChangePhoneText}
                    />
                    <TextInputField
                        placeholder="请输入密码"
                        keyboardType="default"
                        secureTextEntry={true}
                        value={password}
                        error={errors.password}
                        onChangeText={this.onChangePasswordText}
                    />
                    <TextInputField
                        placeholder="请再次输入密码"
                        keyboardType="default"
                        secureTextEntry={true}
                        value={confirmPassword}
                        error={errors.confirmPassword}
                        onChangeText={this.onChangeConfirmPasswordText}
                    />
                    <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor="#99d9f4">
                        <Text style={styles.buttonText}>
                            注册
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default SignUpForm;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 50,
        padding: 20,
        backgroundColor: "#f5f5f5"
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    },
    button: {
        height: 36,
        backgroundColor: mainColor,
        borderColor: mainColor,
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})
