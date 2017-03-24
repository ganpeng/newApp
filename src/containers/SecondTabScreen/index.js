import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';



class SecondTabScreen extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          SecondTabScreen
        </Text>
      </View>
    );
  }
}

export default SecondTabScreen;

