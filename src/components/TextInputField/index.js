import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import styleUtil from '../../utils/styleUtil';

const { placeholderTextColor, mainColor, errorMessageColor, formControlColor } = styleUtil;

class TextInputField extends Component {
	static defaultProps = {
		autoFocus: false,
		secureTextEntry: false
	}

    render() {
		const { error, secureTextEntry, placeholder, keyboardType, onChangeText, autoFocus } = this.props;
        return (
            <View style={styles.formGroup}>
				<TextInput
					secureTextEntry={secureTextEntry}
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
					underlineColorAndroid="transparent"
					keyboardType={keyboardType}
					onChangeText={onChangeText}
					autoFocus={autoFocus}
					style={styles.formControl}
				/>
				{
					error && <Text style={styles.errorMessage}>{error}</Text>
				}
			</View>
        );
    }
}

export default TextInputField;



const styles = StyleSheet.create({
	formGroup: {
		marginBottom: 10
	},
	formControl: {
		borderWidth: 1,
		height: 40,
		borderColor: mainColor,
		borderRadius: 4,
		color: formControlColor
	},
	errorMessage: {
		color: errorMessageColor,
		marginTop: 10
	}
})
