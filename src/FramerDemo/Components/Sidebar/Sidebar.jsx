import { animations } from "../../Animations";
import { MainContainer, NameContainer, LinkNames } from "./styles";

const Sidebar = ({setCurrAnimation}) => {
  const renderNames = () => {
    return animations.map((animationProfile, index) => {
      return <LinkNames key={index} href={`#${animationProfile.name}`} onClick={() => setCurrAnimation(animationProfile)}> {animationProfile.name}</LinkNames>;
     
    });
  };

  return (
    <MainContainer>
      <NameContainer>{renderNames()}</NameContainer>
    </MainContainer>
  );
};

export default Sidebar;
