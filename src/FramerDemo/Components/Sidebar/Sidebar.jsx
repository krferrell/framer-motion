import { useState } from "react";
import { animations } from "../../Animations";
import {
  MainContainer,
  NameContainer,
  LinkNames,
  LinkContainer,
  UnderLine,
  LogoContainer,
} from "./styles";

const Sidebar = ({ setCurrAnimation, currAnimation }) => {

  const [showIndicator, setShowIndicator] = useState(false);


  const renderNames = () => {

    return animations.map((animationProfile, index) => {  

      const clickAction = () => {
        setCurrAnimation(animationProfile);
        setShowIndicator(true);
      }

      return (
        <LinkContainer>
          <LinkNames
            key={index}
            href={`#${animationProfile.name}`}
            onClick={clickAction}
          >
            {" "}
            {animationProfile.name}
          </LinkNames>
          <UnderLine id={animationProfile.name} name={currAnimation.name} showIndicator={showIndicator}/>
        </LinkContainer>
      );
    });
  };

  return (
    <MainContainer>
      <LogoContainer/>
      <NameContainer>{renderNames()}</NameContainer>
    </MainContainer>
  );
};

export default Sidebar;
