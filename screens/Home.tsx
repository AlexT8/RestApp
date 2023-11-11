import React from 'react'
import { ScreenContainer } from "../styles/general/ScreenContainer"
import { HomeHeader } from "../components/Home/Header"
import StyledText from "../components/general/StyledText"
import TitlesSection from "../components/Home/TitlesSection"
import SearchInput from "../components/Home/SearchInput"
import SearchContainer from "../components/Home/SearchContainer"
import SvgUri from "react-native-svg-uri"
import FoodCard from "../components/Home/FoodCard"
import { Dimensions, ScrollView } from "react-native"
import { FoodCardType } from '../types/Home/FoodCardTypes'

const HomeScreen = () => {

    const screenWidth = Dimensions.get('screen').width;

    const [cards, setCards] = React.useState<FoodCardType[]>([
        {id: 1, image: require('../assets/images/pizza.png'), title: 'Pizza', selected: false},
        {id: 2, image: require('../assets/images/seafood.png'), title: 'Seafood', selected: false},
        {id: 3, image: require('../assets/images/drink.png'), title: 'SoftDrinks', selected: false},
        {id: 4, image: require('../assets/images/pizza.png'), title: 'Pizza', selected: false},
        {id: 5, image: require('../assets/images/seafood.png'), title: 'Seafood', selected: false},
        {id: 6, image: require('../assets/images/drink.png'), title: 'SoftDrinks', selected: false},
    ])

    const updateSelected = (selectedCard: FoodCardType) => {
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

    return(
        <ScreenContainer>
            <HomeHeader />

            <TitlesSection>
                <StyledText style={{fontSize: 16, fontWeight: '400'}}>Food</StyledText>
                <StyledText style={{fontSize: 32, fontWeight: "700"}}>Delivery</StyledText>
            </TitlesSection>

            <SearchContainer>
                <SvgUri source={require('../assets/images/search_icon.svg')} width="20" height="20"/>
                <SearchInput placeholder="Search..."/>
            </SearchContainer>

            <StyledText style={{fontSize: 16, fontWeight: "700"}}>Categories</StyledText>

            <ScrollView horizontal={true} style={{width: screenWidth, marginLeft: -18, paddingHorizontal: 10}}>
                {
                    cards.map((card: FoodCardType)=>
                        <FoodCard card={card} onPress={updateSelected}/>
                    )
                }
            </ScrollView>
        </ScreenContainer>
    )
}

export default HomeScreen