import { MainContainer } from "./styles";
import Sidebar from "./Components/Sidebar/Sidebar";
import AnimationGrid from "./Components/AnimationGrid/AnimationGrid";
import CodeSnippet from "./Components/CodeSnippet/CodeSnippet";

const FramerDemo = () => {
    return (
        <MainContainer>
            <Sidebar/>
            <AnimationGrid/>
            <CodeSnippet/>
        </MainContainer>
    )
}

export default FramerDemo;
