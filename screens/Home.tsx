import { Image, View, StyleSheet } from "react-native"
import { ScreenContainer } from "../styles/general/ScreenContainer"
import SvgUri from "react-native-svg-uri"

const HomeScreen = () => {
    return(
        <ScreenContainer>
            <View style={styles.header}>
                <Image source={require('../assets/images/profile.png')} style={{height: 40, width: 40}}/>
                <SvgUri source={require('../assets/images/menu_icon.svg')} height="30" width="30"/>
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