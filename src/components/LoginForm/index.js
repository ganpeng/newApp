import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';

import TextInputField from '../TextInputField/';
import styleUtil from '../../utils/styleUtil';

const { mainColor } = styleUtil;



class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            password: "",
            errors: {}
        }
        this.onPress = this.onPress.bind(this);
        this.onChangePhoneText = this.onChangePhoneText.bind(this);
        this.onChangePasswordText = this.onChangePasswordText.bind(this);
    }

    onPress() {
        console.log(this.state);
    }

    onChangePhoneText(phone) {
        this.setState({phone});
    }

    onChangePasswordText(password) {
        this.setState({password});
    }

    render() {
        const {phone, password, errors} = this.state;
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
                    <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor="#99d9f4">
                        <Text style={styles.buttonText}>
                            登录
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default LoginForm;

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
