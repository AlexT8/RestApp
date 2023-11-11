import { ImageSourcePropType, TouchableOpacityProps } from "react-native";

export interface FoodCardType {
    id: number,
    image: ImageSourcePropType,
    title: string,
    selected: boolean
}

export interface FoodCardStylesProps extends TouchableOpacityProps {
    selected?: boolean;
}

export interface FoodCardComponentProps {
    onPress: (card: FoodCardType) => void;
    card: FoodCardType
};
  