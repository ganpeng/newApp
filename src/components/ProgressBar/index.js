import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import styleUtil from '../../utils/styleUtil';

const {
    mainColor
} = styleUtil;


class ProgressBar extends Component {
    render() {
        return (
            <View style={styles.progressBar}>
                <ActivityIndicator size="large" color={mainColor} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    progressBar: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProgressBar;
