import SvgUri from 'react-native-svg-uri'
import { InfoContainer, TitleContainer } from './FoodCardStyles'
import StyledText from '../../general/StyledText'
import { constants } from '../../../utils/constants'
import { useTheme } from 'styled-components'

const InfoContainerComponent = () => {

  const theme = useTheme();
  
  return (
    <InfoContainer>
      <TitleContainer>
        <SvgUri source={require('../../../assets/images/crown_icon.svg')} />

        <StyledText
          size="14px"
          font="M600"
          style={{ marginLeft: 8, color: theme.text }}
        >
          Top of the week
        </StyledText>
      </TitleContainer>
      <StyledText
        size="14px"
        font="M600"
        style={{ marginTop: 16, color: theme.lightDark }}
      >
        Primavera pizza
      </StyledText>
      <StyledText
        size="12px"
        font="M500"
        style={{ color: theme.gray, marginBottom: 10 }}
      >
        Weight 540gr
      </StyledText>
    </InfoContainer>
  )
}

export default InfoContainerComponent
