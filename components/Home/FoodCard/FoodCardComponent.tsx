import FoodCard, { SideContainer } from './FoodCardStyles'
import { Image, ImageRequireSource } from 'react-native'
import InfoContainerComponent from './InfoContainer'
import BottomContainerComponent from './BottomContainerComponent'

const FoodCardComponent = ({ image }: { image: ImageRequireSource }) => {
  return (
    <FoodCard>
      <SideContainer>
        <InfoContainerComponent />

        <BottomContainerComponent />
      </SideContainer>

      <Image source={image} style={{ overflow: 'hidden' }} />
    </FoodCard>
  )
}

export default FoodCardComponent
