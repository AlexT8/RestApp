import React from 'react'
import { ScreenContainer } from "../styles/general/ScreenContainer"
import { HomeHeader } from "../components/Home/Header"
import StyledText from "../components/general/StyledText"
import TitlesSection from "../components/Home/TitlesSection"
import SearchInput from "../components/Home/SearchInput"
import SearchContainer from "../components/Home/SearchContainer"
import SvgUri from "react-native-svg-uri"
import FoodCard from "../components/Home/FoodCard/FoodCard"
import { Dimensions, ScrollView, View } from "react-native"
import { FoodCardType } from '../types/Home/FoodCardTypes'
import { foodInfo, updateSelected } from '../controllers/foodCtrl'

const HomeScreen = () => {

    const [cards, setCards] = React.useState<FoodCardType[]>(foodInfo)

    const updateCardSelected = (card: FoodCardType) => {
        updateSelected(card, cards, setCards)
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

            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        cards.map((card: FoodCardType)=>
                            <FoodCard card={card} onPress={updateCardSelected}/>
                        )
                    }
                </ScrollView>
            </View>
        </ScreenContainer>
    )
}

export default HomeScreen