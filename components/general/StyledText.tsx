import styled from "styled-components/native"
import { constants } from "../../utils/constants"

const StyledText = styled.Text`
    color: ${constants.colors.text};
    font-family: ${(props: any)=>props.font || 'M400'};
    font-size: ${(props: any)=>props.size || 16};
`

export default StyledText