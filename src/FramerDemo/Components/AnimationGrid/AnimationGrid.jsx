import { animations } from "../../Animations";
import Cards from "./Cards/Cards";
import { MainContainer } from "./styles";

const AnimationGrid = ({ setShowIndicator, setCurrAnimation, currAnimation }) => {
  const renderCards = () => {
    return animations.map((animationProfile, index) => {
      return (
        <Cards
          key={index}
          id={`${animationProfile.name}`}
          animationComp={animationProfile.comp}
          animationProfile={animationProfile}
          currAnimation={currAnimation}
          setShowIndicator={setShowIndicator}
          setCurrAnimation={setCurrAnimation}
        />
      );
    });
  };

  return <MainContainer >{renderCards()}</MainContainer>;
};

export default AnimationGrid;
