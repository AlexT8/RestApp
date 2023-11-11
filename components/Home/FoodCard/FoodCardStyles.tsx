import styled from "styled-components/native"
import { constants } from "../../../utils/constants"
import { FoodCardStylesProps } from "../../../types/Home/FoodCardTypes"

export const FoodCardStyles = styled.TouchableOpacity<FoodCardStylesProps>`
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

export const FoodCardButton = styled.View<FoodCardStylesProps>`
    height: 26;
    width: 26;
    border-radius: 100%;
    background: ${(props) =>
        props.selected ? constants.colors.background : constants.colors.secondary};
    align-items: center;
    justify-content: center;
    
`