import { CategorieCardComponentProps } from '../../../types/Home/CategorieCardTypes';
import { Image } from "react-native";
import StyledText from "../../general/StyledText";
import SvgUri from "react-native-svg-uri";
import { CategorieCardButton, CategorieCardStyles } from './CategorieCardStyles';

const CategorieCard = (props: CategorieCardComponentProps) => {

    const { card, onPress } = props

    const icon = require('../../../assets/images/right_arrow.svg')
    const selectedIcon = require('../../../assets/images/right_arrow_selected.svg')

    return(
        <CategorieCardStyles onPress={()=>onPress(card)} selected={card.selected}>
            <Image source={card.image} style={{height: 60, width: 60}}/>

            <StyledText style={{fontWeight: "600", fontSize: 14}}>{card.title}</StyledText>

            <CategorieCardButton selected={card.selected}>
                    <SvgUri source={card.selected ? selectedIcon : icon}/>
            </CategorieCardButton>
        </CategorieCardStyles>
    )
}

export default CategorieCard