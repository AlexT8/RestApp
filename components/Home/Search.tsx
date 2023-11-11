import styled from "styled-components/native";
import { constants } from "../../utils/constants";

const Input = styled.TextInput.attrs(props=>({
        placeholder: props.placeholder,
        placeholderTextColor: constants.colors.gray
    }))`
    border-bottom-color: ${constants.colors.gray};
    border-bottom-width: 2;
    font-size: 14;
    padding-bottom: 4;
`

export default Input