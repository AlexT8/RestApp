import styled from "styled-components/native"
import { constants } from "../../../utils/constants"
import { CategorieCardStylesProps } from "../../../types/Home/CategorieCardTypes"

export const CategorieCardStyles = styled.TouchableOpacity<CategorieCardStylesProps>`
    background: ${(props) =>
        props.selected ? constants.colors.primary : "#FFFF"};
    height: 180px;
    width: 120px;
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

export const CategorieCardButton = styled.View<CategorieCardStylesProps>`
    height: 26px;
    width: 26px;
    border-radius: 100%;
    background: ${(props) =>
        props.selected ? constants.colors.background : constants.colors.secondary};
    align-items: center;
    justify-content: center;
    
`