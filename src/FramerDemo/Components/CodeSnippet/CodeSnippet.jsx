import { MainContainer } from "./styles";
import { CodeBlock } from "../Reusables/Reusables";

const CodeSnippet = ({ currAnimation, currentAnimationString }) => {

  return (
    <MainContainer>
     <CodeBlock currentAnimationString={currentAnimationString} animationString={currAnimation.codeblockString} currAnimation={currAnimation} />
    </MainContainer>
  );
};

export default CodeSnippet;
