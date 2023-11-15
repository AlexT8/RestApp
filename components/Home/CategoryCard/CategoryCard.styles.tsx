import styled from 'styled-components/native'

export const CategoryCardContainer = styled.TouchableOpacity<{
  selected: boolean
}>`
  background: ${(props) =>
    props.selected ? props.theme.primary : props.theme.white};
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

export const CategoryCardButton = styled.View<{ selected: boolean }>`
  height: 26px;
  width: 26px;
  border-radius: 100px;
  background: ${(props) =>
    props.selected ? props.theme.background : props.theme.secondary};
  align-items: center;
  justify-content: center;
`
