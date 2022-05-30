import { MainContainer } from "./styles";
import { CodeBlock } from "../Reusables/Reusables";

const CodeSnippet = ({ currAnimation }) => {
  return (
    <MainContainer>
      <CodeBlock animationString={currAnimation.codeblockString}/>
    </MainContainer>
  );
};

export default CodeSnippet;
