import SvgUri from "react-native-svg-uri"
import FoodCard, { AddButton, BottomContainer, InfoContainer, SideContainer, StarContainer, TitleContainer } from "./FoodCard"
import StyledText from "../../general/StyledText"
import { Image } from "react-native"
import InfoContainerComponent from "./InfoContainer"

const FoodCardComponent = () => {
    return(
        <FoodCard>
            <SideContainer>
                <InfoContainerComponent />

                <BottomContainer>
                    <AddButton>
                        <SvgUri source={require('../../assets/images/add_icon.svg')}/>
                    </AddButton>

                    <StarContainer>
                        <SvgUri source={require('../../assets/images/star_icon.svg')}/>
                        <StyledText style={{fontSize: 12, fontWeight: "600"}}>5.0</StyledText>
                    </StarContainer>
                </BottomContainer>
            </SideContainer>

            <Image source={require('../../assets/images/pizza_image.png')} style={{overflow: 'hidden'}}/>
            
        </FoodCard>
    )
}

export default FoodCardComponent