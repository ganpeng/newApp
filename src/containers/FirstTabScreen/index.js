import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';



class FirstTabScreen extends Component {
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
          FirstTabScreen!!!!!
        </Text>
      </View>
    );
  }
}

export default FirstTabScreen;
