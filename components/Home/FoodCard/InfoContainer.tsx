import SvgUri from 'react-native-svg-uri'
import { InfoContainer, TitleContainer } from './FoodCardStyles'
import StyledText from '../../general/StyledText'
import { constants } from '../../../utils/constants'

const InfoContainerComponent = () => {
  return (
    <InfoContainer>
      <TitleContainer>
        <SvgUri source={require('../../../assets/images/crown_icon.svg')} />

        <StyledText
          size="14px"
          font="M600"
          style={{ marginLeft: 8, color: constants.colors.text }}
        >
          Top of the week
        </StyledText>
      </TitleContainer>
      <StyledText
        size="14px"
        font="M600"
        style={{ marginTop: 16, color: constants.colors.lightDark }}
      >
        Primavera pizza
      </StyledText>
      <StyledText
        size="12px"
        font="M500"
        style={{ color: constants.colors.gray, marginBottom: 10 }}
      >
        Weight 540gr
      </StyledText>
    </InfoContainer>
  )
}

export default InfoContainerComponent
