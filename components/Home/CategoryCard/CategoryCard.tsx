import { CategoryCardComponentProps } from './CategoryCardTypes'
import { Image } from 'react-native'
import StyledText from '../../general/StyledText'
import SvgUri from 'react-native-svg-uri'
import {
  CategoryCardButton,
  CategoryCardContainer,
} from './CategoryCard.styles'
import { useTheme } from 'styled-components'
import { constants } from '../../../utils/constants'

const icon = require('../../../assets/images/right_arrow.svg')
const selectedIcon = require('../../../assets/images/right_arrow_selected.svg')

const CategoryCard = ({ card, onPress }: CategoryCardComponentProps) => {

  const theme = useTheme()

  const isDarkTheme = theme.black === constants.darkColors.black

  return (
    <CategoryCardContainer onPress={onPress} selected={card.selected}>
      <Image source={card.image} style={{ height: 60, width: 60 }} />

      <StyledText size="14px" font="M600" style={{color: card.selected ? theme.white : theme.text}}>
        {card.title}
      </StyledText>

      <CategoryCardButton selected={card.selected}>
        <SvgUri source={isDarkTheme ? icon : card.selected ? selectedIcon : icon} />
      </CategoryCardButton>
    </CategoryCardContainer>
  )
}

export default CategoryCard
