import SvgUri from "react-native-svg-uri"
import { AddButton, BottomContainer, StarContainer } from "./FoodCardStyles"
import StyledText from "../../general/StyledText"

const BottomContainerComponent = () => {
    return(
        <BottomContainer>
            <AddButton>
                <SvgUri source={require('../../../assets/images/add_icon.svg')}/>
            </AddButton>

            <StarContainer>
                <SvgUri source={require('../../../assets/images/star_icon.svg')}/>
                <StyledText size='12' font='M500' style={{marginLeft: 4}}>5.0</StyledText>
            </StarContainer>
        </BottomContainer>
    )
}

export default BottomContainerComponent