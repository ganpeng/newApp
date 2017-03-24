import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class LoginPage extends Component {
  render() {
    return (
      	<View style={styles.container}>
			<View style={styles.formContainer}>
				<FormLabel>手机号</FormLabel>
				<FormInput
					onChangeText={(text) => console.log(text)}
					inputStyle={styles.formInput}
					placeholder="请用手机号登录"
					underlineColorAndroid="transparent"
				/>
				<FormValidationMessage>您输入的手机号格式不正确</FormValidationMessage>
			</View>
			<View style={styles.formContainer}>
				<FormLabel>密码</FormLabel>
				<FormInput
					onChangeText={(text) => console.log(text)}
					inputStyle={styles.formInput}
					placeholder="请用密码"
					underlineColorAndroid="transparent"
				/>
				<FormValidationMessage>您输入的密码格式错误</FormValidationMessage>
			</View>
		</View>
    );
  }
}

export default LoginPage;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
		justifyContent: "center",
		alignItems: "center",
	},
	formContainer: {
	},
	formInput: {
		height: 40,
		borderWidth: 1,
		borderColor: "rgb(68,108,179)",
		fontSize: 13,
		paddingHorizontal: 15
	}
})
