import React, { useState } from 'react'
import {
  PaddingContainer,
  ScreenContainer,
} from '../styles/general/ScreenContainer'
import { HomeHeader } from '../components/Home/Header'
import StyledText from '../components/general/StyledText'
import TitlesSection from '../components/Home/TitlesSection'
import SearchInput from '../components/Home/SearchInput'
import SearchContainer from '../components/Home/SearchContainer'
import SvgUri from 'react-native-svg-uri'
import CategoryCard from '../components/Home/CategoryCard/CategoryCard'
import { ScrollView, Text, View } from 'react-native'
import { cards } from '../controllers/foodCtrl'
import FoodCardComponent from '../components/Home/FoodCard/FoodCardComponent'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

const pizzas = [
  { id: 1, image: require('../assets/images/pizza_image.png') },
  { id: 2, image: require('../assets/images/pizza_image2.png') },
  { id: 3, image: require('../assets/images/pizza_image3.png') },
]

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    M400: Montserrat_400Regular,
    M500: Montserrat_500Medium,
    M600: Montserrat_600SemiBold,
    M700: Montserrat_700Bold,
  })

  const [selectedCardIndex, setSelectedCardIndex] = useState<number>()

  const updateSelectedCard = (newIndex: number) => {
    setSelectedCardIndex((oldIndex) =>
      oldIndex !== newIndex ? newIndex : undefined
    )
  }

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <ScreenContainer>
      <PaddingContainer>
        <HomeHeader />
      </PaddingContainer>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <PaddingContainer>
          <TitlesSection>
            <StyledText size="16px" font="M400">
              Food
            </StyledText>
            <StyledText size="32px" font="M700">
              Delivery
            </StyledText>
          </TitlesSection>

          <SearchContainer>
            <SvgUri
              source={require('../assets/images/search_icon.svg')}
              width="20"
              height="20"
            />
            <SearchInput placeholder="Search..." />
          </SearchContainer>

          <StyledText size="16px" font="M700">
            Categories
          </StyledText>
        </PaddingContainer>

        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: 10 }}
            contentContainerStyle={{ paddingEnd: 20 }}
          >
            {cards.map((card, index) => (
              <CategoryCard
                card={{
                  ...card,
                  selected: selectedCardIndex === index,
                }}
                onPress={() => updateSelectedCard(index)}
                key={card.id}
              />
            ))}
          </ScrollView>
        </View>

        <PaddingContainer>
          <StyledText size="16px" font="M700" style={{ marginTop: 16 }}>
            Popular
          </StyledText>

          {pizzas.map((pizza) => (
            <FoodCardComponent key={pizza.id} image={pizza.image} />
          ))}
        </PaddingContainer>
      </ScrollView>
    </ScreenContainer>
  )
}

export default HomeScreen
