import { FoodCardType } from "../types/Home/FoodCardTypes";

export const foodInfo: FoodCardType[] = [
    {id: 1, image: require('../assets/images/pizza.png'), title: 'Pizza', selected: false},
    {id: 2, image: require('../assets/images/seafood.png'), title: 'Seafood', selected: false},
    {id: 3, image: require('../assets/images/drink.png'), title: 'SoftDrinks', selected: false},
    {id: 4, image: require('../assets/images/pizza.png'), title: 'Pizza', selected: false},
    {id: 5, image: require('../assets/images/seafood.png'), title: 'Seafood', selected: false},
    {id: 6, image: require('../assets/images/drink.png'), title: 'SoftDrinks', selected: false},
]

export const updateSelected = (selectedCard: FoodCardType, cards: FoodCardType[], setCards: (arg: FoodCardType[]) => void) => {
    const _cards = [...cards]
    let index = 0

    _cards.forEach((card, i) => {
        card.selected = false
        if(card.id === selectedCard.id) index = i
    })

    selectedCard.selected = !selectedCard.selected
    _cards.splice(index, 1, selectedCard)

    setCards(_cards)
}