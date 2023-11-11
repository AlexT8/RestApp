import { FoodCardComponentProps } from '../../../types/Home/FoodCardTypes';
import { Image } from "react-native";
import StyledText from "../../general/StyledText";
import SvgUri from "react-native-svg-uri";
import { FoodCardButton, FoodCardStyles } from './FoodCardStyles';

const FoodCard = (props: FoodCardComponentProps) => {

    const { card, onPress } = props

    const icon = require('../../../assets/images/right_arrow.svg')
    const selectedIcon = require('../../../assets/images/right_arrow_selected.svg')

    return(
        <FoodCardStyles onPress={()=>onPress(card)} selected={card.selected}>
            <Image source={card.image} style={{height: 60, width: 60}}/>

            <StyledText style={{fontWeight: "600", fontSize: 14}}>{card.title}</StyledText>

            <FoodCardButton selected={card.selected}>
                    <SvgUri source={card.selected ? selectedIcon : icon}/>
            </FoodCardButton>
        </FoodCardStyles>
    )
}

export default FoodCard