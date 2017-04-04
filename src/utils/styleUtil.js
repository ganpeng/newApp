import {
    Dimensions
} from 'react-native';

const {
    width,
    height
} = Dimensions.get('window');



export default {
    dw: width,
    dh: height,
    mainColor: "#1abc9c",
    placeholderTextColor: "#95a5a6",
    errorMessageColor: "#e74c3c",
    formControlColor: "#666"
}
