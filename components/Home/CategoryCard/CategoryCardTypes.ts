import { ImageSourcePropType } from 'react-native'

export interface CategoryCardType {
  id: number
  image: ImageSourcePropType
  title: string
}

export interface CategoryCardComponentProps {
  onPress: () => void
  card: CategoryCardType & { selected: boolean }
}
