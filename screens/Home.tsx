import { ScreenContainer } from "../styles/general/ScreenContainer"
import { HomeHeader } from "../components/Home/Header"
import StyledText from "../components/general/StyledText"
import TitlesSection from "../components/Home/TitlesSection"
import SearchInput from "../components/Home/SearchInput"
import SearchContainer from "../components/Home/SearchContainer"
import SvgUri from "react-native-svg-uri"
import FoodCard from "../components/Home/FoodCard"
import { Dimensions, ScrollView } from "react-native"

const HomeScreen = () => {

    const screenWidth = Dimensions.get('screen').width;

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

            <ScrollView horizontal={true} style={{width: screenWidth, marginLeft: -18, paddingLeft: 10}}>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />

            </ScrollView>
        </ScreenContainer>
    )
}

export default HomeScreen