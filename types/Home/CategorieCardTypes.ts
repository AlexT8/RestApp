import { ImageSourcePropType, TouchableOpacityProps } from "react-native";

export interface CategorieCardType {
    id: number,
    image: ImageSourcePropType,
    title: string,
    selected: boolean
}

export interface CategorieCardStylesProps extends TouchableOpacityProps {
    selected?: boolean;
}

export interface CategorieCardComponentProps {
    onPress: (card: CategorieCardType) => void;
    card: CategorieCardType
};
  