import React from 'react'
import { ScreenContainer } from "../styles/general/ScreenContainer"
import { HomeHeader } from "../components/Home/Header"
import StyledText from "../components/general/StyledText"
import TitlesSection from "../components/Home/TitlesSection"
import SearchInput from "../components/Home/SearchInput"
import SearchContainer from "../components/Home/SearchContainer"
import SvgUri from "react-native-svg-uri"
import CategorieCard from "../components/Home/CategorieCard/CategorieCard"
import { Dimensions, Image, ScrollView, View } from "react-native"
import { CategorieCardType } from '../types/Home/CategorieCardTypes'
import { foodInfo, updateSelected } from '../controllers/foodCtrl'
import FoodCard, { AddButton, BottomContainer, InfoContainer, SideContainer, StarContainer } from '../components/Home/FoodCard/FoodCard'
import { constants } from '../utils/constants'

const HomeScreen = () => {

    const [cards, setCards] = React.useState<CategorieCardType[]>(foodInfo)

    const updateCardSelected = (card: CategorieCardType) => {
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
                        cards.map((card: CategorieCardType)=>
                            <CategorieCard card={card} onPress={updateCardSelected}/>
                        )
                    }
                </ScrollView>
            </View>

            <StyledText style={{fontSize: 16, fontWeight: "700", marginTop: 16}}>Popular</StyledText>

            <FoodCard>
                <SideContainer>
                    <InfoContainer>
                        <StyledText style={{fontSize: 14, fontWeight: "600"}}>Top of the week</StyledText>
                        <StyledText style={{fontSize: 16, fontWeight: "600", marginTop: 16}}>Primavera pizza</StyledText>
                        <StyledText style={{fontSize: 14, fontWeight: "500", color: constants.colors.gray, marginBottom: 10}}>Weight 540gr</StyledText>

                    </InfoContainer>

                    <BottomContainer>
                        <AddButton>
                            <SvgUri source={require('../assets/images/add_icon.svg')}/>
                        </AddButton>

                        <StarContainer>
                            <SvgUri source={require('../assets/images/star_icon.svg')}/>
                            <StyledText style={{fontSize: 12, fontWeight: "600"}}>5.0</StyledText>
                        </StarContainer>
                    </BottomContainer>
                </SideContainer>

                <Image source={require('../assets/images/pizza_image.png')} style={{overflow: 'hidden'}}/>
                
            </FoodCard>
        </ScreenContainer>
    )
}

export default HomeScreen