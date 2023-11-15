import styled from 'styled-components/native'

const SearchInput = styled.TextInput.attrs((props) => ({
  placeholder: props.placeholder,
  placeholderTextColor: props.theme.gray,
}))`
  border-bottom-color: ${({theme})=>theme.gray};
  border-bottom-width: 2;
  font-size: 14px;
  padding-bottom: 4px;
  flex: 1;
  margin-left: 8px;
`

export default SearchInput
