import { Image, View, StyleSheet, TouchableOpacity } from "react-native"
import { ScreenContainer } from "../styles/general/ScreenContainer"
import SvgUri from "react-native-svg-uri"

const HomeScreen = () => {
    return(
        <ScreenContainer>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/profile.png')} style={{height: 40, width: 40}}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <SvgUri source={require('../assets/images/menu_icon.svg')} height="30" width="30"/>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    }
})

export default HomeScreen