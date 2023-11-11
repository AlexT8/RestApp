import styled from "styled-components/native";
import { constants } from "../../utils/constants";
import { FoodCardComponentProps, FoodCardType } from '../../types/Home/FoodCardTypes';
import { FoodCardStylesProps } from "../../types/Home/FoodCardTypes";
import { Image, Text } from "react-native";
import StyledText from "../general/StyledText";
import SvgUri from "react-native-svg-uri";

const FoodCardStyles = styled.TouchableOpacity<FoodCardStylesProps>`
    background: ${(props) =>
        props.selected ? constants.colors.primary : "#FFFF"};
    height: 180;
    width: 120;
    border-radius: 20px;
    margin: 10px;
    elevation: 4;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.3;
    shadow-radius: 4px;
    align-items: center;
    justify-content: space-evenly;
`

const FoodCardButton = styled.View<FoodCardStylesProps>`
    height: 26;
    width: 26;
    border-radius: 100%;
    background: ${(props) =>
        props.selected ? constants.colors.background : constants.colors.secondary};
    align-items: center;
    justify-content: center;
    
`

const FoodCard = (props: FoodCardComponentProps) => {

    const { card, onPress } = props

    return(
        <FoodCardStyles onPress={()=>onPress(card)} selected={card.selected}>
            <Image source={card.image} style={{height: 60, width: 60}}/>

            <StyledText style={{fontWeight: "600", fontSize: 14}}>{card.title}</StyledText>

            <FoodCardButton selected={card.selected}>
                    <SvgUri source={card.selected ? require('../../assets/images/right_arrow_selected.svg') : require('../../assets/images/right_arrow.svg')}/>
            </FoodCardButton>
        </FoodCardStyles>
    )
}

export default FoodCard