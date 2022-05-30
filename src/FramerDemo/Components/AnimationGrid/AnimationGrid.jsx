import { animations } from "../../Animations";
import Cards from "./Cards/Cards";
import { MainContainer } from "./styles";


const AnimationGrid = () => {

    const renderCards = () => {

        return animations.map((animationProfile) => {
            return <Cards animationComp={animationProfile.comp}/>
        })

    }

    return <MainContainer>
        {/* <Cards/>
        <Cards/>
        <Cards/>
        <Cards/> */}
        {renderCards()}
    </MainContainer>
}

export default AnimationGrid;