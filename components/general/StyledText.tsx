import styled from "styled-components/native"
import { constants } from "../../utils/constants"
import { TextProps } from "react-native";

interface StyledTextProps extends TextProps {
    font?: string;
    size?: string;
}

const StyledText = styled.Text<StyledTextProps>`
    color: ${constants.colors.text};
    font-family: ${(props: any)=>props.font || 'M400'};
    font-size: ${(props: any)=>props.size || 16};
`

export default StyledText