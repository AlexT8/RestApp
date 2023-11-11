import { CategoryCardComponentProps } from './CategoryCardTypes';
import { Image } from "react-native";
import StyledText from "../../general/StyledText";
import SvgUri from "react-native-svg-uri";
import { CategoryCardButton, CategoryCardContainer } from './CategoryCard.styles';

const icon = require('../../../assets/images/right_arrow.svg')
const selectedIcon = require('../../../assets/images/right_arrow_selected.svg')

const CategoryCard = ({card, onPress}: CategoryCardComponentProps) => {
    return(
        <CategoryCardContainer onPress={onPress} selected={card.selected}>
            <Image source={card.image} style={{height: 60, width: 60}}/>

            <StyledText size='14' font='M600'>{card.title}</StyledText>

            <CategoryCardButton selected={card.selected}>
                    <SvgUri source={card.selected ? selectedIcon : icon}/>
            </CategoryCardButton>
        </CategoryCardContainer>
    )
}

export default CategoryCard