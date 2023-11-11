import SvgUri from "react-native-svg-uri"
import FoodCard, { SideContainer } from "./FoodCard"
import { Image } from "react-native"
import InfoContainerComponent from "./InfoContainer"
import BottomContainerComponent from "./bottomContainerComponent"

const FoodCardComponent = () => {
    return(
        <FoodCard>
            <SideContainer>
                <InfoContainerComponent />

                <BottomContainerComponent />
            </SideContainer>

            <Image source={require('../../assets/images/pizza_image.png')} style={{overflow: 'hidden'}}/>
            
        </FoodCard>
    )
}

export default FoodCardComponent