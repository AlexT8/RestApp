import { ScreenContainer } from "../styles/general/ScreenContainer"
import { HomeHeader } from "../components/Home/Header"
import StyledText from "../components/general/StyledText"
import TitlesSection from "../components/Home/TitlesSection"

const HomeScreen = () => {
    return(
        <ScreenContainer>
            <HomeHeader />

            <TitlesSection>
                <StyledText style={{fontSize: 16, fontWeight: '400'}}>Food</StyledText>
                <StyledText style={{fontSize: 32, fontWeight: "700"}}>Delivery</StyledText>
            </TitlesSection>

        </ScreenContainer>
    )
}

export default HomeScreen