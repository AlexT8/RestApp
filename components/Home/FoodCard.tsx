import styled from "styled-components/native";
import { constants } from "../../utils/constants";
import { TouchableOpacityProps } from "react-native";

interface FoodCardProps extends TouchableOpacityProps {
    selected?: boolean;
}

const FoodCard = styled.TouchableOpacity<FoodCardProps>`
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

export default FoodCard