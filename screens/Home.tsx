import React from 'react'
import { PaddingContainer, ScreenContainer } from "../styles/general/ScreenContainer"
import { HomeHeader } from "../components/Home/Header"
import StyledText from "../components/general/StyledText"
import TitlesSection from "../components/Home/TitlesSection"
import SearchInput from "../components/Home/SearchInput"
import SearchContainer from "../components/Home/SearchContainer"
import SvgUri from "react-native-svg-uri"
import CategorieCard from "../components/Home/CategorieCard/CategorieCard"
import { ScrollView, View } from "react-native"
import { CategorieCardType } from '../types/Home/CategorieCardTypes'
import { foodInfo, updateSelected } from '../controllers/foodCtrl'
import FoodCardComponent from '../components/Home/FoodCard/FoodCardComponent'

const HomeScreen = () => {

    const [cards, setCards] = React.useState<CategorieCardType[]>(foodInfo)

    const updateCardSelected = (card: CategorieCardType) => {
        updateSelected(card, cards, setCards)
    }

    const pizzas = [
        {id: 1, image: require('../assets/images/pizza_image.png')},
        {id: 2, image: require('../assets/images/pizza_image2.png')},
        {id: 3, image: require('../assets/images/pizza_image3.png')},
    ]

    return(
        <ScreenContainer>
            <PaddingContainer>
                <HomeHeader/>
            </PaddingContainer>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 40}}>
                <PaddingContainer>
                    <TitlesSection>
                        <StyledText style={{fontSize: 16, fontWeight: '400'}}>Food</StyledText>
                        <StyledText style={{fontSize: 32, fontWeight: "700"}}>Delivery</StyledText>
                    </TitlesSection>

                    <SearchContainer>
                        <SvgUri source={require('../assets/images/search_icon.svg')} width="20" height="20"/>
                        <SearchInput placeholder="Search..."/>
                    </SearchContainer>

                    <StyledText style={{fontSize: 16, fontWeight: "700"}}>Categories</StyledText>
                </PaddingContainer>

                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingLeft: 10}}
                    contentContainerStyle={{paddingEnd: 20}}>
                        {
                            cards.map((card: CategorieCardType)=>
                                <CategorieCard card={card} onPress={updateCardSelected} key={card.id}/>
                            )
                        }
                    </ScrollView>
                </View>
                
                <PaddingContainer>
                    <StyledText style={{fontSize: 16, fontWeight: "700", marginTop: 16}}>Popular</StyledText>
                    
                    {
                        pizzas.map(pizza => 
                            <FoodCardComponent key={pizza.id} image={pizza.image}/>
                        )
                    }
                </PaddingContainer>

            </ScrollView>
        </ScreenContainer>
    )
}

export default HomeScreen