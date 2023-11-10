import { Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styled from 'styled-components/native';

const Header = styled.View`
    flex-direction: 'row';
    justify-content: 'space-between';
    align-items: 'center';
    width: '100%';
`

export const HomeHeader = () => {
    return(
        <Header>
            <TouchableOpacity>
                <Image source={require('../../assets/images/profile.png')} style={{height: 40, width: 40}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <SvgUri source={require('../../assets/images/menu_icon.svg')} height="30" width="30"/>
            </TouchableOpacity>
        </Header>
    )
}