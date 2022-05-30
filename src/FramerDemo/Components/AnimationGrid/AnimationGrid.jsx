import { animations } from "../../Animations";
import Cards from "./Cards/Cards";
import { MainContainer, RefreshBtn, RefreshText } from "./styles";

const AnimationGrid = () => {
  const renderCards = () => {
    return animations.map((animationProfile) => {
      return (
        <Cards animationComp={animationProfile.comp} refresh={animationProfile.refresh}>

        </Cards>
      );
    });
  };

  return <MainContainer>{renderCards()}</MainContainer>;
};

export default AnimationGrid;
