import SvgUri from "react-native-svg-uri"
import { InfoContainer, TitleContainer } from "./FoodCardStyles"
import StyledText from "../../general/StyledText"
import { constants } from "../../../utils/constants"

const InfoContainerComponent = () => {
    return(
        <InfoContainer>
            <TitleContainer>
                <SvgUri source={require('../../../assets/images/crown_icon.svg')}/>

                <StyledText style={{fontSize: 14, fontWeight: "600", marginLeft: 8, color: constants.colors.black}}>Top of the week</StyledText>
            </TitleContainer>
            <StyledText style={{fontSize: 14, fontWeight: "600", marginTop: 16, color: constants.colors.lightDark}}>Primavera pizza</StyledText>
            <StyledText style={{fontSize: 14, fontWeight: "500", color: constants.colors.gray, marginBottom: 10}}>Weight 540gr</StyledText>

        </InfoContainer>
    )
}

export default InfoContainerComponent