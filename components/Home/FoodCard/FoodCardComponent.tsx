import FoodCard, { SideContainer } from "./FoodCardStyles"
import { Image } from "react-native"
import InfoContainerComponent from "./InfoContainer"
import BottomContainerComponent from "./BottomContainerComponent"

const FoodCardComponent = () => {
    return(
        <FoodCard>
            <SideContainer>
                <InfoContainerComponent />

                <BottomContainerComponent />
            </SideContainer>

            <Image source={require('../../../assets/images/pizza_image.png')} style={{overflow: 'hidden'}}/>
            
        </FoodCard>
    )
}

export default FoodCardComponent