import { useState } from "react";
import { animations } from "../../Animations";
import {
  MainContainer,
  NameContainer,
  LinkNames,
  LinkContainer,
  UnderLine,
  LogoContainer,
  IconContainer,
  IconLink,
} from "./styles";

const Sidebar = ({
  setCurrAnimation,
  currAnimation,
  showIndicator,
  setShowIndicator,
}) => {
  const renderNames = () => {
    return animations.map((animationProfile, index) => {
      const clickAction = () => {
        setCurrAnimation(animationProfile);
        setShowIndicator(true);
      };

      return (
        <LinkContainer key={index}>
          <LinkNames href={`#${animationProfile.name}`} onClick={clickAction}>
            {animationProfile.name}
          </LinkNames>
          <UnderLine
            indicator={animationProfile.name}
            name={currAnimation.name}
            showIndicator={showIndicator}
          />
        </LinkContainer>
      );
    });
  };

  return (
    <MainContainer>
      <LogoContainer />
      <NameContainer>{renderNames()}</NameContainer>
      <IconContainer
        href="https://github.com/krferrell/framer-motion"
        target="_blank"
      >
        <IconLink />
      </IconContainer>
    </MainContainer>
  );
};

export default Sidebar;
