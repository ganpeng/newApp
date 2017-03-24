import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

class ProgressBar extends Component {
  render() {
    return (
		<View style={styles.progressBar}>
			<ActivityIndicator size="large" color="#EA0000" />
		</View>
    );
  }
}

const styles = StyleSheet.create({
	progressBar: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default ProgressBar;
