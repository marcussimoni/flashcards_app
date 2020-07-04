import { Platform } from "react-native";

const isAndroid = Platform.OS === "android"

const Style = {
    backgroundColor: '#4f5d75',
    textShadow: {
        textShadowColor: '#444',
        textShadowOffset: {
          height: 2,
          width: 2,
        },
        textShadowRadius: 3,
    }
}

export default Style;