import styled from 'styled-components/native'
import { constants } from '../../../utils/constants'

const FoodCard = styled.View`
  width: 100%;
  background-color: #ffff;
  height: 160px;
  border-radius: 25px;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`

export const SideContainer = styled.View`
  justify-content: space-between;
`

export const InfoContainer = styled.View`
  margin-left: 20px;
  margin-top: 20px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`

export const AddButton = styled.TouchableOpacity`
  background-color: ${constants.colors.primary};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
`

export const StarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`

export default FoodCard
