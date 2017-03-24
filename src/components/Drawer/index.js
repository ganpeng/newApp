import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Drawer extends Component {
  render() {
    return (
      	<View style={styles.container}>
			<Text>Drawer</Text>
		</View>
    );
  }
}

export default Drawer;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ea544a"
	}
})
