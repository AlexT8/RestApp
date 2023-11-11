import styled from "styled-components/native";
import { constants } from "../../utils/constants";
import { FoodCardComponentProps, FoodCardType } from '../../types/Home/FoodCardTypes';
import { FoodCardStylesProps } from "../../types/Home/FoodCardTypes";

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
`

const FoodCard = (props: FoodCardComponentProps) => {

    const { card, onPress } = props

    return(
        <FoodCardStyles onPress={()=>onPress(card)} selected={card.selected}>
        </FoodCardStyles>
    )
}

export default FoodCard