import { animations } from "../../Animations";
import { MainContainer, NameContainer, LinkNames } from "./styles";

const Sidebar = () => {
  const renderNames = () => {
    return animations.map((animationProfile, index) => {
      return <LinkNames key={index} href={`#${animationProfile.name}`}> {animationProfile.name}</LinkNames>;
     
    });
  };
  console.log(animations)
  return (
    <MainContainer>
      <NameContainer>{renderNames()}</NameContainer>
    </MainContainer>
  );
};

export default Sidebar;
