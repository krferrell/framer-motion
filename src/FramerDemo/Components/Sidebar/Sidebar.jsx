import { animations } from "../../Animations";
import { MainContainer, NameContainer } from "./styles";

const Sidebar = () => {
  const renderNames = () => {
    return animations.map((animationProfile) => {
      return <h1>{animationProfile.name}</h1>;
    });
  };

  return (
    <MainContainer>
      <NameContainer>{renderNames()}</NameContainer>
    </MainContainer>
  );
};

export default Sidebar;
