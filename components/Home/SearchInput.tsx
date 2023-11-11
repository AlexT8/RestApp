import styled from "styled-components/native";
import { constants } from "../../utils/constants";

const SearchInput = styled.TextInput.attrs(props=>({
        placeholder: props.placeholder,
        placeholderTextColor: constants.colors.gray
    }))`
    border-bottom-color: ${constants.colors.gray};
    border-bottom-width: 2;
    font-size: 14px;
    padding-bottom: 4px;
    flex: 1;
    margin-left: 8px;
`

export default SearchInput