import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const ScreenContainer = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 20};
  background: ${({theme})=>theme.background};
`

export const PaddingContainer = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`
