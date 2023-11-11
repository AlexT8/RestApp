import styled from "styled-components/native";
import { constants } from "../../utils/constants";

const SearchInput = styled.TextInput.attrs(props=>({
        placeholder: props.placeholder,
        placeholderTextColor: constants.colors.gray
    }))`
    border-bottom-color: ${constants.colors.gray};
    border-bottom-width: 2;
    font-size: 14;
    padding-bottom: 4;
    flex: 1;
    margin-left: 8;
`

export default SearchInput