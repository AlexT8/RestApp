import React, { useState } from 'react'
import { PaddingContainer, ScreenContainer } from "../styles/general/ScreenContainer"
import { HomeHeader } from "../components/Home/Header"
import StyledText from "../components/general/StyledText"
import TitlesSection from "../components/Home/TitlesSection"
import SearchInput from "../components/Home/SearchInput"
import SearchContainer from "../components/Home/SearchContainer"
import SvgUri from "react-native-svg-uri"
import CategoryCard from "../components/Home/CategoryCard/CategoryCard"
import { ScrollView, View } from "react-native"
import { cards } from '../controllers/foodCtrl'
import FoodCardComponent from '../components/Home/FoodCard/FoodCardComponent'

const pizzas = [
    {id: 1, image: require('../assets/images/pizza_image.png')},
    {id: 2, image: require('../assets/images/pizza_image2.png')},
    {id: 3, image: require('../assets/images/pizza_image3.png')},
]

const HomeScreen = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>()

    const updateSelectedCard = (newIndex: number) => {
        setSelectedCardIndex(oldIndex => oldIndex !== newIndex ? newIndex : undefined)
    }

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
                            cards.map((card, index)=>
                                <CategoryCard card={{...card, selected: selectedCardIndex === index}} onPress={() => updateSelectedCard(index)} key={card.id}/>
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